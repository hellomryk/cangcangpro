// pages/manyslowdesise/manyslowdesise.js
var app = getApp();
var _this = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodlistarr:[],
    flsb_inputval:''//搜索框输入内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this;
    const selfPage = this;
    const keyword=null;
    wx.request({
        url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
      data: {
        wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
        keyword: encodeURI('支气管炎')
      },
      method: 'get',
      success: function (res) {
        console.log(res)
        console.log(JSON.parse(res.data.data))
        selfPage.setData({
          foodlistarr: JSON.parse(res.data.data)
        })
      }
    })
  },
  // 搜索框输入内容
  flsb_input(e) {
      const value = e.detail.value;
      _this.setData({
        flsb_inputval:value
      })
  },
  // 输入框确认事件
  flsb_confirm() {
    wx.request({
      url:'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
      data: {
        wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
        keyword: encodeURI(_this.data.flsb_inputval)
      },
      method:"GET",
      header: {
        "Content-Type":"application/json"
      },
      success(res) {
        _this.setData({
          foodlistarr: JSON.parse(res.data.data)
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  gotoart(e) {
    console.log(e)
    const id = e.currentTarget.id
    wx.navigateTo({
      url:"/pages/manyslowdesiseson/manyslowdesiseson?selectid="+id
    })
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