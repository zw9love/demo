var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var sizeType = [ ['compressed'], ['original'], ['compressed', 'original'] ]
var arr=[];
Page({
  data: {
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    })
  },
  chooseImage: function () {
    var that = this;
    var n=this.data.count[this.data.countIndex];
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: n,
      success: function (res) {
        console.log(this.count)
        if(arr.length>=n) return;
        arr.push(res.tempFilePaths[0]);
        that.setData({
          imageList: arr
        })
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src
    console.log(e);
    wx.previewImage({
      current: current,
      urls: this.data.imageList
    })
  }
})
