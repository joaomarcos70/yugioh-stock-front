<template>
  <v-container class="bg-home">
    <v-row style="height: 80vh">
      <v-col align-self="center" align="center">
        <v-img
          height="300"
          width="300"
          style="cursor: pointer"
          @click="routerPush('wants')"
          class="rounded-circle"
          src="../assets/fluffaldog.png"
        ></v-img>
      </v-col>

      <v-col align-self="center" align="center">
        <v-img
          height="300"
          width="300"
          style="cursor: pointer"
          @click="routerPush('collection')"
          class="rounded-circle"
          src="../assets/fluffaldog.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
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

<style>
.bg-home {
  background-image: url("../assets/bg/fundohome2.png");
  background-size:contain;
}
</style>
