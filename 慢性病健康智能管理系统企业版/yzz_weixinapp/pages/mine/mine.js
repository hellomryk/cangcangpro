// pages/mine/mine.js
var _this = null;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonText:'登录',//退出
    buttonText1: '退出',//退出
    nameText:'亲,您还没有登录哦',
      userId:"",
      nickName:"",//用户名称
      avatarUrl: '',//用户头像

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this;
      _this.setData({
          userId: wx.getStorageSync('userid')
      });



      if (_this.data.userId == "") {


      }else{
          //获取登陆用户名
          wx.getSetting({
              success: function (res) {
                  if (res.authSetting['scope.userInfo']) {
                      // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                      wx.getUserInfo({
                          success: function (res) {
                              console.log(res)
                              _this.setData({
                                  nickName: res.userInfo.nickName,
                                  avatarUrl: res.userInfo.avatarUrl,

                              })

                          }
                      })
                  }
              }
          })

      }


  },
  loginOrOut() {
    //需要登录
        if(_this.data.userId == "") {
    wx.navigateTo({
        url: '/pages/signup/signup'//(没有登录跳到注册页面)
    })
} else {
            wx.showModal({
                title: '提示',
                content: '您确定要退出吗？',
                success(res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                        wx.setStorageSync('userid', "");
                        wx.switchTab({
                            url: "/pages/mine/mine"
                        });
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
            
}

  },
  ss:function(){
      app.baogao.articleId = 1;
      wx.switchTab({
          url: "/pages/znpgresult/znpgresult"
      });
     

    },
  ss1: function () {
      app.baogao.articleId = 2;
      wx.switchTab({
          url: "/pages/znpgresult/znpgresult"
      });
    },
click_kefu:function(){
    wx.makePhoneCall({
        phoneNumber: '18135725121' //仅为示例，并非真实的电话号码
    })
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
