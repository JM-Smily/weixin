//logs.js
const util = require('../../utils/util.js')
//获取应用实例
const app = getApp()
Page({
  data: {
    logs: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000, 
    inputvalue:'',  //输入框的值
    classid:2, //输入框值的对应id
    classname: ["美容", "瘦身", "老人", "养生", "家常菜", "川菜","徽菜","小吃"]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    });
    
  },
  confirm(e){   
    this.setData({
      inputvalue: e.detail.value
    })
    console.log(this.data.inputvalue);  
  } 
})
