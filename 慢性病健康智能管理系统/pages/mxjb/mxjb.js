// pages/mxjb/mxjb.js
const date = new Date();
const years = [];
const months = [];
const days = [];
const gongyong ="https://chronic.infobigdata.com";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: ["杨坤","王五","李兮兮"],
    year:'开始测评',//某一选项的内容
    siginup: "true", //登陆框消息
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    username:'yk',//用户名
    windowHeight:'',//
    inputValue:'',//存储输入框中的内容
    openId:'',//
    inputShow:1,//判断输入框是否存在
    windowHeightChange:0,//控制聊天框的大小
    scrollTop:'',//滚动的高度
    array:[
    ],
    chuanson:[]
  },
  bindChange: function (e) {
    const val = e.detail.value
    console.log(val)
    console.log(e.detail)
    this.setData({
      year: this.data.years[val[0]]
      // year: this.data.years[2]
    })
  },

  //     // 计算屏幕高度
//     wx.getSystemInfo({
//       success: function(res) {
//         let clientHeight = res.windowHeight,
//           clientWidth = res.windowWidth,
//           rpxR = 750 / clientWidth;
//         var calc = clientHeight * rpxR;
//         console.log(calc)
//         pageSelf.setData({
//           windowHeight: calc
//         });
//       }
//     });
  // 获取用户信息start
  bindGetUserInfo:function(e) {
    // console.log(e.detail.userinfo)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const pageSelf = this;
    //计算屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR;
        console.log(calc)
        pageSelf.setData({
          windowHeight: calc
        })
      }
    })
    //获取登陆用户名
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              pageSelf.setData({
                username: res.userInfo.nickName
              })
              wx.request({
               
                  url: gongyong+'/doctorapplet/f52024d75d4348f38cdad3670d209c1e/doctorinit',
                header: {
                  'content-type': "application/json"
                },
                method: 'GET',
                data: {
                  username: encodeURI(pageSelf.data.username)
                },
                success: function (res) {
                  console.log(pageSelf.data.username)
                  console.log(res)
                  console.log(res)
                  console.log(res.data.secondprompt)
                  console.log(res.data.secondprompt.welcomeuser)
                  console.log(res.data.secondprompt.functionli.buttonone)
                  if(res.data.showType == -1) {
                    var obj1 = {
                      typeId:-1,
                      welcomeuser: res.data.secondprompt.welcomeuser,
                      starttest: res.data.secondprompt.functionli.buttonone,
                      lookhistory: res.data.secondprompt.functionli.buttontwo,
                      firstprompt: res.data.firstprompt
                    }
                    var dataarray = pageSelf.data.array;
                    dataarray.push(obj1)
                    pageSelf.setData({
                      array: dataarray
                    })
                  }
                  //滚动到底部
                  let query = wx.createSelectorQuery().in(pageSelf);
                  query.select(".container_innerHeight").boundingClientRect((res) => {
                    pageSelf.setData({
                      scrollTop:res.height
                    })
                  }).exec()
                }
              })
            }
          })
        }
      }
    })

    // https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/doctorinit

   
  },
  //存储input输入内容
  catchMessage:function(e) {
    const selfPage = this;
    if(e.detail.value != "") {
      selfPage.setData({
        inputValue:e.detail.value
      })
    }
  },
  //确认键盘输入
  submitMessage:function() {
    const selfPage = this;
    sendmessage_pub(selfPage)
  },
  //点击发送按钮
  sendmsg: function (e) {
    const selfPage = this;
    console.log("fasong")
    sendmessage_pub(selfPage)
    sendmessage_pubId(selfPage)
    console.log(selfPage.data.array)
  },
 //控制登录按钮开关
