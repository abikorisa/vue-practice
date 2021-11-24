import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//カスタムディレクティブの書き方
//bindとupdateはほぼ同じことを書くので1つにまとまる
//第二引数を関数にして(el,binding)を引数にとって処理を書いていく
Vue.directive('border', function (el, binding) {
  el.style.border = 'solid black 2px'
  //binding.valueで指定している箇所からデータを受け取れる
  el.style.borderWidth = binding.value.width
  el.style.borderStyle = binding.arg
})

/* 
全部のライフサイクルフックは以下の通り
{
  //★★★初めて対象の要素に紐づいたとき
  //全て3つ(update系はoldVnodeもとれる)の引数をもてる
  bind(el,binding,vnode){},

  //親Nodeに挿入されたとき
  inserted(){},

  //★★★コンポーネントが更新されるたび(子が更新される前)
  //親から子にpropsを渡すときとかに関わってくる
  update(){},

  //コンポーネントが更新されるたび(子が更新された後)
  componentUpdated(){},

  //対象の要素から取り除かれたとき
  unbind(){},
} */

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
