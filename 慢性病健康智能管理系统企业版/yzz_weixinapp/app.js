//app.js

const corpusList = require('./config').corpus
var UTIL = require('./utils/util.js');
const url = "https://chronic-api.infobigdata.com";
const secret = "b6f619487205d6a3d49b45c5736a9d39";
const appid = "wxe233654cc28fd440";
App({
  globalData: {
    openId: '你好', //自定义
    userId: ''
  },
  onShow: function () {
    UTIL.log('App Show')
    const _this = this;
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
              // _this.globalData.openId = JSON.parse(res.data.data).openid
              console.log("打印openid结束")
              // console.log(JSON.parse(res.data.data).openid)
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
  },
  onHide: function () {
    UTIL.log('App Hide')
  },
  onLaunch: function () {
    UTIL.log('App Launch')
    this.updateUserLocation();
    
  },

  updateUserLocation: function() {
    var that = this
    wx.getLocation({
      //type: 'wgs84',  // gps原始坐标
      type: 'gcj02', //国家标准加密坐标
      success: function (res) {
        that.globalData.latitude = res.latitude
        that.globalData.longitude = res.longitude
        that.globalData.speed = res.speed
        //var accuracy = res.accuracy
        UTIL.log('REFRESH LOCATION: ' + that.globalData.latitude + ' | ' + that.globalData.longitude + ' , speed: ' + that.globalData.speed)
      },
      fail: function(res) {
        UTIL.log('REFRESH LOCATION FAILED...')
      }
    })
  },

  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              that.globalData.custId = UTIL.getUserUnique(that.globalData.userInfo);
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        },
        fail: function () {
          UTIL.log('登录WX失败了！')
        }
      })
    }
  },

  clearUserInfo: function() {
    var that = this
    that.globalData.userInfo = null;
    that.globalData.hasLogin = false;
  },

  globalData:{
    userInfo:null,
    corpus: corpusList,
    custId: '',
    latitude: 0.0,
    longitude: 0.0,
    speed: 0,
  }
})


