<template>
  <v-navigation-drawer v-model="drawer" class="filtro" right permanent app>
    <v-form>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <h1>Busque seu card</h1>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12">
            <v-text-field label="Nome" outlined></v-text-field>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col cols="12" md="6">
            <v-radio-group v-model="radioGroup" row>
              <v-radio label="Main deck" value="main"></v-radio>
              <v-radio label="Extra deck" value="extra"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" md="6">
            <v-combobox
              label="Tipo de carta"
              :items="variacaoCarta"
              outlined
            ></v-combobox>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },

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
      drawer: this.value,

      radioGroup: "main",
    };
  },

  watch: {
    value() {
      this.drawer = this.value;
    },
  },
};
</script>

<style>
.filtro {
  width: 110vw;
}
</style>
