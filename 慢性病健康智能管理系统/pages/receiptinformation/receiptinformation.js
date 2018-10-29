// pages/receiptinformation/receiptinformation.js
var _this = null, url = "https://chronic-api.infobigdata.com";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    getRemarkVal:'',//名字输入内容
    getPhoneVal: '',//手机号输入内容
    getAddVal:'',//获取地址
    getAddressVal: '',//获取详细地址
    json:1,//如果是1就是保存,不是1就是编辑
    userId:'',//用户的userid
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this=this;
      console.log(options)
      _this.setData({
        userId:options.id
      })
    if (options.json == 1) {
      
    } else {
      console.log(JSON.parse(options.json))
      _this.setData({
        getRemarkVal: JSON.parse(options.json).name,//名字输入内容
        getPhoneVal: JSON.parse(options.json).ps,//手机号输入内容
        getAddVal: JSON.parse(options.json).name,//获取地址
        getAddressVal: JSON.parse(options.json).value,//获取详细地址
      })
    }
  },
  //获取备注输入内容
  getRemark(e) {
    const _this = this,value = e.detail.value;
    _this.setData({
      getRemarkVal:value
    }) 
  },
  //获取手机号输入内容
  getPhone(e) {
    const _this = this,value = e.detail.value;
    _this.setData({
      getPhoneVal:value
    })
  },
  // 获取地址
  getAdd(e) {
    const _this = this,value = e.detail.value;
    _this.setData({
      getAddVal:value
    })
  },
  //获取详细地址输入内容
  getAddress(e) {
    const _this = this,value = e.detail.value;
    _this.setData({
      getAddressVal:value
    })
  },
  //保存
  save() {
    wx.request({
      url: url+'/address/api/save',
      data:{
        userId: _this.data.userId,//用户ID
        detailedAddress: _this.data.getAddressVal,//详细地址
        postcode: 0,//暂时放地址
        personName: _this.data.getRemarkVal,//姓名
        personTel: _this.data.getPhoneVal,//电话
          isDefault:0,
          province: "地",
          city: "址：",
          area: _this.data.getAddVal,
      },
      header: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      method:"POST",
      success(res) {
        console.log(res)
        wx.navigateTo({
          url: '/pages/tianjiadizhi/index?id=' + _this.data.userId
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
    console.log(_this)
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