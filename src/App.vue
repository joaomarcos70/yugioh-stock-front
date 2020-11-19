<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-img
        class="mx-5"
        style="cursor: pointer"
        @click="routerPush('home')"
        src="../src/assets/logo/logo.png"
        max-height="140"
        max-width="140"
        contain
      ></v-img>

      <v-toolbar-title>Yugioh Stock</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view ref="router"> </router-view>
    </v-main>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    routerPush(rota) {
      this.$router.push({ path: rota });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>