var initData = 'this is first line\nthis is second line'
var extraLine = [];
// var w=document.getElementsByTagName('view');
// console.log(w);
// var toastNum = 2;
// var pageData = {};
// pageData.data = {};
// for(var i = 0; i <= toastNum; ++i) {
//   pageData.data['toast'+i+'Hidden'] = true
//   ;(function (index) {
//     pageData['toast'+index+'Change'] = function(e) {
//       var obj = {}
//       obj['toast'+index+'Hidden'] = true
//       this.setData(obj)
//     }
//     pageData['toast'+index+'Tap'] = function(e) {
//       var obj = {}
//       obj['toast'+index+'Hidden'] = false
//       this.setData(obj)
//     }
//   })(i)
// }
// console.log(pageData);
// Page(pageData);
Page({
  // data: {
  //   hidden: true,
  //   text: initData,
  //   iconSize: [20, 30, 40, 50, 60, 70],
  //   iconColor: [
  //     'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple',
    
  //   ],
  //   iconType: [
  //     'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
  //     'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
  //     'info_circle', 'cancel', 'search', 'clear'
  //   ],
  //   imgUrls: [
  //     'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
  //     'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
  //     'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
  //   ],
    
  //   indicatorDots: false,
  //   autoplay: false,
  //   interval: 5000,
  //   duration: 1000,
  //   modalHidden: true,
  //   modalHidden2: true,
  //   actionSheetHidden: true,
  //   actionSheetItems: ['item1', 'item2', 'item3', 'item4'],
  //   markers: [{
  //     latitude: 23.099994,
  //     longitude: 113.324520,
  //     name: 'T.I.T 创意园',
  //     desc: '我现在的位置'
  //   }],
  //   covers: [{
  //     latitude: 23.099794,
  //     longitude: 113.324520,
  //     iconPath: '../images/car.png',
  //     rotate: 10
  //   }, {
  //     latitude: 23.099298,
  //     longitude: 113.324129,
  //     iconPath: '../images/car.png',
  //     rotate: 90
  //   }],
  //   array: [{
  //     mode: 'scaleToFill',
  //     text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
  //   }, { 
  //     mode: 'aspectFit',
  //     text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
  //   }, { 
  //     mode: 'aspectFill',
  //     text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
  //   }, { 
  //     mode: 'top',
  //     text: 'top：不缩放图片，只显示图片的顶部区域' 
  //   }, {      
  //     mode: 'bottom',
  //     text: 'bottom：不缩放图片，只显示图片的底部区域'
  //   }, { 
  //     mode: 'center',
  //     text: 'center：不缩放图片，只显示图片的中间区域'
  //   }, { 
  //     mode: 'left',
  //     text: 'left：不缩放图片，只显示图片的左边区域'
  //   }, { 
  //     mode: 'right',
  //     text: 'right：不缩放图片，只显示图片的右边边区域'
  //   }, { 
  //     mode: 'top left',
  //     text: 'top left：不缩放图片，只显示图片的左上边区域' 
  //   }, { 
  //     mode: 'top right',
  //     text: 'top right：不缩放图片，只显示图片的右上边区域'
  //   }, { 
  //     mode: 'bottom left',
  //     text: 'bottom left：不缩放图片，只显示图片的左下边区域'
  //   }, { 
  //     mode: 'bottom right',
  //     text: 'bottom right：不缩放图片，只显示图片的右下边区域'
  //   }],
  //   src: '../../resources/cat.jpg'
  // },
  // imageError: function(e) {
  //   console.log('image3发生error事件，携带值为', e.detail.errMsg)
  // },
  // add: function(e) {
  //   extraLine.push('other line')
  //   this.setData({
  //     text: initData + '\n' + extraLine.join('\n')
  //   })
  // },
  // remove: function(e) {
  //   if (extraLine.length > 0) {
  //     extraLine.pop()
  //     this.setData({
  //       text: initData + '\n' + extraLine.join('\n')
  //     })
  //   }
  // },
  // changeIndicatorDots: function(e) {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // },
  // changeAutoplay: function(e) {
  //   this.setData({
  //     autoplay: !this.data.autoplay
  //   })
  // },
  // intervalChange: function(e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },
  // durationChange: function(e) {
  //   this.setData({
  //     duration: e.detail.value
  //   })
  // },
  // loadingChange: function () {
  //   this.setData({
  //     hidden: true
  //   })
  // },
  // loadingTap: function () {
  //   this.setData({
  //     hidden: false
  //   })

  //   var that = this
  //   setTimeout(function () {
  //     that.setData({
  //       hidden: true
  //     })
  //   }, 1500)
  // },
  // modalTap: function(e) {
  //   this.setData({
  //     modalHidden: false
  //   })
  // },
  // modalChange: function(e) {
  //   this.setData({
  //     modalHidden: true
  //   })
  // },
  // modalTap2: function(e) {
  //   this.setData({
  //     modalHidden2: false
  //   })
  // },
  // modalChange2: function(e) {
  //   this.setData({
  //     modalHidden2: true
  //   })
  // },
  // actionSheetTap: function(e) {
  //   this.setData({
  //     actionSheetHidden: !this.data.actionSheetHidden
  //   })
  // },
  // actionSheetChange: function(e) {
  //   this.setData({
  //     actionSheetHidden: !this.data.actionSheetHidden
  //   })
  // },
  // bindItemTap:function(e){
  //   console.log('tap ' + e.currentTarget.dataset.name)
  // },
  // canvasIdErrorCallback: function (e) {
  //   console.error(e.detail.errMsg)
  // },
  // onReady: function (e) {

  //   //使用wx.createContext获取绘图上下文context
  //   var context = wx.createContext()

  //   context.setStrokeStyle("#00ff00")
  //   context.setLineWidth(5)
  //   context.rect(0, 0, 200, 200)
  //   context.stroke()
  //   context.setStrokeStyle("#ff0000")
  //   context.setLineWidth(2)
  //   context.moveTo(160, 100)
  //   context.arc(100, 100, 60, 0, 2 * Math.PI, true)
  //   context.moveTo(140, 100)
  //   context.arc(100, 100, 40, 0, Math.PI, false)
  //   context.moveTo(85, 80)
  //   context.arc(80, 80, 5, 0, 2 * Math.PI, true)
  //   context.moveTo(125, 80)
  //   context.arc(120, 80, 5, 0, 2 * Math.PI, true)
  //   context.stroke()

  //   //调用wx.drawCanvas，通过canvasId指定在哪张画布上绘制，通过actions指定绘制行为
  //   wx.drawCanvas({
  //     canvasId: 'firstCanvas',
  //     actions: context.getActions() //获取绘图动作数组
  //   })
  // },
  jump:function(){

    wx.navigateTo({
    url: './demo',
    success:function(){
      console.log('跳出页面成功');
    },
    fail:function(){
      console.log('跳出页面不成功');
    }
  })

  },
  back:function(){
    wx.navigateBack();
  },
  jump2:function(){
    wx.redirectTo({
      url: './demo'
    })
  },
   openLocation: function (e) {
    console.log(e)
    var value = e.detail.value
    console.log(value)
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address
    })
  },
  show:function(){
    wx.showNavigationBarLoading();
  },
  hide:function(){
    wx.hideNavigationBarLoading();
  },
  set:function(){
    wx.setNavigationBarTitle({
    title: '当前的这个测试页面'
  })
  },
  network:function(){
    var that = this
    wx.getNetworkType({
      success: function (res) {
        console.log(res)
        that.setData({
          hasNetworkType: true,
          networkType: res.subtype || res.networkType
        })
        that.update()
      }
    })
  }
  
});





