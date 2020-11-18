<template>
  <v-app id="inspire">
    <v-app-bar app>
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
</script>

<style lang="scss" scoped>
</style>