// pages/box/index.js
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

  },

  /**
   * 生命周期函数--监听页面加载
   */
  //随机字符串函数的产生：
  createNonceStr: function () {
    return Math.random().toString(36).substr(2, 15)
  },
  // 时间戳产生的函数：
  createTimeStamp: function () {
    return parseInt(new Date().getTime() / 1000) + ''
  },
  onLoad: function (options) {
    //   wx.requestPayment(
    //       {
    //           'appId': "wx5bc33b2ffa89c123",
    //           'timeStamp': '1490840662',
    //           'nonceStr': '	5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
    //           'package': '',
    //           'signType': 'MD5',
    //           'paySign': '',
    //           'success': function (res) { },
    //           'fail': function (res) { },
    //           'complete': function (res) { }
    //       })

    console.log(1)
    //   console.log(this.createNonceStr())
    //   console.log(this.createTimeStamp())
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