// pages/receiptinformation/receiptinformation.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    getRemarkVal:'',//备注输入内容
    getPhoneVal: '',//手机号输入内容
    getAddressVal: '',//地址输入内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
  },
  //获取备注输入内容
  getRemark(e) {
    const _this = this,value = e.detail.value;
    _this.setData({
      getRemarkVal:value
    }) 
  },
  //获取手机号输入内容
  getPhone(e) {
    const _this = this,value = e.detail.value;
    _this.setData({
      getPhoneVal:value
    })
  },
  // 获取地址
  getAdd(e) {
    const _this = this,value = e.detail.value;
    _this.setData({
      getAddVal:value
    })
  },
  //获取详细地址输入内容
  getAddress(e) {
    const _this = this,value = e.detail.value;
    _this.setData({
      getAddressVal:value
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