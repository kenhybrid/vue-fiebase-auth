<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<v-app-bar app color="white " v-if="search">
      <v-btn icon router @click="search = false"
        ><v-icon>mdi-arrow-left</v-icon></v-btn
      >
      <v-text-field
        name="name"
        rounded=""
        prepend-inner-icon="mdi-magnify"
        class="pt-5"
        id="id"
        min-width="100%"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

<v-navigation-drawer v-model="drawer" app color="grey" class="pa-2 pt-5" bottom>
      <!-- username an image -->
      <v-card class="mx-2  pa-1 py-3" min-height="98%">
        <v-list dense link>
          <!-- links -->
          <v-list-item
            round
            v-for="item in items"
            :key="item.title"
            link
            router
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- logout -->
          <div>
            <v-btn block class=" primary my-3 " rounded @click="logout">
              <v-icon>mdi-lock-outline</v-icon>
            </v-btn>
          </div>
        </v-list>
      </v-card>
    </v-navigation-drawer>

data() { return { drawer: false, search: false, items: [ { title: "Dashboard",
icon: "mdi-apps", link: "/" }, { title: "Blogs", icon: "mdi-circle-outline",
link: "/blog" }, { title: "Messages", icon: "mdi-email-outline", link:
"/messages" }, { title: "Comments", icon: "mdi-comment-text-outline", link:
"/comments" }, { title: "Users", icon: "mdi-account-outline", link: "/users" },
{ title: "Categories", icon: "mdi-grid", link: "/categories" } ] }; },

<style>
/* .opc {
  background-color: #050609 !important;
}
.bg2 {
  background-color: #4c504e !important;
}
.bg3 {
  background-color: #4c504e !important;
} */
</style>
