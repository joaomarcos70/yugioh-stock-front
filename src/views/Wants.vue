<template>
  <v-item-group>
    <v-container fluid>
      <v-row >
        <v-col v-for="card in listaCard" :key="card" cols="12" md="2">
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
    </v-container>
  </v-item-group>
</template>

<script>
export default {
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
      ],
    };
  },
};
</script>

<style>
</style>