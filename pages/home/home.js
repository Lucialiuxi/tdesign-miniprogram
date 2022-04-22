import { fetchHome } from '../../services/home/home';

Page({
  data: {
    imgSrcs: [],
    pageLoading: false,
    autoplay: true,
    duration: 500,
    interval: 5000,
    navigation: { type: 'dots' },
  },

  onShow() {
  },

  onLoad() {
    this.init();
  },

  onReachBottom() {
    if (this.data.goodsListLoadStatus === 0) {
    }
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.loadHomePage();
  },

  loadHomePage() {
    wx.stopPullDownRefresh();

    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({ swiper }) => {
      this.setData({
        imgSrcs: swiper,
        pageLoading: false,
      });
    });
  },
});
