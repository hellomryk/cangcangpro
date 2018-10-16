// pages/gouwuche/index.js
var _this=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      checkboxItems: [
          { name: 'USA', value: '感冒灵颗粒(999)', ps: "哈哈哈哈啊哈哈哈", yuanjia: '13.00', xianjia: "10.00", Number:3},
          { name: 'CHN', value: '感冒灵颗粒(999)', ps: "哈哈哈哈啊哈哈哈", yuanjia: '13.00', xianjia: "10.00", Number: 3},
          { name: 'BRA', value: '感冒灵颗粒(999)', ps: "哈哈哈哈啊哈哈哈", yuanjia: '13.00', xianjia: "10.00", Number: 3},
          { name: 'JPN', value: '感冒灵颗粒(999)', ps: "哈哈哈哈啊哈哈哈", yuanjia: '13.00', xianjia: "10.00", Number: 3},
          { name: 'ENG', value: '感冒灵颗粒(999)', ps: "哈哈哈哈啊哈哈哈", yuanjia: '13.00', xianjia: "10.00", Number: 3},
          { name: 'TUR', value: '感冒灵颗粒(999)', ps: "哈哈哈哈啊哈哈哈", yuanjia: '13.00', xianjia: "10.00", Number: 3},
      ],
      box:false,
      money:0,//实付
      num: 0,//去结算

  },
    boxchen:function(){
        var changed = {},mon=0;
        if(_this.data.box){
            _this.setData({
                box: false
            })
        }else{
            _this.setData({
                box: true
            })
         
        }
//全选循环
        for (var i = 0; i < _this.data.checkboxItems.length; i++) {        
            if (_this.data.box) {
                changed['checkboxItems[' + i + '].checked'] = true;
                mon = Number(_this.data.checkboxItems[i].xianjia) + mon;
               
            } else {
                changed['checkboxItems[' + i + '].checked'] = false;
                _this.setData({
                    moner: 0
                })
            }
        }
//去结算数量
        if (_this.data.box) {
            _this.setData({
                num: _this.data.checkboxItems.length
            })
        } else {
            _this.setData({
                num: 0
            })

        }
        _this.setData(changed);
        _this.setData({money:mon})
    },
    jian:function(){

    },
    jia: function () {

    },
    checkboxChange: function (e) {
        var checked = e.detail.value, changed = {},mon1=0,s=0;
        for (var i = 0; i < _this.data.checkboxItems.length; i++) {
            if (checked.indexOf(_this.data.checkboxItems[i].name) !== -1) {
                changed['checkboxItems[' + i + '].checked'] = true;
                mon1 = Number(_this.data.checkboxItems[i].xianjia) + mon1;
                s++;
            } else {
                changed['checkboxItems[' + i + '].checked'] = false
            }
        }
        _this.setData(changed);
        _this.setData({ money: mon1 });
        _this.setData({num: s})

    },

  /**
   * 生命周期函数--监听页面加载
   */
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