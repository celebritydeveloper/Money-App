// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
//import VueStripeMenu from 'vue-stripe-menu'


 
// import the library
import VueNavigationBar from "vue-navigation-bar";

import FixedHeader from 'vue-fixed-header';

import VScrollThreshold from 'v-scroll-threshold';

import ScrollFixedHeader from 'vuejs-scroll-fixed-header';

 





// Import build styles
import './scss/index.scss'
// javascript import for when you're importing the css directly in your javascript
import "vue-navigation-bar/dist/vue-navigation-bar.css";

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("vue-navigation-bar", VueNavigationBar);
  //Vue.use(FixedHeader);
  Vue.use(VScrollThreshold);
  Vue.use(BootstrapVue)
  Vue.use(ScrollFixedHeader);
  //Vue.use(VueStripeMenu);
}
