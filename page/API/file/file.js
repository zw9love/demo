Page({
  data: {
    tempFilePath: '',
    savedFilePath: wx.getStorageSync('savedFilePath') || '',
    dialog: {
      hidden: true
    }
  },
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      count: 5,
      success: function (res) {
        that.setData({
          tempFilePath: res.tempFilePaths[0]
        })
      }
    })
  },
  saveFile: function () {
    if (this.data.tempFilePath.length > 0) {
      var that = this
      wx.saveFile({
        tempFilePath: this.data.tempFilePath,
        success: function (res) {
          that.setData({
            savedFilePath: res.savedFilePath
          })
          wx.setStorageSync('savedFilePath', res.savedFilePath)
          that.setData({
            dialog: {
              title: '保存成功',
              content: '下次进入应用时，此文件仍可用',
              hidden: false
            }
          })
        },
        fail: function (res) {
          that.setData({
            dialog: {
              title: '保存失败',
              content: '应该是有 bug 吧',
              hidden: false
            }
          })
        }
      })
    }
  },
  // preview:function(){
  //   console.log('点我');
  //   wx.previewImage({
  //     // current: '', // 当前显示图片的http链接
  //     urls: ["http://http://www.z1995.com/xfx/images/id1/l1.jpeg"] // 需要预览的图片http链接列表
  //   })
  // },
  clear: function () {
    wx.setStorageSync('savedFilePath', '')
    this.setData({
      tempFilePath: '',
      savedFilePath: ''
    })
  },
  confirm: function () {
    this.setData({
      'dialog.hidden': true
    })
  }
})
