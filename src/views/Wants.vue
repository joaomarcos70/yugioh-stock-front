<template>
  <v-container class="wantsContainer" fluid>
    <top-menu-filter></top-menu-filter>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col v-for="(card, index) in listaCard" :key="index" cols="3">
            <v-card elevation="9">
              <v-img position="top" max-height="190" :src="card.img"> </v-img>

              <v-card-actions>
                <v-row>
                    <v-col cols="6">
                      <v-select
                        :items="card.raridade"
                        label="Raridade"
                        dense
                      ></v-select>
                    </v-col>

                    <v-col cols="4">
                      <v-select
                        :items="card.idioma"
                        label="Idioma"
                        dense
                      ></v-select>
                    </v-col>

                    <v-col cols="1">
                      <span class="mr-auto font-weight-bold">
                        {{ card.quantidade }}
                      </span>
                  </v-col>
                </v-row>
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
import TopMenuFilter from "../components/TopMenuFilter/TopMenuFilter.vue";

export default {
  components: {
    SideMenu,
    TopMenuFilter,
  },
  data() {
    return {
      justify: ["start", "center", "end", "space-around", "space-between"],

      listaCard: [
        {
          img: "https://ygoprodeck.com/pics/13241004.jpg",
          raridade: ["super", "secret"],
          quantidade: 3,
          idioma: ["pt","en"],
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
