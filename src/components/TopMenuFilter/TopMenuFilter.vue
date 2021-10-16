<template>
  <v-card class="overflow-hidden">
    <v-app-bar app height="200" color="white" prominent>
      <v-col cols="12">
        <v-row dense>
          <v-col cols="4">
            <v-text-field label="Nome" filled></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
              :items="variacaoCarta"
              filled
              label="Tipo de Carta"
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-radio-group v-model="radioGroup" row>
              <v-radio label="Main deck" value="main"></v-radio>
              <v-radio label="Extra deck" value="extra"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="2">
            <v-btn elevation="5" plain>Exportar</v-btn>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="4">
            <v-text-field label="Descrição da carta" filled></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
              :items="variacaoCarta"
              filled
              label="Tipo de Carta"
            ></v-select>
          </v-col>
          <v-col cols="2">

          </v-col>
          <v-col cols="2">
            <v-btn elevation="5" plain>Buscar</v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-spacer></v-spacer>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      variacaoCarta: [
        "Monster Card",
        "Effect Monster",
        "Flip Effect Monster",
        "Flip Tuner Effect Monster",
        "Gemini Monster",
        "Normal Monster",
        "Normal Tuner Monster",
        "Pendulum Effect Monster",
        "Pendulum Flip Effect Monster",
        "Pendulum Normal Monster",
        "Pendulum Tuner Effect Monster",
        "Ritual Effect Monster",
        "Ritual Monster",
        "Skill Card",
        "Spell Card",
        "Spirit Monster",
        "Toon Monster",
        "Trap Card",
        "Tuner Monster",
        "Union Effect Monster",
      ],
      radioGroup: "main",
    };
  },
};
</script>

<style>
</style>