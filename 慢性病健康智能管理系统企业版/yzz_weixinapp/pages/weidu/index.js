// pages/weidu/index.js
var _this=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      open:false,
      name:"--",
      list: [],
      ima:'',
      bid:'',
      id:''

  },

    kindToggle: function (e) {
        var id = e.currentTarget.id, list = _this.data.list;
        // console.log(e)
        // console.log(id)
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } 
            else {
                list[i].open = false
            }
        }
        _this.setData({
            list: list
        });
    },
    anniu:function(){
        if (_this.data.open){
            _this.setData({
                open: false
            });
          
        }else{
            _this.setData({
                open: true
            });
        }
       
    },
    anniutop:function(){
        console.log(3333333333)
        if (_this.data.open) {
            _this.setData({
                open: false
            });

        } else {
            _this.setData({
                open: true
            });
        }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(11111)
        console.log(options)
      _this = this;
      _this.setData({
          name: options.id
      })
      //保存
      var bean = JSON.parse(options.za);
      var bean1 = JSON.parse(options.zheng);
      bean1=bean1.join(" ")
      console.log(bean1)
      wx.request({
          url: 'https://jk.infobigdata.com/newrobot5',
          data: {
              type: 5,
              name: bean.username,
              sex: bean.sex,
              old: bean.age,
              diseaseName: options.id,
              symptom: bean1, //（多个症状用空格分开）
              openid: bean.openId,
              inLocation: '北京市', //（所在地）
              date: ' ' //（实时时间，精确到秒，年月日时分秒）
            
          
                 },
          header: {
              'content-type': 'application/json' // 默认值application/x-www-form-urlencoded
          },
           method: "POST",
          success: function (res) {
              console.log(res.data)
              _this.setData({
                  id: bean.openId,
                  bid: res.data.time
              })

          }
      })



     //照片
      wx.request({
          url: 'https://jk.infobigdata.com/newrobot5',
          data: {
              type: 2,
              dis_name: options.id

          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          method: "POST",
          success: function (res) {
              console.log(res.data)
              _this.setData({
                  ima: res.data.base64
              })

          }
      })
    // 维度信息
      wx.request({
          url: 'https://jk.infobigdata.com/newrobot5',
          data: {
              type: 1,
              dis_name: options.id

          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          method: "POST",
          success: function (res) {
              console.log(res.data)
              var arr = [], name = ['简介', '医保疾病', "易感人群",'患病比例', '传染方式', '常用检查', '症状表现', '并发疾病', '就诊科室', '治疗方式', '治疗周期', '治愈率', '常用药品', '治疗费用', '温馨提示', '病因', '预防', '并发症', '症状', '检查', '诊断鉴别', '治疗', '护理', '饮食保健', '宜吃食物', '忌吃食物', '推荐食谱'], ps = [ 'intro', 'medicalInsurance', 'SusceptiblePopulation', 'ProportionOfDisease', 'ModeOfInfection', 'CommonCheck', 'SymptomaticManifestation', 'ConcurrentDisease', 'Department', 'method', 'TreatmentCycle', 'cureRate', 'CommonlyUsedDrugs', 'CostOfTreatment', 'tip', 'Pathogeny', 'Prevention', 'Complication', 'Symptom', 'inspect', 'distinguish', 'Treatment', 'Nursing', 'DietaryHealthCare', 'EatFood', 'AvoidFood', 'RecommendedRecipes'];
              for (var s = 0; s < name.length;s++){
                  var o = res.data[ps[s]];
                  if(s==0){
                      arr.push({ id: s, name: name[s], open: true, pages: o })
                  }else{
                      arr.push({ id: s, name: name[s], open: false, pages: o })
                  }                
              }
              console.log(arr)
              _this.setData({
                  list: arr
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