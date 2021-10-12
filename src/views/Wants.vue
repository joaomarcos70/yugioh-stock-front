<template>
  <v-container class="wantsContainer" fluid>
    <top-menu-filter></top-menu-filter>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col v-for="(card, index) in listaCard" :key="index" cols="3">
            <v-card elevation="9">
              <v-img position="top" height="218" :src="card.img"> </v-img>

              <v-card-actions>
                <span class="mr-auto font-weight-bold">
                  {{ card.raridade }}
                </span>

                <span class="mr-auto font-weight-bold">
                  {{ card.quantidade }}
                </span>

                <span class="mr-auto font-weight-bold">
                  {{ card.idioma }}
                </span>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideMenu from "../components/SideMenu/SideMenu.vue";
import TopMenuFilter from"../components/TopMenuFilter/TopMenuFilter.vue"

export default {
  components: {
    SideMenu,
    TopMenuFilter
  },
  data() {
    return {
      justify: ["start", "center", "end", "space-around", "space-between"],

      listaCard: [
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: "super",
          quantidade: 3,
          idioma: "en",
        },
      ],
      esconderMenu: false,
    };
  },
};
</script>

<style>
</style>
