// pages/wodexinxi/index.js
// pages/zjbg/index.js
var _this = null,app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:'--',
        jbxi: {},
        jbxi1: {},
        jbxi2: {},
        //性别
        dayArray: ["男","女"],
        duration_day: "",
        dayIndex: 0,
        day:false,
        //体重
        dayArray1: ['偏瘦','适中','偏胖'],
        duration_day1: "",
        dayIndex1: 0,
        day1: false,
        //职业
        dayArray2: ['都市白领', '重体力', '粉尘'],
        duration_day2: "",
        dayIndex2: 0,
        day2: false,
        //年龄
        dayArray3: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        duration_day3: "",
        dayIndex3: 0,
        day3: false,
        //省份
        dayArray4: ['北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', '香港特别行政区', '澳门特别行政区'],
        duration_day4: "",
        dayIndex4: 0,
        day4: false,
        //吸烟
        dayArray5: ['没有', '偶尔', '较多'],
        duration_day5: "",
        dayIndex5: 0,
        day5: false,
        //饮酒
        dayArray6: ['没有', '偶尔', '较多'],
        duration_day6: "",
        dayIndex6: 0,
        day6: false,
    },
    tiaozhuan: function (e) {
        console.log(e)
    },

    //性别
    binddayPickerChange: function (e) {
        console.log(e)
        console.log('选的是', _this.data.dayArray[e.detail.value])

        _this.setData({
            duration_day: _this.data.dayArray[e.detail.value],
            day:true,
            dayIndex: e.detail.value
        })

    },
    //体重
    binddayPickerChange1: function (e) {
        console.log(e)
        console.log('选的是', _this.data.dayArray1[e.detail.value])

        _this.setData({
            duration_day1: _this.data.dayArray1[e.detail.value]
        })
        _this.setData({
            dayIndex1: e.detail.value
        })
        _this.setData({
            day1: true
        })

    },
    //职业
    binddayPickerChange2: function (e) {
        console.log(e)
        console.log('选的是', _this.data.dayArray2[e.detail.value])

        _this.setData({
            duration_day2: _this.data.dayArray2[e.detail.value]
        })
        _this.setData({
            dayIndex2: e.detail.value
        })
        _this.setData({
            day2: true
        })
    },
    //年龄
    binddayPickerChange3: function (e) {
        console.log(e)
        console.log('选的是', _this.data.dayArray3[e.detail.value])

        _this.setData({
            duration_day3: _this.data.dayArray3[e.detail.value]
        })
        _this.setData({
            dayIndex3: e.detail.value
        })
        _this.setData({
            day3: true
        })
    },
    //省份
    binddayPickerChange4: function (e) {
        console.log(e)
        console.log('选的是', _this.data.dayArray4[e.detail.value])

        _this.setData({
            duration_day4: _this.data.dayArray4[e.detail.value]
        })
        _this.setData({
            dayIndex4: e.detail.value
        })
        _this.setData({
            day4: true
        })
    },
    //吸烟
    binddayPickerChange5: function (e) {
        console.log(e)
        console.log('选的是', _this.data.dayArray5[e.detail.value])

        _this.setData({
            duration_day5: _this.data.dayArray5[e.detail.value]
        })
        _this.setData({
            dayIndex5: e.detail.value
        })
        _this.setData({
            day5: true
        })
    },
    //饮酒
    binddayPickerChange6: function (e) {
        console.log(e)
        console.log('选的是', _this.data.dayArray6[e.detail.value])

        _this.setData({
            duration_day6: _this.data.dayArray6[e.detail.value]
        })
        _this.setData({
            dayIndex6: e.detail.value
        })
        _this.setData({
            day6: true
        })
    },
    submit:function(){
        //保存信息
        wx.request({
            url: 'https://chronic-api.infobigdata.com/userDetail/saveOrUpdate',
            data: {
                userId: 22,
                name: _this.data.name != "" ? _this.data.name:'',
                sex: _this.data.dayIndex != "" ? Number(_this.data.dayIndex) +1: '',
                weight: _this.data.dayIndex1 != "" ? Number(_this.data.dayIndex1) + 1 : '',
                profession: _this.data.dayIndex2 != "" ? Number(_this.data.dayIndex2) + 1 : '',
                age: _this.data.dayIndex3 != "" ? Number(_this.data.dayIndex3) + 1 : '',
                smoke: _this.data.dayIndex5 != "" ? Number(_this.data.dayIndex5) + 1 : '',
                drink: _this.data.dayIndex6 != "" ? Number(_this.data.dayIndex6) + 1 : '',
                province: _this.data.dayIndex4 != "" ? Number(_this.data.dayIndex4) + 1 : '',

                // city: _this.data.duration_day != "" ? Number(_this.data.duration_day) + 1 : '',
                // county: _this.data.duration_day != "" ? Number(_this.data.duration_day) + 1 : '',
                // adress: _this.data.duration_day != "" ? Number(_this.data.duration_day) + 1 : '',
                // areaCode: _this.data.duration_day != "" ? Number(_this.data.duration_day) + 1 : '',
                 city: 0,
                county: 0,
                adress: 0,
                areaCode: 0,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值application/json
            },
            method: "POST",
            success: function (res) {
                console.log(res.data)
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 1000
                })
            }
        })
    },
    input: function (e) {
        this.setData({
            name: e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        _this = this;
        //判断信息是否填过
        wx.request({
            url: 'https://chronic-api.infobigdata.com/userDetail/info',
            data: {
                userId: 22
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值application/json
            },
            method: "POST",
            success: function (res) {
                console.log(res.data)
                if (res.data.userDetail!=null){
                 
                    _this.setData({
                        day: res.data.userDetail.sex ? true:false,
                        day1: res.data.userDetail.weight ? true : false,
                        day2: res.data.userDetail.profession ? true : false,
                        day3: res.data.userDetail.age ? true : false,
                        day4: res.data.userDetail.province ? true : false,
                        day5: res.data.userDetail.smoke ? true :false,
                        day6: res.data.userDetail.drink ? true : false,
                        name: res.data.userDetail.name,
                        duration_day: _this.data.dayArray[res.data.userDetail.sex - 1],
                        dayIndex: res.data.userDetail.sex - 1,
                        duration_day1: _this.data.dayArray1[res.data.userDetail.weight - 1],
                        dayIndex1: res.data.userDetail.weight - 1,
                        duration_day2: _this.data.dayArray2[res.data.userDetail.profession - 1],
                        dayIndex2: res.data.userDetail.profession - 1,
                        duration_day3: _this.data.dayArray3[res.data.userDetail.age - 1],
                        dayIndex3: res.data.userDetail.age - 1,
                        duration_day4: _this.data.dayArray4[res.data.userDetail.province - 1],
                        dayIndex4: res.data.userDetail.province - 1,
                        duration_day5: _this.data.dayArray5[res.data.userDetail.smoke - 1],
                        dayIndex5: res.data.userDetail.smoke - 1,
                        duration_day6: _this.data.dayArray6[res.data.userDetail.drink - 1],
                        dayIndex6: res.data.userDetail.drink - 1,
                    })



                   }else{

                   }
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