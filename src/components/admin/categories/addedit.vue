<template>
  <div>
    <v-card tile>
      <v-card-title class="white" dense>
        <v-icon fab left color="primary">mdi-plus</v-icon>
        <span right class="primary--text">ADD</span>
      </v-card-title>
      <v-form class="my-2">
        <v-text-field
          class="pa-2"
          dense
          rounded
          outlined
          label="add a category"
        ></v-text-field>
        <v-btn block color="primary" text>
          <span left>send</span>
          <v-icon right small>mdi-send</v-icon>
        </v-btn>
      </v-form>
      <v-card-text>
        <div>
          hello there we are adding categories here.
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
