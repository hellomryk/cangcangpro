// pages/paizhenlist/index.js
var app = getApp(), _this = null;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: "",

    },
    //跳转到症状列表
    gotozhengzhuang() {
        wx.navigateTo({
            url: '/pages/xinzheng1/index?sex=' + "" + '&age=' + "" + '&username=' + _this.data.username + '&openId=' + app.globalData.openId,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        _this = this;
        // wx.showModal({
        //     title: '提示',
        //     content: '欢迎您进入疾病自诊系统。我们的疾病自诊有九大系统，涉及数千种疾病，您可以进入相关具体系统后，选择和组合是否伴随或者出现过的症状，我们可以迅速为您诊断出可能的疾病以及诊断报告。',
        //     success(res) {
        //         if (res.confirm) {
        //             console.log('用户点击确定')
        //         } else if (res.cancel) {
        //             console.log('用户点击取消')
        //         }
        //     }
        // })
        //app.globalData.openId
        //获取登陆用户名
        // wx.getSetting({
        //     success: function (res) {
        //         if (res.authSetting['scope.userInfo']) {
        //             // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        //             wx.getUserInfo({
        //                 success: function (res) {
        //                     console.log(res.userInfo.nickName)
        //                     _this.setData({
        //                         username: res.userInfo.nickName
        //                     })

        //                 }
        //             })
        //         }
        //     }
        // })
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