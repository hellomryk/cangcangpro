// pages/mine/mine.js
var _this = null;
var userId = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonText:'登录',//退出
    nameText:'亲,您还没有登录哦'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this;

  },
  loginOrOut() {
    //需要登录
    if (userId == ""){
      console.log("1111")
      wx.navigateTo({
        url: '/pages/signup/signup'//(没有登录跳到注册页面)
      })
    }{
      console.log("2222")
    }

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
