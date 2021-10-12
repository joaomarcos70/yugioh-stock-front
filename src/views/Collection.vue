<template>
  <h1>collection</h1>
</template>

<script>
import Card from "./../services/cards";
export default {
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    Card.list()
      .then((result) => {
        //console.log('result ', result.data[0].card_images );
        console.log(result.data.data);
        this.cards = result.data.data;
        // console.log(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
</style>