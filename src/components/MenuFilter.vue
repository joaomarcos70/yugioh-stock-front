<template>
  <v-card>
    <v-navigation-drawer absolute right permanent>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Nome" outlined></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field label="Descrição" outlined></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <span>Escolha o tipo do deck </span>
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

          <v-row>
            <v-col cols="12" md="4">
              <v-text-field label="First name" outlined></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-navigation-drawer>
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
      drawer: true,

      radioGroup: "main",
    };
  },
};
</script>

<style>
</style>