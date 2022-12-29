function request(params,isHeader=false){
  //显示loading
  return new Promise((resolve,reject)=>{
    wx.showLoading({
      title: '正在加载中',
    })
     wx.request({
       ...params,
       url: 'http://localhost:5000'+params.url,
       success:(res)=>{
        //  console.log(res.header["X-Total-Count"])
         if(isHeader){
           resolve({
             list:res.data,
             total:res.header["X-Total-Count"]
           })
         }else{
          resolve(res.data)
         }
       },
       fail:(err)=>{
         reject(err)
       },
       complete:()=>{
         //隐藏loading

         wx.hideLoading({
           success: (res) => {},
         })
       }
     })
  })
}

export default request