const { default: request } = require("../../util/request")

// pages/searchlist/searchlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodList:[]
  },

  priceOrder:true,
  commentOrder:true,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.name,
    })
    this.getList(options.id)
  },

  getList(id){
    request({
      url:`/categories/${id}?_embed=goods`
    }).then(res=>{
      console.log(res)
      this.setData({
        goodList:res.goods
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
    wx.navigateTo({
      url: `/pages/detail/detail?id=${evt.currentTarget.dataset.id}&name=${evt.currentTarget.dataset.name}`,
    })
  },
  handlePrice(){
    this.priceOrder =!this.priceOrder

    this.setData({
      goodList:this.priceOrder?this.data.goodList.sort((item1,item2)=>item1.price-item2.price):this.data.goodList.sort((item1,item2)=>item2.price-item1.price)
    })
  },

  handleComment(){
    this.commentOrder =!this.commentOrder

    this.setData({
      goodList:this.commentOrder?this.data.goodList.sort((item1,item2)=>parseInt(item1.goodcomment)-parseInt(item2.goodcomment)):this.data.goodList.sort((item1,item2)=>parseInt(item2.goodcomment)-parseInt(item1.goodcomment))
    })
  }
})