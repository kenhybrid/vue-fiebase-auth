<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-btn icon color="warning" slot="activator" @click="dialog = !dialog"
          ><v-icon>mdi-pencil</v-icon></v-btn
        >
        <v-card>
          <v-card-title class="headline">Make your update</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            expedita suscipit obcaecati adipisci cumque animi enim esse, nulla,
            pariatur nihil vitae magnam dolores necessitatibus ratione nam?
            Fugit dolore quas iusto.
          </v-card-text>
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
