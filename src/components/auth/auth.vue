<template>
  <div class="auth">
    <v-container>
      <v-layout row wrap>
        <v-flex sm8 offset-sm2 class="pa-2">
          <!-- <br><br><br><br> -->
          <v-card raised min-height="300px" class="margin">
            <v-card-title class="grey lighten-4">
              <div v-if="togle">CREATE ACCOUNT</div>
              <div v-else>LOGIN</div>
              <v-spacer></v-spacer>
              <v-btn color="green" small fab @click="togle = !togle">
                <v-icon v-if="togle" color="white">mdi-key-outline</v-icon>
                <v-icon v-else color="white">mdi-account-plus-outline</v-icon>
              </v-btn>
            </v-card-title>
            <v-progress-linear
              :indeterminate="true"
              color="green"
              v-show="loading"
            ></v-progress-linear>
            <v-card-text class="">
              <!-- creste account -->
              <create v-if="togle" />
              <!-- login -->
              <login v-else />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import login from "./login";
import create from "./create";

export default {
  name: "auth",
  components: {
    login,
    create
  },

  data() {
    return {
      togle: false
    };
  },
  computed: {
    loading() {
      return this.$store.getters.setLoading;
    }
  }
};
</script>

<style>
.margin {
  margin-top: 40px;
  /* background-image: url(../../assets/cat.jpeg); */
}
.auth {
  background-image: url(../../assets/gravel.jpeg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
}
</style>
