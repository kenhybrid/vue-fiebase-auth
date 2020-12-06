<template>
  <v-app>
    <Dashboardnav />
    <v-content>
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Dashboardnav from "./components/layout/Dashboardnav";
export default {
  name: "App",
  components: {
    Dashboardnav
  },
  data() {
    return {};
  }
};
</script>
<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
