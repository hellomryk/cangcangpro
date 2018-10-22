// pages/box/index.js
const url = "http://192.168.1.243:8081";
const secret = "b6f619487205d6a3d49b45c5736a9d39";
const appid = "wxe233654cc28fd440";
const md51 = require('../../utils/MD5.js');
const app = getApp();
function paysignjsapi(appid, body, mch_id, nonce_str, notify_url, openid, out_trade_no, spbill_create_ip, total_fee, key) {
  var ret = {
    appid: appid,
    body: body,
    mch_id: mch_id,
    nonce_str: nonce_str,
    notify_url: notify_url,
    openid: openid,
    out_trade_no: out_trade_no,
    spbill_create_ip: spbill_create_ip,
    total_fee: total_fee,
    trade_type: 'JSAPI'
  };
  var str = raw(ret);
  str = str + '&key=' + key;
  // var md5Str = md5.createHash('md5').update(str).digest('hex');
  var md5Str = md51.md5(str);
  md5Str = md5Str.toUpperCase();
  return md5Str;
};
function raw(args) {
  var keys = Object.keys(args);
  keys = keys.sort();
  var newArgs = {};
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key];
  });
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedArr:[],
    summoney:12,//总钱数
    fare:15,//运费
    openId:'',//小程序openid
    prepayId:'',//微信支付同意下单接口生成的prepayID
    sign:'',//支付签名
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    console.log(1)
    console.log(JSON.parse(options.checkedArr))
    console.log(options.summoney)
    _this.setData({
      checkedArr: JSON.parse(options.checkedArr),
      summoney: Number(options.summoney)
    })
    wx.request({
      url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
      data: {
        appid: "wxe233654cc28fd440",//小程序ID
        mch_id: "1494063492",//商户号
        sign: paysignjsapi("wxe233654cc28fd440", "商品支付—商品结算", "1494063492", this.createNonceStr(), "https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/report", "oltg65O6bVAouExzU5ZfLHdibglM", '20150806125346', '123.12.12.123', "88", 'jr8k4d94ks94nas9jt9lu3nr9ge4krtk'),//签名
        nonce_str: this.createNonceStr(),//随机字符串
        body: "商品支付—商品结算",//商品描述
        out_trade_no: '20150806125346',//商户订单号
        total_fee: "88",//金额
        spbill_create_ip: '192.168.1.177',//终端ip
        notify_url: "https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/report",//通知地址
        trade_type: "JSAPI",//交易类型
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "POST",
      success: function (res) {
        console.log(1111)
        console.log(res)
        console.log(res.data)
        console.log(res.data.result)
      }
    })
    console.log(paysignjsapi("wx5bc33b2ffa89c123", "商品支付—商品结算", "1494063492", this.createNonceStr(), "https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/report", "oltg65O6bVAouExzU5ZfLHdibglM", '20150806125346', '123.12.12.123', "88", 'jr8k4d94ks94nas9jt9lu3nr9ge4krtk'))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 提交订单
  submitorder() {
    const _this = this;
    // 获取统一下单
    wx.request({
      url: url +'/weixin/createUnifiedOrder',
      data: {
        amount:0.01,//金额
        openid:_this.data.openId,//用户的OPenID
        minAppId: appid,//小程序AppID
        spbillCreateIp:'114.241.52.82',//终端IP
      },
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      success(res) {
        console.log("获取统一")
        console.log(res)
        console.log(res.data.data)
        console.log(res.data.data.prepayId)
        _this.setData({
          prepayId: res.data.data.prepayId
        })
        // 获取签名
        wx.request({
          url: url + '/weixin/generateSignature',
          data: {
            prepayId: _this.data.prepayId,//微信统一下单接口生成的prepay_id参数
            minAppId: appid,//小程序appid
          },
          header: {
            "Content-Type": 'application/json'
          },
          method: "GET",
          success(res) {
            console.log('获取签名')
            console.log(res)
            _this.setData({
              sign: res.data.data.sign
            })
            // 调取支付方法
            console.log("paaaaaaaaaaaaa")
            console.log(_this.data.prepayId)
            wx.requestPayment(
              {
                'timeStamp': res.data.data.timeStamp,//时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
                'nonceStr': res.data.data.nonceStr,//随机字符串，长度为32个字符以下
                'package': res.data.data.package, //统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
                'signType': 'MD5',//签名类型，默认为MD5，支持HMAC-SHA256和MD5。注意此处需与统一下单的签名类型一致
                'paySign': res.data.data.sign,//签名,具体签名方案参见微信公众号支付帮助文档;
                'success': function (res) {
                  console.log("成功") 
                  wx.navigateTo({
                    url: '/pages/shouye/shouye',
                  })
                },
                'fail': function (res) { },
                'complete': function (res) { }
              })
          }
        })
      },
    });
    // // 获取签名
    // wx.request({
    //   url: url +'/weixin/generateSignature',
    //   data: {
    //     prepayId: this.data.prepayId,//微信统一下单接口生成的prepay_id参数
    //     minAppId: appid,//小程序appid
    //   },
    //   header:{
    //     "Content-Type":'application/json'
    //   },
    //   method:"GET",
    //   success(res) {
    //     console.log('获取签名')
    //     console.log(res)
    //     _this.setData({
    //       sign:res.data.data.sign
    //     })
    //   }
    // })
    //获取ip
    wx.request({
      url: url+'/weixin/getIpAddress',
      data: {

      },
      method: "GET",
      header: {
        "Content-Type":"application/json"
      },
      success(res) {
        console.log("获取地址ip")
        console.log(res)
        console.log(res.data)
      }
    })
    // // 调取支付方法
    // console.log("paaaaaaaaaaaaa")
    // console.log(_this.data.prepayId)
    // wx.requestPayment(
    //   {
    //     'timeStamp': createTimeStamp(),//时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
    //     'nonceStr': createNonceStr(),//随机字符串，长度为32个字符以下
    //     'package':_this.data.prepayId, //统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
    //     'signType': 'MD5',//签名类型，默认为MD5，支持HMAC-SHA256和MD5。注意此处需与统一下单的签名类型一致
    //     'paySign': _this.data.sign,//签名,具体签名方案参见微信公众号支付帮助文档;
    //     'success': function (res) { 
    //       console.log("成功")
    //     },
    //     'fail': function (res) { },
    //     'complete': function (res) { }
    //   })
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
//随机字符串函数的产生：
function createNonceStr() {
  return Math.random().toString(36).substr(2, 15)
}
// 时间戳产生的函数：
function createTimeStamp() {
  return parseInt(new Date().getTime() / 1000) + ''
}