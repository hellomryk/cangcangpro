// pages/zjbg/index.js
var _this=null;
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      jbxi:{},
      jbxi1: {},
      jbxi2: {},
//性别
      dayArray: ['选择您的性别', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      duration_day: "",
      dayIndex: 0,
//体重
      dayArray1: ['选择您的体重', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      duration_day1: "",
      dayIndex1: 0,
//职业
      dayArray2: ['选择您的职业', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      duration_day2: "",
      dayIndex2: 0,
//年龄
      dayArray3: ['选择您的年龄', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      duration_day3: "",
      dayIndex3: 0,
//省份
      dayArray4: ['选择您所在的省份', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      duration_day4: "",
      dayIndex4: 0,
//吸烟
      dayArray5: ['选择吸烟习惯', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      duration_day5: "",
      dayIndex5: 0,
//饮酒
      dayArray6: ['选择饮酒习惯', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      duration_day6: "",
      dayIndex6: 0,
  },
    tiaozhuan:function(e){
       console.log(e)
    },

    //性别
    binddayPickerChange: function (e) {
        console.log(e)
        console.log('选的是', this.data.dayArray[e.detail.value])

        this.setData({
            duration_day: this.data.dayArray[e.detail.value]
        })
        this.setData({
            dayIndex: e.detail.value
        })

    },
    //性别
    binddayPickerChange1: function (e) {
        console.log(e)
        console.log('选的是', this.data.dayArray1[e.detail.value])

        this.setData({
            duration_day1: this.data.dayArray1[e.detail.value]
        })
        this.setData({
            dayIndex1: e.detail.value
        })

    },
    //性别
    binddayPickerChange2: function (e) {
        console.log(e)
        console.log('选的是', this.data.dayArray2[e.detail.value])

        this.setData({
            duration_day2: this.data.dayArray2[e.detail.value]
        })
        this.setData({
            dayIndex2: e.detail.value
        })

    },
    //性别
    binddayPickerChange3: function (e) {
        console.log(e)
        console.log('选的是', this.data.dayArray3[e.detail.value])

        this.setData({
            duration_day3: this.data.dayArray3[e.detail.value]
        })
        this.setData({
            dayIndex3: e.detail.value
        })

    },
    //性别
    binddayPickerChange4: function (e) {
        console.log(e)
        console.log('选的是', this.data.dayArray4[e.detail.value])

        this.setData({
            duration_day4: this.data.dayArray4[e.detail.value]
        })
        this.setData({
            dayIndex4: e.detail.value
        })

    },
    //性别
    binddayPickerChange5: function (e) {
        console.log(e)
        console.log('选的是', this.data.dayArray5[e.detail.value])

        this.setData({
            duration_day5: this.data.dayArray5[e.detail.value]
        })
        this.setData({
            dayIndex5: e.detail.value
        })

    },
    //性别
    binddayPickerChange6: function (e) {
        console.log(e)
        console.log('选的是', this.data.dayArray6[e.detail.value])

        this.setData({
            duration_day6: this.data.dayArray6[e.detail.value]
        })
        this.setData({
            dayIndex6: e.detail.value
        })

    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      _this=this;

     


      //保存数据
    //   wx.request({
    //       url: 'http://192.168.1.56:8080/newrobot5',
    //           data: {
    //               type: 5,
    //               name: "_this.data.username",
    //               sex: "",
    //               old: null,
    //               diseaseName: "options.id",
    //               symptom: "bean1", //（多个症状用空格分开）
    //               openid: "app.globalData.openId",
    //               inLocation: '北京市', //（所在地）
    //               date: ' ', //（实时时间，精确到秒，年月日时分秒）
    //               weight: "xxx",
    //               profession: "xxx",
    //               smoke: "xxx",
    //               drink: "xxx"
    //           },
    //           header: {
    //               'content-type': 'application/json' // 默认值application/x-www-form-urlencoded
    //           },
    //           method: "POST",
    //           success: function (res) {
    //               console.log(res.data)
    //               _this.setData({
    //                   id: app.globalData.openId,
    //                   bid: res.data.time
    //               })

    //           }
    //       })
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