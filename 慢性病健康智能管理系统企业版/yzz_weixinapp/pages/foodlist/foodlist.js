// pages/foodlist/foodlist.js
var bmap = require('../../utils/bmapwx.js');//百度地图搜索附近美食接口
var wxMarkerData = []; //百度搜索附近美食
var selfPage = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodlistarr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   selfPage = this;
    var BMap = new bmap.BMapWX({
      ak: 'zG0qcmqsXdaWPhYxg5KHD67Q3m1ArhGV'
    });
    var fail = function (data) {
      console.log("医院检索失败")
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      console.log("医院检索成功")
      console.log(data)
      console.log(data.originalData.results)
      // liflagarr = data.originalData.results
      // liflagstr = JSON.stringify(data.originalData.results)
      console.log(JSON.stringify(data.originalData.results))
      selfPage.setData({
        foodlistarr: data.originalData.results
      })
      console.log("探索data结束2")
    }
    // 发起POI检索请求 
    BMap.search({
      "query": '医院',
      fail: fail,
      success: success,
      iconPath: '../../pics/marker_red.png',
      iconTapPath: '../../pics/marker_red.png'
    });
  },
  gotoyiyuan(e) {
    console.log(e)
    console.log(e.currentTarget.id)
    const arryi = selfPage.data.foodlistarr;
    var obj = {}
    for(var i = 0; i < arryi.length; i ++) {
      if (arryi[i].name == e.currentTarget.id) {
        obj.lat = arryi[i].location.lat;
        obj.lng = arryi[i].location.lng
      }
    }
    console.log(obj)
    wx.navigateTo({
      url: '/pages/mappage/mappage?jingdu='+obj.lat + '&weidu=' + obj.lng
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