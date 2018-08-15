// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareImage:'',
    tempFilePath:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.downloadImage()
  },

  /**
   * download image
   */
  downloadImage:function(){
    let url = wx.getStorageSync('resultImg')
    let that = this
    wx.downloadFile({
      url: url,
      success:res=>{
        that.setData({
          tempFilePath:res.tempFilePath
        })
        setTimeout(function(){
          that.drawImageToFile()
          clearTimeout()
        },300)
      }
    })
  },

  drawImageToFile:function(){
    
    let that = this
    let tempImage = this.data.tempFilePath
    let nickname = wx.getStorageSync('nickname')
    if(nickname == ''){
      nickname = '不知道星人'
    }

    let ctx = wx.createCanvasContext('share', this)

    ctx.drawImage(tempImage,0,0,300,200)
    ctx.fillText(nickname,100,100)
    console.log('DRAW')
    ctx.draw(false,function(){
      wx.canvasToTempFilePath({
        x:0,
        y:0,
        width:750,
        height:1334,
        destWidth:750,
        destHeight:1334,
        canvasId: 'share',
        success:res=>{
          that.setData({
            shareImage:res.tempFilePath
          })
          console.log('success')
          console.log(res)
        },
        fail:function(){
          console.log('fail')
        }
      }, this)
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