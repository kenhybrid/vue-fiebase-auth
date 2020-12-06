<template>
  <nav>
    <v-app-bar app color="white ">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="">YoBLOG</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon v-for="m in menu" :key="m.link" router :to="m.link">
        <v-icon>{{ m.icon }}</v-icon>
      </v-btn>
      <v-btn icon @click="logout" v-if="userisauthenticated">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  components: {},
  computed: {
    menu() {
      let menu = [{ icon: "mdi-lock", link: "/auth" }];
      if (this.userisauthenticated) {
        menu = [
          { icon: "mdi-email-outline", link: "/emails" },
          { icon: "mdi-heart-outline", link: "/" },
          { icon: "mdi-dots-vertical", link: "/setting" }
        ];
      }
      return menu;
    },
    userisauthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    logout() {
      // this.$store.dispatch("logOut");
      this.$store.dispatch("logOut").then(() => {
        this.$router.push("/auth");
      });
    }
  }
};
</script>
