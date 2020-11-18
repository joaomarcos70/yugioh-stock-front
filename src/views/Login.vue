<template>
  <div>
    <v-container class="ma-6">
      <v-row style="height: 350px">
        <v-col> </v-col>
        <v-col> </v-col>
        <v-col>
          <v-card class="pa-2" outlined tile>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="Email"
                    required
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="Senha"
                  rules="required"
                >
                  <v-text-field
                    v-model="senha"
                    :error-messages="errors"
                    label="Senha"
                    type="password"
                    required
                  ></v-text-field>
                </validation-provider>

                <v-btn class="mt-5 mr-4" type="submit" :disabled="invalid">
                  Entrar
                </v-btn>
                <v-btn class="mt-5"> Registrar </v-btn>
              </form>
            </validation-observer>
          </v-card>
        </v-col>
      </v-row>

      <v-row style="height: 300px">
        <v-col cols="8">
          <v-card class="pa-2" outlined tile>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </v-card>
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} não pode ser vazio",
});

extend("email", {
  ...email,
  message: "Email não é valido",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: "",
    senha: "",
  }),

  methods: {
    submit() {
      if (this.$refs.observer.validate()) {
        this.$router.push({path:"home"})
      }
    },
  },
};
</script>
<style>
</style>