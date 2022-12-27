const { default: request } = require("../../util/request")

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(`基于上个列表页面传来的id,跟后端取当前页面id对应的详细信息`,options)
    wx.setNavigationBarTitle({
      title: options.name,
    })
    this.getDetailInfo(options.id)
  },
  getDetailInfo(id){
    request({
      url:`/goods/${id}`
    }).then(res=>{
      console.log(res)
      this.setData({
        info:res
      })
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
  handleTap(evt){
    // console.log("111")
    wx.previewImage({
      current: evt.currentTarget.dataset.current, // 当前显示图片的http链接
      urls: this.data.info.slides.map(item=>`http://localhost:5000${item}`) // 需要预览的图片http链接列表
    })
  }
})