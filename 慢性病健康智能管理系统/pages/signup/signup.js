// pages/signup/signup.js
const url = "http://192.168.1.245:8081";
const secret = "fbcbe7d366db91e06e5ca38b923dd495";
const appid = "wx84cae8ce6e9453d4";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    getSignPhoneVal:'',//手机号码
    getSignIdentifyVal:'',//获取验证码
    openId:'',//小程序openid
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
// 获取手机号
  getSignPhone(e) {
     const _this = this,value = e.detail.value
     _this.setData({
       getSignPhoneVal:value
     })
  },
  //获取验证码
  getSignIdentify(e) {
    const _this = this,value = e.detail.value;
    _this.setData({
      getSignIdentifyVal:value
    })
  },
  // 登陆事件

  signup() {
    const _this = this;
    wx.request({
      url:url+'/register3',
      data: {
        phone: _this.data.getSignPhoneVal,
        // password:,
        weixinId: _this.data.openId,
      },
      method:'get',
      success(res) {
        console.log("成功")
        console.log(res)
      }
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
    const _this = this;
    getOpenId(_this)
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
            console.log("打印openid结束")
            // wx.setStorageSync('user', obj); 
            //存储openid 
          }
        });
      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  });
  //获取小程序id结束
}