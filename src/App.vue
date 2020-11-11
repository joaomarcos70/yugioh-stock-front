<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app> </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Yugioh Stock</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view ref="router"> </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: false })
};
</script>

<style lang="scss" scoped>

</style>