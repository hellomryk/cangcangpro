// pages/tianjiadizhi/index.js
var _this=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      checkboxItems: [
          { name: '王某', value: '北京市西城区北三环中路29号院德胜街道华尊大厦B座605室', ps: "111111111", checked:true, id: 5566, },
          { name: '小李', value: '北京市西城区北三环中路29号院德胜街道华尊大厦B座605室', ps: "111111111", id: 5566, },
          { name: '老王', value: '北京市西城区北三环中路29号院德胜街道华尊大厦B座605室', ps: "111111111", id: 5566, },

         
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
    checkboxChange: function (e) {
        var checked = e.detail.value
        var changed = {}
        for (var i = 0; i < _this.data.checkboxItems.length; i++) {
            if (checked.indexOf(_this.data.checkboxItems[i].name) !== -1) {
                changed['checkboxItems[' + i + '].checked'] = true
            } else {
                changed['checkboxItems[' + i + '].checked'] = false
            }
        }
        this.setData(changed)
    },

  onLoad: function (options) {
      _this = this;

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