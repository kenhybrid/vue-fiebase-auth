<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-btn icon color="error" @click="dialog = !dialog"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
        <v-card>
          <v-card-title class="headline">Do you wish to delete?</v-card-title>
          <v-card-text>confirm</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click.native="dialog = false"
              >Yes?</v-btn
            >
            <v-btn color="success" text @click.native="dialog = false"
              >No?</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style></style>
