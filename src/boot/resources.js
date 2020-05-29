import Vue from 'vue'
import Toasted from 'vue-toasted';



Vue.use(Toasted, {
  // 主题样式 primary/outline/bubble
  theme: 'bubble',
  // 显示在页面哪个位置
  position: 'bottom-center',
  // 显示多久时间（毫秒）
  duration: 3000,
  // 支持哪个图标集合
  iconPack : 'material', // set your iconPack, defaults to material. material|fontawesome|custom-class
  // 可以执行哪些动作
  // action: {
  //   text: 'X',
  //   onClick: (e, toastObject) => {
  //     toastObject.goAway(0)
  //   }
  // },
});
