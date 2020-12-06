import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";
import createPersistedState from "vuex-persistedstate";
import Cookies from 'js-cookie';
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: key => Cookies.remove(key)
    }
  })],
  state: {
    blogs: [],
    users: [],
    user: null,
    loading: false,
    error: null
  },
  getters: {
    user(state) {
      return state.user;
    },
    setloading(state) {
      return state.loading;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    signUp({ commit }, payload) {
      commit("setLoading", true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid
          };
          commit("setUser", newUser);
          commit("setLoading", false);
        })
        // .then(
        //   user=>{
        //     //add user in user collection
        //   }
        // )
        .catch(error => {
          console.log(error.message);
          commit("setLoading", false);
        });
    },
    signIn({ commit }, payload) {
      commit("setLoading", true);
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid
          };
          commit("setUser", newUser);
          commit("setLoading", false);
        })
        .catch(error => {
          console.log(error.message);
          commit("setLoading", false);
        });
    },
    autoSignin({ commit }, payload) {
      //dipatch it in acreated cycle
      commit("setUser", {
        id: payload.uid
      });
    },
    logOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          this.$router.push({ name: "Auth" });
          console.log("logged out");
        });
      commit("setUser", null);
    } //add users to firebase
  },
  modules: {}
});