siginuptab: function() {
  const selfPage = this;
  selfPage.setData({
    siginup:false
  })
},
//跳转到症状列表
gotozhengzhuang() {
  const selfPage = this;
  console.log((selfPage.data.chuanson))
  console.log(selfPage.data.username)
  console.log(selfPage.data.openId)
  wx.navigateTo({
    url: '/pages/xinzheng1/index?sex=' + selfPage.data.chuanson[0] + '&age=' + selfPage.data.chuanson[1] + '&username=' + selfPage.data.username + '&openId=' + selfPage.data.openId,
  })
},
starttest() {
  const selfPage = this;
  // 获取小程序id开始
  var user = wx.getStorageSync('user') || {};
  var userInfo = wx.getStorageSync('userInfo') || {};
  console.log(123)
  wx.login({
    success: function (res) {
      console.log("122222222222222222");
      console.log(res.code);
      console.log(res)
      if (res.code) {
        wx.getUserInfo({
          success: function (res) {
            var objz = {};
            objz.avatarUrl = res.userInfo.avatarUrl;
            objz.nickName = res.userInfo.nickName;
            wx.setStorageSync('userInfo', objz); //存储userInfo
          }
        });
        // var l = 'https://chronic.infobigdata.com/appletApi/getUserInfo'
          var l = gongyong +'/appletApi/getUserInfo'
        // console.log(res)
        wx.request({
          url: l,
          data: {
            code: res.code
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
          // header: {}, // 设置请求的 header  
          success: function (res) {
            var obj = {};
            console.log(res)
            obj.openid = res.data.openid;
            obj.expires_in = Date.now() + res.data.expires_in;
            console.log("打印openid开始")
            console.log(obj.openid);
            selfPage.setData({
              openId: obj.openid
            })
            console.log("打印openid结束")
            wx.setStorageSync('user', obj); //存储openid 
            //发送输入信息开始
            wx.request({ 
                url: gongyong +'/doctorapplet/f52024d75d4348f38cdad3670d209c1e/doctorqs', 
              data: {
                openid: obj.openid,
                issue: encodeURI(selfPage.data.year)
              },
              method: 'GET',
              success: function (data) {
                console.log(data)
                console.log(data.data.prompt)
                // console.log(data.data.prompt.split('['))
                // console.log(JSON.parse("{'key':122}"))
                if (data.data.inputShow == 0) {
                  var arr = data.data.prompt.split('[')
                  var arr2 = arr[1].split("]")
                  var obj1 = {
                    typeId: 1,
                    robotsay: data.data.data
                  }
                  var obj2 = {
                    typeId: 0,
                    message: selfPage.data.year
                  }
                  var dataarray = selfPage.data.array;
                  dataarray.push(obj2)
                  dataarray.push(obj1)
                  selfPage.setData({
                    years: arr2[0].split(','),
                    year: arr2[0].split(',')[0],
                    inputShow: data.data.inputShow,
                    windowHeightChange:350,
                    array: dataarray
                  })
                  console.log(arr2[0].split(','))
                } 
                else if (data.data.inputShow == 1){
                  var obj2 = {
                    typeId: 0,
                    message: selfPage.data.year
                  }
                  var obj3 = {
                    typeId: 2,
                    welcomeuserlist: data.data.data,
                    starttestlist: data.data.prompt
                  }
                  var dataarray = selfPage.data.array;
                  dataarray.push(obj2)
                  dataarray.push(obj3)
                  selfPage.setData({
                    windowHeightChange: 0,
                    inputShow: data.data.inputShow,
                    array: dataarray
                  })
                  // console.log(JSON.parse(data.data.prompt))
                } else {
                  if (data.data.showtype == 3) {
                    console.log("保存")
                    console.log(JSON.parse(data.data).diseaseName)
                    var obj3 = {
                      typeId: 3,
                      welcomeuserlist: JSON.parse(data.data).diseaseName,
                      starttestlist: JSON.parse(data.data).diseaseProbability
                    }
                    var dataarray = selfPage.data.array;
                    dataarray.push(obj3)
                    selfPage.setData({
                      windowHeightChange: 200,
                      inputShow: data.data.inputShow,
                      array: dataarray
                    })
                  } 
                  if (data.data.showtype == 4) {
                    var obj3 = {
                      typeId: 4,
                      welcomeuserlist: JSON.parse(data.data).diseaseName,
                      starttestlist: JSON.parse(data.data).diseaseProbability
                    }
                    var dataarray = selfPage.data.array;
                    dataarray.push(obj3)
                    selfPage.setData({
                      windowHeightChange: 200,
                      inputShow: data.data.inputShow,
                      array: dataarray
                    })
                  }
                }
                //滚动到底部
                let query = wx.createSelectorQuery().in(selfPage);
                query.select(".container_innerHeight").boundingClientRect((res) => {
                  console.log('下滑高度')
                  console.log(res)
                  selfPage.setData({
                    scrollTop: res.height
                  })
                }).exec()
              }
            })
            // 发送输入信息结束
          }
        });
      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  });
  //获取小程序id结束
},
//选择确认按钮
confirmbtn () {
  const selfPage = this;
  // 获取小程序id开始
  var user = wx.getStorageSync('user') || {};
  var userInfo = wx.getStorageSync('userInfo') || {};
  console.log(123)
  wx.login({
    success: function (res) {
      console.log(res)
      if (res.code) {
        wx.getUserInfo({
          success: function (res) {
            var objz = {};
            objz.avatarUrl = res.userInfo.avatarUrl;
            objz.nickName = res.userInfo.nickName;
            wx.setStorageSync('userInfo', objz); //存储userInfo
          }
        });
          var l = gongyong +'/appletApi/getUserInfo'
        // console.log(res)
        wx.request({
          url: l,
          data: {
            code: res.code
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
          // header: {}, // 设置请求的 header  
          success: function (res) {
            var obj = {};
            console.log(res)
            obj.openid = res.data.openid;
            obj.expires_in = Date.now() + res.data.expires_in;
            console.log("打印openid开始")
            console.log(obj.openid);
            selfPage.setData({
              openId: obj.openid
            })
            console.log("打印openid结束")
            wx.setStorageSync('user', obj); //存储openid 
            //发送输入信息开始
            wx.request({
                url: gongyong +'/doctorapplet/f52024d75d4348f38cdad3670d209c1e/doctorqs',
              data: {
                openid: obj.openid,
                issue: encodeURI(selfPage.data.year)
              },
              method: 'GET',
              success: function (data) {
                console.log(data)
                console.log(data.data.prompt)
                // console.log(data.data.prompt.split('['))
                // console.log(JSON.parse("{'key':122}"))

                var chuanson = selfPage.data.chuanson;
                chuanson.push(selfPage.data.year)
                selfPage.setData({
                  chuanson: chuanson
                })
                console.log(selfPage.data.chuanson)
                if (data.data.inputShow == 0) {
                  var arr = data.data.prompt.split('[')
                  var arr2 = arr[1].split("]")
                  var obj1 = {
                    typeId: 1,
                    robotsay: data.data.data
                  }
                  var obj2 = {
                    typeId: 0,
                    message: selfPage.data.year
                  }
                  var dataarray = selfPage.data.array;
                  dataarray.push(obj2)
                  dataarray.push(obj1)
                  selfPage.setData({
                    years: arr2[0].split(','),
                    year: arr2[0].split(',')[0],
                    inputShow: data.data.inputShow,
                    windowHeightChange: 400,
                    array: dataarray,
                    chuanson: chuanson
                  })
                  console.log(arr2[0].split(','))
                } else {
                  console.log(data.data.prompt)
                  var obj2 = {
                    typeId: 0,
                    message: selfPage.data.year
                  }
                  var obj3 = {
                    typeId: 2,
                    welcomeuserlist: data.data.data,
                    starttestlist: data.data.prompt
                  }
                  var dataarray = selfPage.data.array;
                  dataarray.push(obj2)
                  dataarray.push(obj3)
                  selfPage.setData({
                    windowHeightChange: 0,
                    inputShow: data.data.inputShow,
                    array: dataarray
                  })
                  // console.log(JSON.parse(data.data.prompt))
                }
                //滚动到底部
                let query = wx.createSelectorQuery().in(selfPage);
                query.select(".container_innerHeight").boundingClientRect((res) => {
                  console.log('下滑高度')
                  console.log(res)
                  selfPage.setData({
                    scrollTop: res.height
                  })
                }).exec()
              }
            })
            // 发送输入信息结束
          }
        });
      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  });
  //获取小程序id结束
},
//   siginuptab: function() {
//     const selfPage = this;
//     selfPage.setData({
//       siginup: false
//     })
//   },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const pageSelf = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          pageSelf.setData({
            siginup: true,
          })
        } else {
          pageSelf.setData({
            siginup:false
          })
        }
      }
    })
    // 查看是否授权
    // wx.getSetting({
    //   success: function (res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function (res) {
    //           console.log(res.userInfo)
    //           console.log(res.userInfo.nickName)
    //           pageSelf.setData({
    //             siginup: true,
    //             username: res.userInfo.nickName
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
//     const pageSelf = this;
//     wx.getSetting({
//       success(res) {
//         if (!res.authSetting['scope.userInfo']) {
//           pageSelf.setData({
//             siginup:true
//           })
//         } else {
//           pageSelf.setData({
//             siginup:false
//           })
//         }
//       }
//     })
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

