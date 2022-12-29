const {
  default: request
} = require("../../util/request")

// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      search: this.search.bind(this)
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

  },
  search: function (value) {
    return Promise.all([
      request({
        url: `/categories?title_like=${value}`
      }),
      request({
        url: `/goods?title_like=${value}`
      })
    ]).then(res => {
      return [...res[0].map(item => ({
        ...item,
        text: item.title,
        type: 1
      })), ...res[1].map(item => ({
        ...item,
        text: item.title,
        type: 2
      }))]
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail.item.type)
    if(e.detail.item.type===1){
      // console.log("搜索列表",e.detail.item)
      wx.navigateTo({
        url: `/pages/searchlist/searchlist?id=${e.detail.item.id}&name=${e.detail.item.title}`,
      })
    }else{
      // console.log("详情页面")
      wx.navigateTo({
        url: `/pages/detail/detail?id=${e.detail.item.id}&name=${e.detail.item.title}`,
      })
    }
  }


})