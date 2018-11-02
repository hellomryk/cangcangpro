// pages/manyslowdesise/manyslowdesise.js
var app = getApp();
var _this = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodlistarr:[],
    flsb_inputval:'',//搜索框输入内容
    xiala:false,//控制下拉啦
    dianId:1,//判断输入框搜索全部还是某一个
    leibiearr:[
    ], //控制类别的数组

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this = this;

    wx.request({
        url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
      data: {
        wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
        keyword: encodeURI(''),
        wikitypeid: _this.data.dianId
      },
      method: 'get',
      success: function (res) {
        console.log(res)
        console.log(JSON.parse(res.data.data))
        console.log(JSON.parse(res.data.prompt))
        _this.setData({
          foodlistarr: JSON.parse(res.data.data),
          leibiearr: JSON.parse(res.data.prompt)
        })
      }
    })
  },
  // 搜索框输入内容
  flsb_input(e) {
      const value = e.detail.value;
      _this.setData({
        flsb_inputval:value
      })
  },
  // 输入框确认事件
  flsb_confirm() {
    wx.request({
      url:'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
      data: {
        wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
        keyword: encodeURI(_this.data.flsb_inputval)
      },
      method:"GET",
      header: {
        "Content-Type":"application/json"
      },
      success(res) {
        _this.setData({
          foodlistarr: JSON.parse(res.data.data)
        })
      }
    })
      _this.setData({
        flsb_inputval:value,
        xiala: false
      })
    if (_this.data.dianId == 1) {
      wx.request({
        url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
        data: {
          wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
          keyword: encodeURI(_this.data.flsb_inputval),
          wikitypeid: _this.data.dianId
        },
        method: 'get',
        success: function (res) {
          _this.setData({
            foodlistarr: JSON.parse(res.data.data),
          })
        }
      })
    } else {
      wx.request({
        url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
        data: {
          wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
          keyword: encodeURI(_this.data.flsb_inputval),
          wikitypeid: _this.data.dianId
        },
        method: 'get',
        success: function (res) {
          _this.setData({
            foodlistarr: JSON.parse(res.data.data),
          })
        }
      })
    }
  },
  //点击类别
  leibie(e) {
    const Id = e.currentTarget.id;
    const arr1 = _this.data.leibiearr;
    for(var i = 0; i < arr1.length; i ++) {
      if(Id == arr1[i].id) {
        arr1[i].status = 1;
      } else {
        arr1[i].status = 0;
      }
    }
    _this.setData({
      leibiearr:arr1,
      dianId:Id,
      xiala: false
    })
    // 当点击全部时请求1的接口,点别的类别时请求2的接口
    if(Id == 1) {
      wx.request({
        url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
        data: {
          wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
          keyword: encodeURI(_this.data.flsb_inputval),
          wikitypeid: _this.data.dianId
        },
        method: 'get',
        success: function (res) {
          _this.setData({
            foodlistarr: JSON.parse(res.data.data),
          })
        }
      })
    } else{
      wx.request({
        url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
        data: {
          wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
          keyword: encodeURI(_this.data.flsb_inputval),
          wikitypeid: _this.data.dianId
        },
        method: 'get',
        success: function (res) {
          _this.setData({
            foodlistarr: JSON.parse(res.data.data),
          })
        }
      })
    }
    

  },
  //点击出现下拉
  tanxiala() {
    if(_this.data.xiala) {
      _this.setData({
        xiala:false
      })
    } else {
      _this.setData({
        xiala: true
      })
    }
  },
  // 输入框确认事件
  flsb_confirm() {
    if (_this.data.dianId == 1) {
      wx.request({
        url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
        data: {
          wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
          keyword: encodeURI(_this.data.flsb_inputval),
          wikitypeid: _this.data.dianId
        },
        method: 'get',
        success: function (res) {
          _this.setData({
            foodlistarr: JSON.parse(res.data.data),
          })
        }
      })
    } else {
      wx.request({
        url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
        data: {
          wikiid: 0,//0代表查列表，具体某一个id表示查具体某一条
          keyword: encodeURI(_this.data.flsb_inputval),
          wikitypeid: _this.data.dianId
        },
        method: 'get',
        success: function (res) {
          _this.setData({
            foodlistarr: JSON.parse(res.data.data),
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  gotoart(e) {
    console.log(e)
    const id = e.currentTarget.id
    wx.navigateTo({
      url:"/pages/manyslowdesiseson/manyslowdesiseson?selectid="+id
    })
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