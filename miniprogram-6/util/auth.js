function CheckAuth(callback){
  // if()
  if(wx.getStorageSync('tel')){
    //处理业务
    callback()
  }else{
    if(wx.getStorageSync('token')){
      wx.navigateTo({
        url: '/pages/telform/telform',
      })
    }else{
      wx.navigateTo({
        url: '/pages/auth/auth',
      })
    }
  }
}

export default CheckAuth