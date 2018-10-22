// pages/ps/index.js


var _this=null;
Page({

            /**
             * 页面的初始数据
             */
            data: {
                animation: '',//问题列表动画
                height:0,
                list: {}
                },

                /**
                 * 生命周期函数--监听页面加载
                 */
                onLoad: function(options) {
                    var _this = this; 
                    var ds='';
                    if (options.id==1) {
                       ds="#yiyuan";
                    } else if (options.id == 2){
                        ds = "#yisheng";
                    } else if (options.id == 3) {
                        ds = "#yaopin";
                    } 
                   
                    console.log(options.name)
                    _this.setData({
                        ids: ds
                    })  
                    console.log(ds)
                    //实例化一个动画
                    _this.animation = wx.createAnimation({
                        // 动画持续时间，单位ms，默认值 400
                        duration: 300,
                        //动画方式
                        timingFunction: 'ease',
                        // 延迟多长时间开始
                        delay: 100,
                        transformOrigin: '50% 50%',
                        success: function (res) {
                            console.log(res)
                        }
                    })
                    //创建节点选择器    
                    var query = wx.createSelectorQuery();    
                    //选择id    
                    query.select(_this.data.ids).boundingClientRect(function (rect) {      
                        // console.log(rect.width)  
                        var s = rect.top-10;  
                        wx.pageScrollTo({
                            scrollTop:s,
                            duration:600,
                            
                        }) 
                        // //平移展示
                        // _this.animation.translateY(-s).step({ duration: 600 })
                        // _this.setData({
                        //     //输出动画
                        //     animation: _this.animation.export()
                        // })
                        
                          }).exec();



                    wx.request({
                        url: 'http://192.168.1.56:8080/newrobot5',
                        data: {
                            type: 4,
                            dis_name: options.name
                            // dis_name:"支气管炎"

                        },
                        header: {
                            'content-type': 'application/json' // 默认值
                        },
                        method: "POST",
                        success: function (res) {
                            console.log(res.data)
                            var d = [];
                            for (var s = 0; s < res.data.drug.length;s++){
                                d.push ({
                                    images: res.data.drug[s].pic,
                                    name: res.data.drug[s].drugName,
                                    page: res.data.drug[s].Indication
                                })
                            }
                            var a = res.data.doctor.position.split("，") ;
                            console.log(a)
                            console.log(11111111)
                            _this.setData({
                                list: { yiyuan: { images: res.data.hospital.pic, name: res.data.hospital.hospitalName, page: res.data.hospital.intro},
                               yisheng: {
                                   images: res.data.doctor.photo,
                                   name: [res.data.doctor.name, res.data.doctor.department, a[0],],
                                   page: '擅长：'+res.data.doctor.BeGoodAt
                                    },  
                                    yaopin: d
                                }
                            })
                        }
                    })
                },

                /**
                 * 生命周期函数--监听页面初次渲染完成
                 */
                onReady: function() {
                    // 页面渲染完成

                },

                /**
                 * 生命周期函数--监听页面显示
                 */
                onShow: function() {

                },

                /**
                 * 生命周期函数--监听页面隐藏
                 */
                onHide: function() {

                },

                /**
                 * 生命周期函数--监听页面卸载
                 */
                onUnload: function() {
                     
                },

                /**
                 * 页面相关事件处理函数--监听用户下拉动作
                 */
                onPullDownRefresh: function() {
                     
                },

                /**
                 * 页面上拉触底事件的处理函数
                 */
                onReachBottom: function() {
                    console.log(_this)
                },

                /**
                 * 用户点击右上角分享
                 */
                onShareAppMessage: function() {

                }
            })