// pages/box/index.js
const md51 = require('../../utils/MD5.js');
const app = getApp();
// function paysignjsapi(appid, body, mch_id, nonce_str, notify_url, openid, out_trade_no, spbill_create_ip, total_fee,key) {
//     var ret = {
//         appid: appid,
//         body: body,
//         mch_id: mch_id,
//         nonce_str: nonce_str,
//         notify_url: notify_url,
//         openid: openid,
//         out_trade_no: out_trade_no,
//         spbill_create_ip: spbill_create_ip,
//         total_fee: total_fee,
//         trade_type: 'JSAPI'
//     };
//     var str = raw(ret);
//     str = str + '&key=' + key;
//     // var md5Str = md5.createHash('md5').update(str).digest('hex');
//     var md5Str = md51.md5(str);
//     md5Str = md5Str.toUpperCase();
//     return md5Str;
// };
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