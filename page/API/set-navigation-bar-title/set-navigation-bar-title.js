Page({
  setNaivgationBarTitle: function (e) {
    var title = e.detail.value.title
    console.log(e.detail);
    wx.setNavigationBarTitle({
      title: title
    })
  }
})
