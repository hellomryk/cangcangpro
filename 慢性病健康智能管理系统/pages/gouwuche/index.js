// pages/gouwuche/index.js
var _this = null, zong = 'https://chronic-api.infobigdata.com', url = 'https://chronic-api.infobigdata.com';
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
                                    _this.setData({ uid: _this.data.id })
                                    wx.request({
                                        url: zong + '/cart/myCart',
                                        data: {
                                            userId: _this.data.id
                                        },
                                        header: {
                                            'content-type': 'application/json' // 默认值
                                        },
                                        //   method: "POST",
                                        success: function (res) {
                                            console.log(res.data)
                                            console.log("查看商品名字")
                                            console.log(res.data.data)
                                            //  数组去重并添加上数量
                                            const targetArr = res.data.data;
                                            const arr2 = arrayUnique2(targetArr, 'goodId')
                                            console.log('数组去重')
                                            console.log(arr2)
                                            const arr3 = [0, 0, 0];
                                            for (var i = 0; i < arr2.length; i++) {
                                                for (var j = 0; j < targetArr.length; j++) {
                                                    if (arr2[i].goodId == targetArr[j].goodId) {
                                                        arr3[i]++;
                                                    }
                                                }
                                            }
                                            console.log(arr3)
                                            const obj = {}
                                            // targetArr.forEach(function(item,index) {
                                            //   if(obj[item]) {
                                            //       obj[item]++;
                                            //   } else {
                                            //     obj[item] = 1;
                                            //   }
                                            // })
                                            console.log(obj)
                                            // targetArr.forEach(v,k)=>{

                                            // }
                                            var ar = [];
                                            for (var s = 0; s < res.data.data.length; s++) {
                                                ar.push({ name: res.data.data[s].cartId + "", value: res.data.data[s].goodTitle, image: res.data.data[s].goodImg, ps: "规格" + res.data.data[s].goodSpec[0].specValue + res.data.data[s].goodSpec[0].specName + "*" + res.data.data[s].goodSpec[1].specValue + res.data.data[s].goodSpec[1].specName, yuanjia: res.data.data[s].goodUnitPrice, xianjia: res.data.data[s].goodUnitPrice, Number: res.data.data[s].goodCount, goodId: res.data.data[s].goodId, specId: res.data.data[s].goodSpec[0].specId + "@" + res.data.data[s].goodSpec[1].specId })
                                            }
                                            _this.setData({ checkboxItems: ar.reverse() });
                                        }
                                    })
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
Page({

  /**
   * 页面的初始数据
   */
  data: {
      checkboxItems: [],
      box:false,
      money:0,//实付
      num: 0,//去结算
     uid:""//客户id
  },
    boxchen:function(){
        var changed = {},mon=0;
        if(_this.data.box){
            _this.setData({
                box: false
            })
        }else{
            _this.setData({
                box: true
            })
         
        }
//全选循环
        for (var i = 0; i < _this.data.checkboxItems.length; i++) {        
            if (_this.data.box) {
                changed['checkboxItems[' + i + '].checked'] = true;
                mon = Number(_this.data.checkboxItems[i].xianjia) * Number(_this.data.checkboxItems[i].Number) + mon;
               
            } else {
                changed['checkboxItems[' + i + '].checked'] = false;
                _this.setData({
                    moner: 0
                })
            }
        }
//去结算数量
        if (_this.data.box) {
            _this.setData({
                num: _this.data.checkboxItems.length
            })
        } else {
            _this.setData({
                num: 0
            })

        }
        _this.setData(changed);
        _this.setData({money:mon})
    },
    jian:function(e){
        var sv = _this.data.checkboxItems[e.currentTarget.id].Number;
        console.log(sv)
        if (sv>1){
            _this.data.checkboxItems[e.currentTarget.id].Number = sv - 1;
            _this.setData({
                checkboxItems: _this.data.checkboxItems
            })
            var m = 0;
            for (var s = 0; s < _this.data.checkboxItems.length; s++) {
                if (_this.data.checkboxItems[s].checked) {
                    m = Number(_this.data.checkboxItems[s].xianjia) * Number(_this.data.checkboxItems[s].Number) + m;
                }

            }
            shuliang(1, Number(_this.data.checkboxItems[e.currentTarget.id].name), _this.data.checkboxItems[e.currentTarget.id].Number);
       _this.setData({ money: m });
        } else if (sv = 1){
            wx.showModal({
                title: "提示",
                content: "亲，确认要删除这个商品吗？",
                showCancel: true,
                cancelText: "取消",
                cancelColor: "#000",
                confirmText: "确定",
                confirmColor: "#15c86c",
                success: function (res) {
                    console.log(res)
                    if (res.confirm) {
                      var arr=[];
                        for (var s = 0; s < _this.data.checkboxItems.length;s++){
                            if (s != e.currentTarget.id){
                                arr.push(_this.data.checkboxItems[s])
                            }
                            
                        }
                        console.log(arr)
                        shanchu(_this.data.checkboxItems[e.currentTarget.id].name);
                        _this.setData({
                            checkboxItems: arr
                        })
                        
                    } else if (res.cancel){
                        console.log(1111)
                      
                    }
                }
            })
        }
      
    },
    jia: function (e) {
        var sv = _this.data.checkboxItems[e.currentTarget.id].Number;
        console.log(sv)
            _this.data.checkboxItems[e.currentTarget.id].Number = sv + 1;
            _this.setData({
                checkboxItems: _this.data.checkboxItems
            })
            var m = 0;
        for (var s = 0; s < _this.data.checkboxItems.length; s++) {
            if (_this.data.checkboxItems[s].checked) {
                m = Number(_this.data.checkboxItems[s].xianjia) * Number(_this.data.checkboxItems[s].Number) + m;
            }

        }
        shuliang(1, Number(_this.data.checkboxItems[e.currentTarget.id].name), _this.data.checkboxItems[e.currentTarget.id].Number);
        _this.setData({ money: m });
       
    },
    checkboxChange: function (e) {
        var checked = e.detail.value, changed = {},mon1=0,s=0;
        console.log(checked )
        
        console.log(_this.data.checkboxItems[0].name)
        for (var i = 0; i < _this.data.checkboxItems.length; i++) {
            if (checked.indexOf(_this.data.checkboxItems[i].name) !== -1) {
                changed['checkboxItems[' + i + '].checked'] = true;
                mon1 = Number(_this.data.checkboxItems[i].xianjia) * Number(_this.data.checkboxItems[i].Number) + mon1;
                s++;
            } else {
                changed['checkboxItems[' + i + '].checked'] = false
            }
        }
        _this.setData(changed);
        _this.setData({ money: mon1 });
        _this.setData({num: s});
    },
    zhifu :function(){
      console.log(_this.data.checkboxItems)
      const checkedArr= []
      for (var i = 0; i < _this.data.checkboxItems.length; i ++) {
        if (_this.data.checkboxItems[i].checked) {
          checkedArr.push(_this.data.checkboxItems[i])
        }
      }
        if (checkedArr.length>0){
            wx.navigateTo({
                url: '/pages/submitorder/submitorder?checkedArr=' + JSON.stringify(checkedArr) + '&summoney=' + _this.data.money + '&id=' + _this.data.uid
            })
        }else{
            wx.showToast({
                title: "亲！请选择商品结算哦",
                icon: 'none',
                duration: 1000
            })
        }

    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      _this = this;

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
//修改商品数量
function shuliang(types, cartId, buyNumber){
    wx.request({
        url: zong+'/cart/modifyBySpec',
        data: {
            type: types,
            cartId: cartId,
            specStr:24,
            buyNumber: buyNumber,
        },
        header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
       method: "POST",
        success: function (res) {
            console.log(res.data)
            console.log(res.data.result)

        }
    })
}
//删除商品
function shanchu(cartIdArray) {
    wx.request({
        url: zong + '/cart/deleteById',
        data: {
            cartIdArray: cartIdArray,

        },
        header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
       method: "POST",
        success: function (res) {
            console.log(res.data)
            console.log(res.data.result)

        }
    })
}

//更具数组中的某一属性去重
function arrayUnique2(arr, name) {
  var hash = {};
  return arr.reduce(function (item, next) {
    hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
    return item;
  }, []);
}

