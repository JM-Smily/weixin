// pages/search/search.js
var app = getApp();//取得全局App({..})实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:null,
    str:''   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求数据
    const str = options.title;
    this.setData({"str":str});
    console.log("str",str);
    var that = this;
    wx.request({
      url: "https://way.jd.com/jisuapi/search",
      data: {
        appkey: app.globalData.appkey,
        keyword: str,
        num: 10
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "POST",
      success(res) {
        that.setData({ "search": res.data.result.result.list});
        console.log("list:", that.data.list);
        console.log(res);
      }
    });
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