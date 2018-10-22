// pages/tianjiadizhi/index.js
var _this = null,
    url = 'http://192.168.1.243:8081';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checkboxItems: [],
        userId:null,
        addressId: null,

    },
    shanchu:function(e){
        console.log(e.currentTarget.id)
        wx.showModal({
            title: "提示",
            content: "亲，确认要删除这个地址吗？",
            showCancel: true,
            cancelText: "取消",
            cancelColor: "#000",
            confirmText: "确定",
            confirmColor: "#15c86c",
            success: function (res) {
                console.log(res)
                if (res.confirm) {
                    //删除地址接口
                    wx.request({
                        url: url + '/address/api/delete',
                        data: {

                            ids: e.currentTarget.id
                        },
                        header: {
                            'content-type': 'application/x-www-form-urlencoded' // 默认值application/json
                        },
                        method: "POST",
                        success: function (res) {
                            var arr = [];
                            for (var s = 0; s < _this.data.checkboxItems.length; s++) {
                                if (_this.data.checkboxItems[s].id != e.currentTarget.id) {
                                    arr.push(_this.data.checkboxItems[s])
                                }

                            }
                            console.log(arr)
                            _this.setData({
                                checkboxItems: arr
                            })
                        }
                    })

                } else if (res.cancel) {
                    console.log(1111)

                }
            }
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    checkboxChange: function(e) {
        var checked = e.detail.value
        console.log(e)
        var changed = {}
        for (var i = 0; i < _this.data.checkboxItems.length; i++) {
            if (checked.indexOf(_this.data.checkboxItems[i].id) !== -1) {
                changed['checkboxItems[' + i + '].checked'] = true;
                //设置默认地址接口
                wx.request({
                    url: url + '/address/api/setIsDefault',
                    data: {
                        userId: String(_this.data.userId),
                        addressId: String(checked)
                    },
                    header: {
                        'content-type': 'application/x-www-form-urlencoded' // 默认值application/json
                    },
                      method: "POST",
                    success: function (res) {
                        wx.showToast({
                            title: res.data.msg,
                            icon: 'none',
                            duration: 600
                        })

                    }
                })
            } else {
                changed['checkboxItems[' + i + '].checked'] = false
            }
        }
        this.setData(changed)
    },

    onLoad: function(options) {
        _this = this;

        //地址列表接口
        wx.request({
            url: url + '/address/api/getAddressesByUserId',
            data: {
                userId: options.id
            },
            header: {
                'content-type': 'application/json' // 默认值application/x-www-form-urlencoded
            },
            //   method: "POST",
            success: function(res) {
                console.log(res.data)
                console.log(res.data.data)
                var arr = [];
                for (var s = 0; s < res.data.data.length; s++) {
                    arr.push({
                        name: res.data.data[s].personName,
                        sheng: res.data.data[s].province,
                        shi: res.data.data[s].city,
                        qu: res.data.data[s].area,
                        youzheng: res.data.data[s].postcode,
                        value: res.data.data[s].detailedAddress,
                        ps: res.data.data[s].personTel,
                        checked: res.data.data[s].isDefault == 1 ? true : false,
                        id: res.data.data[s].id,
                        userId: res.data.data[s].userId
                    })
                }
                console.log(arr)
                _this.setData({
                    checkboxItems:arr,
                    userId: res.data.data[0].userId,

                })

            }
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})