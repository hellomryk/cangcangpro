// pages/signup/signup.js
const url = "https://chronic-api.infobigdata.com";
const secret = "b6f619487205d6a3d49b45c5736a9d39";
const appid = "wxe233654cc28fd440";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    getSignPhoneVal:'',//手机号码
    getSignIdentifyVal:'',//获取验证码
    openId:'',//小程序openid
    signUpStatus:'0',//登陆状态0未登录1登陆后
    userId:'',//登陆id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    getOpenId(_this)
  },
  //获取验证码
  yzm() {
    const _this = this;
    console.log(_this.data.getSignPhoneVal)
      wx.request({
        url: url +'/login/sms',
        data: {
          phone: _this.data.getSignPhoneVal
        },
        header: {
          "Content-Type":"application/x-www-form-urlencoded"
        },
        method:"POST",
        success(res) {
          console.log(res)
        }
      })
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
    console.log(_this.data.getSignPhoneVal)
    console.log(_this.data.openId)
    console.log('chakanshifouyouopenid')
    if (_this.data.getSignPhoneVal == '' || _this.data.getSignIdentifyVal == '') {
      wx.showToast({
        title:'请输入正确内容',
        icon:'none',
        duration:2000
      })
    } else {
      wx.request({
        url: url + '/register3',
        data: {
          phone: _this.data.getSignPhoneVal,
          code: _this.data.getSignIdentifyVal,
          weixinId: _this.data.openId
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        success(res) {
          console.log("成功")
          console.log(res)
          if (res.data.code == 0) {
            _this.setData({
              userId: res.data.data
            })
            console.log(546656664)
            console.log(res)
            const id = res.data.data
            wx.navigateTo({
              url: '/pages/shangcheng_list/index?id=' + id,
            })
          } else { 

              wx.showToast({
                  title: res.data.msg,
                  icon: 'none',
                  duration: 2000
              })

          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("1")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const _this = this;
    getOpenId(_this)
    console.log("2")
    console.log(_this.data.openId)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("3")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("4")
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