<template>
  <v-item-group>
    <v-container fluid>
      <v-row>
        <v-col v-for="(card, index) in listaCard" :key="index" cols="12" md="2">
          <v-item>
            <v-card>
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
          </v-item>
        </v-col>
      </v-row>

      <v-btn
        style="z-index: 999"
        color="red"
        dark
        fixed
        top
        right
        fab
        @click="esconderMenu = !esconderMenu"
      >
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <menu-filter v-model="esconderMenu" v-if="esconderMenu"/>
    </v-container>
  </v-item-group>
</template>

<script>
import MenuFilter from "../components/MenuFilter.vue";

export default {
  components: {
    MenuFilter,
  },
  data() {
    return {
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
      ],
      esconderMenu: false,
    };
  },
};
</script>

<style></style>