// 发送事件封装
function sendmessage_pub(selfPage) {
  var inputContent = selfPage.data.inputValue;
  if(inputContent != "") {

  }
}
//发送事件(带openid)封装
function sendmessage_pubId(selfPage) {
  // 获取小程序id开始
  var user = wx.getStorageSync('user') || {};
  var userInfo = wx.getStorageSync('userInfo') || {};
  console.log(123)
  wx.login({
    success: function (res) {
      console.log(res)
      if (res.code) {
        wx.getUserInfo({
          success: function (res) {
            var objz = {};
            objz.avatarUrl = res.userInfo.avatarUrl;
            objz.nickName = res.userInfo.nickName;
            wx.setStorageSync('userInfo', objz); //存储userInfo
          }
        });
        const appkey = 'wx84cae8ce6e9453d4'
        const appsecret = '39e817b148c512cde7ead6c4b3cde98a'

          var l = gongyong +'/appletApi/getUserInfo'
        // console.log(res)
        wx.request({
          url: l,
          data: {
            code: res.code
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
          // header: {}, // 设置请求的 header  
          success: function (res) {
            var obj = {};
            console.log(res)
            obj.openid = res.data.openid;
            obj.expires_in = Date.now() + res.data.expires_in;
            console.log("打印openid开始")
            console.log(obj.openid);
            selfPage.setData({
              openId: obj.openid
            })
            console.log("打印openid结束")
            wx.setStorageSync('user', obj); //存储openid 
            //发送输入信息开始
            wx.request({
                url: gongyong+'/doctorapplet/f52024d75d4348f38cdad3670d209c1e/doctorqs',
              data:{
                openid: obj.openid,
                issue: encodeURI(selfPage.data.inputValue)
                //issue: encodeURI("通过症状列表选择")
              },
              method:'GET',
              success:function(data) {
                if (data.data.inputShow == 0) {
                  var arr = data.data.prompt.split('[')
                  var arr2 = arr[1].split("]")
                  var obj1 = {
                    typeId: 1,
                    robotsay: data.data.data
                  }
                  var obj2 = {
                    typeId: 0,
                    message: selfPage.data.year
                  }
                  var dataarray = selfPage.data.array;
                  dataarray.push(obj2)
                  dataarray.push(obj1)
                  selfPage.setData({
                    years: arr2[0].split(','),
                    year: arr2[0].split(',')[0],
                    inputShow: data.data.inputShow,
                    windowHeightChange: 400,
                    array: dataarray
                  })
                  console.log(arr2[0].split(','))
                } else {
                  console.log(data.data.prompt)
                  var obj2 = {
                    typeId: 0,
                    message: selfPage.data.year
                  }
                  var obj3 = {
                    typeId: 2,
                    welcomeuserlist: data.data.data,
                    starttestlist: data.data.prompt
                  }
                  var dataarray = selfPage.data.array;
                  dataarray.push(obj2)
                  dataarray.push(obj3)
                  selfPage.setData({
                    windowHeightChange: 0,
                    inputShow: data.data.inputShow,
                    array: dataarray
                  })
                  // console.log(JSON.parse(data.data.prompt))
                }
                //滚动到底部
                let query = wx.createSelectorQuery().in(selfPage);
                query.select(".container_innerHeight").boundingClientRect((res) => {
                  console.log('下滑高度')
                  console.log(res)
                  selfPage.setData({
                    scrollTop: res.height
                  })
                }).exec()
              }
            })
            // 发送输入信息结束
          }
        });
      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  });
  //获取小程序id结束
 }



