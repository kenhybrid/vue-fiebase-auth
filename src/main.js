import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase/app";



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    //initialize firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAl1qghs03a_TAPViU-EsuidTNZlPAU_H4",
      authDomain: "content-manager-8ce47.firebaseapp.com",
      databaseURL: "https://content-manager-8ce47.firebaseio.com",
      projectId: "content-manager-8ce47",
      storageBucket: "content-manager-8ce47.appspot.com",
      messagingSenderId: "739342083679",
      appId: "1:739342083679:web:b252d237c46d156e0f9dea",
      measurementId: "G-RPPCN7QM2V"
    });
    //autosignin
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignin", user);
      }
    });
    //load blogs
  }
}).$mount("#app");
