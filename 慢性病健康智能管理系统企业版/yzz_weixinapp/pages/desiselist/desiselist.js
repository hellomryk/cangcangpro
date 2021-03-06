// pages/desiselist/desiselist.js
const hostlocal = "https://chronic.infobigdata.com";
var app = getApp();
const hostlocal1 = "https://chronic-api.infobigdata.com";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const selfPage = this;
    // 德贵加的清除子页面中途退出bug的接口-start
    wx.request({
      url: hostlocal + '/doctorapplet/deleteMapByOpenid',
      data: {
        openid: app.globalData.openId
      },
      method:'get',
      header: {
        'Content-Type':"application/json"
      },
      success(res) {
        console.log('qingkong')
      }
    })
    // 德贵加的清除子页面中途退出bug的接口-end
    // wx.request({
    //   url: 'https://chronic.infobigdata.com/weixin/getWeixinInfo',
    //   data:{

    //   }
    // })
   
    // 获取小程序id开始
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    console.log(123)
    wx.login({
      success: function (res) {
        console.log("开始11111111111111")
        console.log(res)
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              var objz = {};
              objz.avatarUrl = res.userInfo.avatarUrl;
              objz.nickName = res.userInfo.nickName;
              wx.setStorageSync('userInfo', objz); //存储userInfo
            }
          });
          // var l = 'https://jqr.infobigdata.com/weixin/getWeixinInfo'
            var l = hostlocal1 +'/weixin/getWeixinInfo'
          // console.log(res)
          wx.request({
            url: l,
            data: {
              code: res.code
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function (res) {
              selfPage.setData({
                openId: app.globalData.openId
              })
              console.log("打印openid结束")
              //发送输入信息开始
              wx.request({
                url: hostlocal+'/doctorapplet/f52024d75d4348f38cdad3670d209c1e/selftest',
                data: {
                  openid: app.globalData.openId,
                  issue: encodeURI("慢病自测")
                },
                method: 'GET',
                success: function (data) {
                  console.log("慢病自测开始")
                  console.log(data)
                 console.log(JSON.parse(data.data.prompt))
                  selfPage.setData({
                    array: JSON.parse(data.data.prompt)
                  })
                  // selfPage.setData({
                  //   array: JSON.parse(data.data.data)
                  // })
                  // console.log(data.data.prompt.split('['))
                  // console.log(JSON.parse("{'key':122}"))

                  //滚动到底部

                }
              })
              // 发送输入信息结束
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  //获取小程序id结束
  },
  gotosonpage(e) {
    console.log(e)
    const id = e.currentTarget.id;
    console.log(id)
    wx.navigateTo({
      url:'/pages/desiselistson/desiselistson?desisename='+id
    })
  },
  //跳转页面

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 德贵加的清除子页面中途退出bug的接口-start
    wx.request({
      url: hostlocal + '/doctorapplet/deleteMapByOpenid',
      data: {
        openid: app.globalData.openId
      },
      method: 'get',
      header: {
        'Content-Type': "application/json"
      },
      success(res) {
        console.log('qingkong')
      }
    })
    // 德贵加的清除子页面中途退出bug的接口-end
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
    // 德贵加的清除子页面中途退出bug的接口-start
    wx.request({
      url: hostlocal + '/doctorapplet/deleteMapByOpenid',
      data: {
        openid: app.globalData.openId
      },
      method: 'get',
      header: {
        'Content-Type': "application/json"
      },
      success(res) {
        console.log('qingkong')
      }
    })
    // 德贵加的清除子页面中途退出bug的接口-end
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