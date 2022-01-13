<template>
  <div class="bg-login">
    <v-container class="ma-6">
      <v-row style="height: 350px">
        <v-col></v-col>
        <v-col cols="5">
          <v-card class="text-center pa-2" outlined tile color="#FAFAFA">
            Yugi
          </v-card>
        </v-col>
        <v-col cols="3">
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
                  name="password"
                  rules="required"
                >
                  <v-text-field
                    v-model="password"
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
      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Yugioh Stock</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

const baseUrl = "http://localhost:3000";

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
    password: "",
  }),

  methods: {
    submit() {
      if (this.$refs.observer.validate()) {
        axios
          .post(baseUrl + "/auth/login", this.$data)
          .then((res) => {
            if (res.status == 200) this.$router.push({ path: "home" });
          })
          .catch((error) => {
          });
      }
    },
  },
};
</script>
<style>
.bg-login {
  background-image: url("../assets/bg/fundohome3.jpg");
  background-size: 100%;
  height: 100%;
}
</style>