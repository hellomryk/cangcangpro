// pages/gouwuche/index.js
var _this=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      checkboxItems: [],
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
                mon = Number(_this.data.checkboxItems[i].xianjia) * Number(_this.data.checkboxItems[i].Number) + mon;
               
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
    jian:function(e){
        var sv = _this.data.checkboxItems[e.currentTarget.id].Number;
        console.log(sv)
        if (sv>1){
            _this.data.checkboxItems[e.currentTarget.id].Number = sv - 1;
            _this.setData({
                checkboxItems: _this.data.checkboxItems
            })
            var m = 0;
            for (var s = 0; s < _this.data.checkboxItems.length; s++) {
                if (_this.data.checkboxItems[s].checked) {
                    m = Number(_this.data.checkboxItems[s].xianjia) * Number(_this.data.checkboxItems[s].Number) + m;
                }

            }
            _this.setData({ money: m });
        } else if (sv = 1){
            wx.showModal({
                title: "提示",
                content: "亲，确认要删除这个商品吗？",
                showCancel: true,
                cancelText: "取消",
                cancelColor: "#000",
                confirmText: "确定",
                confirmColor: "#15c86c",
                success: function (res) {
                    console.log(res)
                    if (res.confirm) {
                      var arr=[];
                        for (var s = 0; s < _this.data.checkboxItems.length;s++){
                            if (s != e.currentTarget.id){
                                arr.push(_this.data.checkboxItems[s])
                            }
                            
                        }
                        console.log(arr)
                        _this.setData({
                            checkboxItems: arr
                        })
                    }
                }
            })
        }
      
    },
    jia: function (e) {
        var sv = _this.data.checkboxItems[e.currentTarget.id].Number;
        console.log(sv)
            _this.data.checkboxItems[e.currentTarget.id].Number = sv + 1;
            _this.setData({
                checkboxItems: _this.data.checkboxItems
            })
            var m = 0;
        for (var s = 0; s < _this.data.checkboxItems.length; s++) {
            if (_this.data.checkboxItems[s].checked) {
                m = Number(_this.data.checkboxItems[s].xianjia) * Number(_this.data.checkboxItems[s].Number) + m;
            }

        }
        _this.setData({ money: m });
    },
    checkboxChange: function (e) {
        var checked = e.detail.value, changed = {},mon1=0,s=0;
        console.log(checked )
        
        console.log(_this.data.checkboxItems[0].name)
        for (var i = 0; i < _this.data.checkboxItems.length; i++) {
            if (checked.indexOf(_this.data.checkboxItems[i].name) !== -1) {
                changed['checkboxItems[' + i + '].checked'] = true;
                mon1 = Number(_this.data.checkboxItems[i].xianjia) * Number(_this.data.checkboxItems[i].Number) + mon1;
                s++;
            } else {
                changed['checkboxItems[' + i + '].checked'] = false
            }
        }
        _this.setData(changed);
        _this.setData({ money: mon1 });
        _this.setData({num: s});

    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      _this = this;
      wx.request({
          url: 'http://192.168.1.243:8081/cart/myCart',
          data: {
              userId: options.id
          },
          header: {
              'content-type': 'application/json' // 默认值
          },
        //   method: "POST",
          success: function (res) {
              console.log(res.data)
             console.log(res.data.data)
             var ar=[];
              for (var s = 0; s < res.data.data.length;s++){
                  ar.push({ name: res.data.data[s].goodId +"", value: res.data.data[s].goodTitle, image: res.data.data[s].goodImg, ps: "规格" + res.data.data[s].goodSpec[0].specValue + res.data.data[s].goodSpec[0].specName + "*" + res.data.data[s].goodSpec[1].specValue + res.data.data[s].goodSpec[1].specName, yuanjia: res.data.data[s].goodUnitPrice, xianjia: res.data.data[s].goodUnitPrice, Number: res.data.data[s].goodCount })
       }
             _this.setData({ checkboxItems: ar });
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