//小程序密钥  :  1986c4ba9a62e54fcbd6ad717fc37444
Page({ 
data: {
    url: [
        '../images/1.jpg',
        '../images/2.jpg',
        '../images/3.jpg',
        '../images/4.jpg',
        '../images/5.jpg',
        '../images/6.jpg'
        ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 3000,
    duration: 500,
    current:5,
    animationData: {}
  },
  onShow: function(){
    var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    wx.request({
    url: '../php/test.php',
    header: {
        'Content-Type': 'application/json'
    },
    success: function(res) {
        console.log(res.data+"我勒个去")
    }
    })
    // animation.scale(2,2).rotate(45).step()

    // this.setData({
    //   animationData:animation.export()
    // })

    // setTimeout(function() {
    //   animation.translate(30).step()
    //   this.setData({
    //     animationData:animation.export()
    //   })
    // }.bind(this), 1000)
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 2000 })
    this.setData({
      animationData: this.animation.export()
    })
  }
  
  })
