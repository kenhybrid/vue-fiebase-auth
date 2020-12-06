<template>
  <div>
    <v-container>
      <v-subheader>this is the dashboard.</v-subheader>
      <add></add>
      <v-card tile>
        <v-layout row wrap>
          <v-flex xs10 sm10 md10>
            <div class="ma-1">
              <v-subheader>WELLCOME</v-subheader>
            </div>
          </v-flex>
          <v-flex xs2 sm2 md2>
            <div class="ma-1">
              <addcat />
            </div>
          </v-flex>
          <me />
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import add from "./addons/Addblog";
import addcat from "./addons/Categories";
import me from "./addons/Deletecategories";

export default {
  components: {
    add,
    addcat,
    me
  }
};
</script>

<style></style>
