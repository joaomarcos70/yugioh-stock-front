<template>
  <v-app id="inspire">
    <v-layout>
      <side-menu v-if="showSideMenu()"> </side-menu>
      <v-main>
        <v-container>
          <v-row>
            <v-col>
              <router-view ref="router"> </router-view>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import SideMenu from "./components/SideMenu/SideMenu.vue";

export default {
  components: {
    SideMenu,
  },

  beforeMount() {
    this.showSideMenu();
  },

  methods: {
    showSideMenu() {
      let page = this.$route.path;
      return page != "/";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>