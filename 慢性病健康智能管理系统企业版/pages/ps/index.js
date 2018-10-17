// pages/ps/index.js


var _this=null;
Page({

            /**
             * 页面的初始数据
             */
            data: {
                animation: '',//问题列表动画
                height:0,
                list: {
                    yiyuan: {
                        images: '/pics/yiyuan.png',
                        name: '北京仁和医院',
                        page: '北京协和医院是一所位于北京市东城区，集医疗、科研、教学为一体的大型综合医院。它隶属于中国协和医科大学(2006年改为北京协和医学院/清华大学医学部)，是其的临床医学院，同时也是中国医学科学院的临床医学研究所，中华人民共和国卫生部指定的诊治疑难重症的技术指导中心之一。北京协和医院在中国乃至世界享有盛名。医院成立于1921年。现任院长赵玉沛。北京协和医院是中国最早承担外宾医疗任务的单位，医院专门设立外宾和高干门诊部，开设专门的高干、外宾、特需病区。2006年7月28日被中国奥委会定为“国家队运动员医疗服务指定医院”。'
                    },
                    yisheng: {
                        images: '/pics/yisheng1.png',
                        name: ['王振华', '呼吸内科', '主治医师', ],
                        page: '擅长：呼吸系统疾病、糖尿病、肺癌、肿瘤、感冒、咽喉痛'
                    },
                    yaopin: [{
                        images: '/pics/yaopin.png',
                        name: '双药 麻杏止咳片 0.26g*24片',
                        page: '麻杏止咳片，镇咳，祛痰，平喘。用于急、慢性支气管炎及喘息等。'
                    }, {
                        images: '/pics/yaopin.png',
                        name: '双药 麻杏止咳片 0.26g*24片',
                        page: '麻杏止咳片，镇咳，祛痰，平喘。用于急、慢性支气管炎及喘息等。'
                    }]
                }
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
                   
                    console.log(options.id)
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