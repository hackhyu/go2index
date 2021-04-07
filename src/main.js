import Vue from "vue";
import App from "./App.vue";
import { Loading } from "element-ui";
import "element-ui/lib/theme-chalk/icon.css";
import "element-ui/lib/theme-chalk/notification.css";
import "element-ui/lib/theme-chalk/loading.css";
import axios from "@/plugin/axios";
import VueAxios from "vue-axios";
import router from "./router";
import i18n from "./i18n";
// store
import store from "@/store/index";
import Clipboard from "@/plugin/clipboard";
import VueLazyload from "vue-lazyload";
import Viewer from "v-viewer";
import cdnpath from "./libs/util.cdn";
// 组件
import "@/components";
import "viewerjs/dist/viewer.css";
import "@/assets/style/theme/register.scss";

document.write(
  `<script>var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?b2b46282ccc98d64278604825cf6bc9a";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();</script><script type="text/javascript">document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1279009041'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1279009041' type='text/javascript'%3E%3C/script%3E"));</script>`
);
Vue.config.productionTip = false;
Vue.prototype.$cdnpath = cdnpath;
Vue.use(Loading);
Vue.use(VueAxios, axios);
Vue.use(Clipboard);
Vue.use(VueLazyload, {
  loading: cdnpath("images/airplane.gif"),
});
Vue.use(Viewer);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch("acrou/view/load");
  },
}).$mount("#app");
