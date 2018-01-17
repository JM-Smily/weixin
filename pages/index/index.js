//index.js
//获取应用实例
const app = getApp()

Page({
  data: {   
    imgUrls: [
      '../../images/b1.jpg',
      '../../images/b2.jpg',
      '../../images/b3.jpg',
      '../../images/b4.jpg'     
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    list:[],
    list2:[]   
  },
  
   onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }    
    //请求数据
    var that = this;   
    wx.request({
      url: "https://way.jd.com/jisuapi/byclass",
      data:{
        appkey: app.globalData.appkey,       
        classid: 2,
        start:'0',
        num:'4'
      },
      header:{
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method:"POST",
      success(res){        
        that.setData({"list": res.data.result.result.list});
        console.log("list:",that.data.list);
        console.log(res.data.result.result.list);
      }
    });

    wx.request({
      url: "https://way.jd.com/jisuapi/byclass",
      data: {
        appkey: app.globalData.appkey,
        classid:3,
        start: '0',
        num: '4'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "POST",
      success(res) {
        that.setData({ "list2": res.data.result.result.list});
        console.log(res.data.result.result.list);
      }

    })   
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
