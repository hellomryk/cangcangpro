// pages/box/index.js
const url = "https://chronic-api.infobigdata.com";
const secret = "b6f619487205d6a3d49b45c5736a9d39";
const appid = "wxe233654cc28fd440";
const md51 = require('../../utils/MD5.js');
var _this=null;
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
      userId:'',
    checkedArr:[],
    summoney:0,//总钱数
    fare:0,//运费
    openId:'',//小程序openid
      outTradeNo: '',// 微信支付同意下单接口生成的outTradeNo
    prepayId:'',//微信支付同意下单接口生成的prepayID
    sign:'',//支付签名
      condition: true,//地址开关
      conditionid: "",//地址id
      userName:'',
      provinceName: '',//省
      cityName: '',//市
      countyName: '',//区县
      detailInfo: '',//详细地址
      telNumber: '',//电话
      inputValue:"",//input值
      en:null
  },
dizhi:function(){

    wx.navigateTo({
        url: '/pages/tianjiadizhi/index?id=' + _this.data.userId
    }) 

},
tianjiadizhi: function () {

    wx.navigateTo({
      url: '/pages/receiptinformation/receiptinformation?id=' + _this.data.userId + "&json=1"
    })

    },
    // < !--获取input值 -->
    input: function (e) {
        this.setData({
            inputValue: e.detail.value
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this;
    console.log('app中的openid嫩过来不')
    var getAppInfo = app.globalData.openId;
    console.log(getAppInfo)
    getOpenId(_this);
    console.log(1)
    console.log(JSON.parse(options.checkedArr))
    console.log(options.summoney)
    _this.setData({
      checkedArr: JSON.parse(options.checkedArr),
      summoney: Number(options.summoney),
       userId: options.id
    })

      //地址列表接口
      wx.request({
          url: url + '/address/api/getAddressesByUserId',
          data: {
              userId: _this.data.userId
          },
          header: {
              'content-type': 'application/json' // 默认值application/x-www-form-urlencoded
          },
          //   method: "POST",
          success: function (res) {
              console.log(res.data)
              console.log(res.data.data)
              if (res.data.data.length>0){
                  _this.setData({
                      condition: false,
                  })
                  for (var s = 0; s < res.data.data.length;s++){
                    if (res.data.data[s].isDefault==1){
                              _this.setData({
                                  userName: res.data.data[s].personName,
                                  provinceName: res.data.data[s].province,
                                  cityName: res.data.data[s].city,
                                  countyName: res.data.data[s].area,
                                  detailInfo: res.data.data[s].detailedAddress,
                                  telNumber: res.data.data[s].personTel,
                                  conditionid: res.data.data[s].id,
                              })
                            }
               }

              }else{
                  _this.setData({
                      condition: true,
                  })
              }
          }
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 提交订单
  submitorder() {
      if (!_this.data.condition){
          var arr = [], arr1 = [];
          for (var s = 0; s < _this.data.checkedArr.length; s++) {
              arr.push(_this.data.checkedArr[s].name);
              arr1.push(_this.data.checkedArr[s].goodId + ":" + _this.data.checkedArr[s].specId + ":" + _this.data.checkedArr[s].Number);
          }
              //获取ip
    wx.request({
        url: url + '/weixin/getIpAddress',
        data: {

        },
        method: "GET",
        header: {
            "Content-Type": "application/json"
        },
        success(res) {
            var ip = res.data;
            console.log("获取地址ip")
            console.log(res)
            console.log(res.data)
    // 获取统一下单
            var mon=Number(_this.data.summoney) + Number(_this.data.fare);
    wx.request({
      url: url +'/weixin/createUnifiedOrder',
      data: {
        amount: mon,//金额
        openid:_this.data.openId,//用户的OPenID
        minAppId: appid,//小程序AppID
        spbillCreateIp: ip,//终端IP
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
          prepayId: res.data.data.prepayId,
            outTradeNo: res.data.data.outTradeNo
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
              sign: res.data.data.sign,
                en: res.data.data

            })
          wx.request({
              url: url + '/order/add',
              data: {
                  userId: _this.data.userId,//用户ID
                  cartIdArray: arr,//购物车ID
                  addressId: _this.data.conditionid,//地址ID
                  goodSpecStrNumberArray: arr1,//规格以 及数量字符串 格式为：goodId：商品规格specStr：buyNumber
                  totalAmount: _this.data.summoney,//订单总金额
                  note: _this.data.inputValue,//备注
                  freightVal: _this.data.fare,//运费
                  orderNo: _this.data.outTradeNo,//订单号
              },
              header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值application/json
              },
              method: "POST",
              success: function (res) {
                  console.log(res.data)

      

            // 调取支付方法
            console.log("paaaaaaaaaaaaa")
            console.log(_this.data.prepayId)
            wx.requestPayment(
              {
                'timeStamp': _this.data.en.timeStamp,//时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
                    'nonceStr': _this.data.en.nonceStr,//随机字符串，长度为32个字符以下
                    'package': _this.data.en.package, //统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
                'signType': 'MD5',//签名类型，默认为MD5，支持HMAC-SHA256和MD5。注意此处需与统一下单的签名类型一致
                    'paySign': _this.data.en.sign,//签名,具体签名方案参见微信公众号支付帮助文档;
                'success': function (res) {
                  console.log("成功") 
                    console.log(res) 
                   

                    wx.navigateTo({
                        url: '/pages/myshopping/shouye?id=' + _this.data.userId,
                    })



                },
                'fail': function (res) { },
                'complete': function (res) { }
              })
          }
        })
      },
    });

      }
    })
              }
          })
      }else{
          wx.showToast({
              title: "请填写地址！",
              icon: 'none',
              duration: 1000
          })
      }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const _this = this;
    getOpenId(_this);
      //地址列表接口
      wx.request({
          url: url + '/address/api/getAddressesByUserId',
          data: {
              userId: _this.data.userId
          },
          header: {
              'content-type': 'application/json' // 默认值application/x-www-form-urlencoded
          },
          //   method: "POST",
          success: function (res) {
              console.log(res.data)
              console.log(res.data.data)
              if (res.data.data.length > 0) {
                  _this.setData({
                      condition: false,
                  })
                  for (var s = 0; s < res.data.data.length; s++) {
                      if (res.data.data[s].isDefault == 1) {
                          _this.setData({
                              userName: res.data.data[s].personName,
                              provinceName: res.data.data[s].province,
                              cityName: res.data.data[s].city,
                              countyName: res.data.data[s].area,
                              detailInfo: res.data.data[s].detailedAddress,
                              telNumber: res.data.data[s].personTel,
                              conditionid: res.data.data[s].id,
                          })
                      }
                  }

              } else {
                  _this.setData({
                      condition: true,
                  })
              }

          }
      })
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