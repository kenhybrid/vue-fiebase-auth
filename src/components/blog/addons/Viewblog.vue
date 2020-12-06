<template>
  <div>
    <v-layout row justify-center>
      <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        :overlay="false"
      >
        <v-btn large icon slot="activator" @click="dialog = !dialog"
          ><v-icon>mdi-post</v-icon></v-btn
        >
        <v-card tile>
          <v-app-bar app dark color="primary">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab icon color="white">
              <v-icon>mdi-apps</v-icon>
            </v-btn>
          </v-app-bar>
          <v-container>
            <p>
              Lorem ipsum dolor sit ametgendi, iusto distinctio rem magni. Saepe
              similique accusamus, non laborum distinctio dolores nihil alias
              dicta maxime esse illo quis temporibus cupiditate nulla id? Ullam
              nesciunt repudiandae blanditiis fugiat nulla veritatis magni
              temporibus, beatae ab ducimus tenetur unde quam accusantium ipsum
              odit consequuntur quaerat facere neque enim dolore reiciendis,
              adipisci consequatur quo. Eaque autem natus excepturi, inventore
              corrupti enim eos? Saepe possimus esse quos accusamus in commodi
              repellendus asperiores provident obcaecati magnam temporibus
              laborum cumque iste unde praesentium ipsa, consectetur nam
              consequatur libero est necessitatibus! Odit tempora aspernatur
              molestiae rerum eos voluptas corporis et, adipisci soluta itaque
              aperiam omnis delectus odio id aliquid deleniti quidem iusto
              dignissimos voluptates porro laudantium dolorum perspiciatis.
              Nesciunt, odit dolorum quasi pariatur, illo dignissimos eaque ex
              eum neque atque optio ut doloribus necessitatibus delectus.
              Voluptatum laborum, incidunt cupiditate architecto provident iusto
              impedit dolores sint eveniet. Nulla itaque at necessitatibus unde
              saepe. Delectus, nihil corrupti unde doloribus, perspiciatis ut
              eos excepturi, culpa nesciunt impedit neque assumenda dolore
              laudantium quos architecto fuga labore dignissimos quibusdam iusto
              nisi odit repellendus ducimus! Beatae tempora nulla impedit non
              quasi quia repellat vero magnam perspiciatis, explicabo iure iusto
              cumque esse. Non dolorum, quo accusamus odit saepe est quasi totam
              quod dolore neque maiores aut veniam officia tempore perferendis
              architecto tenetur optio eligendi minus iusto inventore nam.
            </p>
          </v-container>
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
