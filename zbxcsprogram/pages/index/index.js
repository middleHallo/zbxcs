//index.js
//获取应用实例
const config = require('../../utils/config.js')
const utils = require('../../utils/util.js')

Page({
  data: {
    nickname:''
  },
  
  
  /**
   * 跳转
   */
  goTest:function(){

    let url = config.service.requesturl + 'zbcs/getResult'
    let nickname = this.data.nickname

    utils.gk_get(url,function(res){
      if(res.data.code != 200){
        utils.gk_showModal('请求失败','请求出错了，请重试！',false)
        return 0
      }else{
        console.log(res)
        wx.setStorageSync('nickname', nickname)
        wx.setStorageSync('resultImg', res.data.content.imgurl)
        wx.navigateTo({
          url: '/pages/result/result',
        })
      }
    })
    
  },

  nicknameInput:function(e){
    this.setData({
      nickname:e.detail.value
    })

    console.log(this.data.nickname)
  },

  


  /**************************************************************** */
  /******          用户自定义函数和生命周期函数的分割线         ****** */
  /**************************************************************** */
  
  
  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function(){
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:function(){
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide:function(){
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload:function(){
    console.log('onUnload')
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
