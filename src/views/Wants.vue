<template>
  <v-container fluid>
    <h1>Lista de Desejos</h1>
    <v-row>
      <v-col class="gridCards" cols="11">
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

    <v-btn
      :style="styleButton"
      class="clickedBtn"
      color="red"
      dark
      fab
      @click="showHideMenu()"
    >
      <v-icon>{{ iconeFiltro }}</v-icon>
    </v-btn>

    <menu-filter v-model="esconderMenu" v-if="esconderMenu" />
  </v-container>
</template>

<script>
import MenuFilter from "../components/MenuFilter/MenuFilter.vue";
import SideMenu from "../components/SideMenu/SideMenu.vue";

export default {
  components: {
    MenuFilter,
    SideMenu,
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

  methods: {
    showHideMenu() {
      this.esconderMenu = !this.esconderMenu;
    },
  },
  computed: {
    iconeFiltro() {
      return this.esconderMenu ? "mdi-window-close" : "mdi-filter";
    },
    styleButton() {
      return this.esconderMenu
        ? { position: "fixed", top: "1%", right: "1%", "z-index": 999, width:"40px", height:"40px" }
        : { position: "fixed", bottom: "1%", right: "1%" };
    },
  },
};
</script>

<style>
.gridCards {
  background-color: rgb(233, 232, 229);
  margin-left: 1%;
  border-radius: 10px;
}
</style>
