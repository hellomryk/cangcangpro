// pages/shangcheng_list/index.js
var _this = null, url ='https://chronic-api.infobigdata.com';
const appid = "wxe233654cc28fd440";
const secret = "b6f619487205d6a3d49b45c5736a9d39";
function getOpenId(_this) {
    // 获取小程序id开始
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    wx.login({
        success: function (res) {
            if (res.code) {
                wx.getUserInfo({
                    success: function (res) {
                        var objz = {};
                        objz.avatarUrl = res.userInfo.avatarUrl;
                        objz.nickName = res.userInfo.nickName;
                        wx.setStorageSync('userInfo', objz); //存储userInfo
                    }
                });
                var l = url + '/weixin/getWeixinInfo'
                wx.request({
                    url: l,
                    data: {
                        code: res.code,
                        appid: appid,
                        secret: secret
                    },
                    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
                    success: function (res) {
                        console.log(JSON.parse(res.data.data).openid)
                        _this.setData({
                            openId: JSON.parse(res.data.data).openid
                        })
                        //判断是后登陆开始
                        wx.request({
                            url: url + '/login/validation',
                            data: {
                                weixinId: _this.data.openId,
                            },
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            method: "POST",
                            success(res) {
                                console.log(res)
                                if (res.data.code == 500) {
                                    console.log("没有注册过")
                                    wx.navigateTo({
                                        url: '/pages/signup/signup'//(没有登录跳到注册页面)
                                    })
                                } else {
                                    // 注册过了把商品信息存入数据库
                                    console.log("注册过了")
                                    console.log(res)
                                    _this.setData({
                                        id: res.data.data,
                                    })
                                    qingqiu(_this.data.id, -1)
                                }
                            }
                        })
                        //判断是后登陆开始
                    }
                });
            } else {
                console.log('获取用户登录态失败！' + res.errMsg)
            }
        }
    });
    //获取小程序id结束
}
//请求数据
function qingqiu(use, order) {
    wx.request({
        url: url + '/order/myOrder',
        data: {
            userId: use,
            orderStatus: order
        },
        header: {
            'content-type': 'application/json' // 默认值application/x-www-form-urlencoded
        },
        //   method: "POST",
        success: function (res) {
            console.log(res.data.data)
            if (res.data.data.length>0){
                _this.setData({
                    list: res.data.data
                })
                // for (var s = 0; s < res.data.data.length; s++) {
                    //0:待支付 1:待支付关闭 2:已付款，待发货 3:待收货 4:已收货 5:待评价 6:申请退款 7:退款完成 8:已完成订单
                    // if (res.data.data[s].orderStatus == 0 || res.data.data[s].orderStatus == 1) {



                    // } else if (res.data.data[s].orderStatus == 2 || res.data.data[s].orderStatus == 3 || res.data.data[s].orderStatus == 4 || res.data.data[s].orderStatus == 5 || res.data.data[s].orderStatus == 6 || res.data.data[s].orderStatus == 7 ){

                    // } else if ( res.data.data[s].orderStatus == 8) {

                    // }


                // }
            } else if (res.data.data.length < 1){
                _this.setData({
                    list: []
                })
                wx.showToast({
                    title: "亲！您还没有此类订单哟！",
                    icon: 'none',
                    duration: 1000
                })


            }
          
           


        }
    })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:null,
      openId:null,
      bottom:true,
      list: [],
      list1: [
          { checked: true, id: "111", label: "全部订单", value: -1 },
          { checked: false, id: "112", label: "待付款", value: 0 },
          { checked: false, id: "113", label: "已付款", value: 2 },
          { checked: false, id: "114", label: "已完成", value: 8 }
      ],
  },

    kindToggle1: function (e) {
        var id = e.currentTarget.id, list = _this.data.list1;
        console.log(e)
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].checked = !list[i].checked;
                qingqiu(_this.data.id, list[i].value)
            }
            else {
                list[i].checked = false
            }
        }
        console.log(list)
        _this.setData({
            list1: list
        });
    },

    // loadMore: function () { // 触底加载更多

    //     let len = _this.data.listbox.length,
    //         lastItem = _this.data.listbox;
    //     _this.setData({
    //         bottom: false
    //     });

    //     lastItem.push({ id: "111", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url:"/pics/shangpin.jpg"})
    //     lastItem.push({ id: "111", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url: "/pics/shangpin.jpg" })
    //     lastItem.push({ id: "111", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url: "/pics/shangpin.jpg" })
    //     lastItem.push({ id: "111", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url: "/pics/shangpin.jpg" })
    //         _this.setData({
    //             listbox: lastItem
    //         })
    //     _this.setData({
    //         bottom: true
    //     });
    // },
           //取消订单
            quxiao:function(){

            },
            //去付款
            fukuan: function () {

            },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
         _this=this;

      getOpenId(_this)


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      getOpenId(_this);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

