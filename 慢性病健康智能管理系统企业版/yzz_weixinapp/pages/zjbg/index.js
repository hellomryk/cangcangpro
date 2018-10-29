// pages/zjbg/index.js
var _this=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      jbxi:{},
      jbxi1: {},
      jbxi2: {},
  },
    tiaozhuan:function(e){
       console.log(e)
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      _this=this;
      //详细
      wx.request({
          url: 'https://jk.infobigdata.com/newrobot5',
          data: {
                   type: 7,
                  openid: options.bopenid,
                  time: options.bid
            
          },
          header: {
              'content-type': 'application/json' // 默认值application/x-www-form-urlencoded
          },
          method: "POST",
          success: function (res) {
              console.log(res.data)
              _this.setData({
                  jbxi :res.data.personInformation,
                  jbxi1: res.data.diseaseInformation,
                  jbxi2: res.data.treat,

              })
             

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