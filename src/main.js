import Vue from "vue";
import App from "./App.vue";
//import vDragg from "./components/v-draggable";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    //vDragg,
}).$mount("#app");
