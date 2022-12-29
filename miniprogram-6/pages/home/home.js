import request from '../../util/request'
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    looplist:[],
    goodlist:[]
  },

  current:1,
  total:0,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.renderSwiper()
    this.renderGoods()
  },

  renderSwiper(){
    request({
      url:"/recommends"
    }).then(res=>{
      console.log(res)
      this.setData({
        looplist:res
      })
    })
  },

  renderGoods(){
    request({
      url:`/goods?_page=${this.current}&_limit=5`
    },true).then(res=>{
      // console.log(res)
      this.total = Number(res.total)
      this.setData({
        goodlist:[...this.data.goodlist,...res.list]
      })
    })
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
    console.log("下拉刷新")
    setTimeout(()=>{
      //更新数据了
      wx.stopPullDownRefresh() //停止下拉刷新
    },1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log(this.data.goodlist.length,this.total)
    if(this.data.goodlist.length===this.total){
      return 
    }
    console.log("到底了")
    this.current++

    this.renderGoods()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleEvent(){
    console.log("搜索处理")
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  handleChangePage(evt){
    // wx.navigateTo , can not navigateTo a tabbar page
    // wx.redirectTo ,关闭当前页面
    // wx.switchTab ，I can navigateTo a tabbar page
    var id = evt.currentTarget.dataset.id
    var name = evt.currentTarget.dataset.name

    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&name=${name}`,
    })
  }
})