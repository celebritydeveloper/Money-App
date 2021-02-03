// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
//import VueStripeMenu from 'vue-stripe-menu'

// javascript import for when you're importing the css directly in your javascript
import "vue-navigation-bar/dist/vue-navigation-bar.css";
 
// import the library
import VueNavigationBar from "vue-navigation-bar";

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VScrollThreshold from 'v-scroll-threshold';

import ScrollFixedHeader from 'vuejs-scroll-fixed-header';

 





// Import build styles
import 'vue-stripe-menu/dist/vue-stripe-menu.css';
import './scss/index.scss'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("vue-navigation-bar", VueNavigationBar);
  //Vue.use(FixedHeader);
  Vue.use(VScrollThreshold);
  Vue.use(ScrollFixedHeader);
  Vue.use(BootstrapVue);
}
