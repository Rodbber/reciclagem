<template>
  <div class="max-w-full py-5 px-10">
    <router-link :to="!id ? '/home' : '/lista'" slot="right" class="pl-2 mt-2">
      <v-icon color="black"> mdi-arrow-left </v-icon>
    </router-link>
    <div class="overflow-y-auto overflow-x-hidden max-h-max w-full">
      <div class="h-5" v-if="success || error">
        <v-alert type="success" v-if="success"> Sucesso! </v-alert>
        <v-alert type="error" v-if="error"> Erro! </v-alert>
      </div>

      <div class="flex flex-col items-center pt-5 space-y-5">
        <v-row class="justify-start">
          <label for="dataColeta">data da coleta:</label>
        </v-row>
        <div class="border">
          <input
            id="dataColeta"
            type="datetime-local"
            v-model="form.data_hora"
          />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col w-full md:flex-row md:space-x-5">
          <v-text-field
            v-model="form.cep"
            counter
            maxlength="8"
            hint="Digite o cep e talvez a API encontre"
            label="CEP"
            @input="cep"
          ></v-text-field>
          <v-text-field
            v-model="form.numero"
            counter
            maxlength="20"
            hint="Digite o numero do endereço"
            label="Numero"
          ></v-text-field>
        </div>

        <div class="flex flex-col w-full md:flex-row md:space-x-5">
          <v-text-field
            v-model="form.rua"
            counter
            maxlength="255"
            hint="Digite o cep e talvez a API encontre"
            label="Rua"
          ></v-text-field>
          <v-text-field
            v-model="form.bairro"
            counter
            maxlength="100"
            hint="Digite o numero do endereço"
            label="Bairro"
          ></v-text-field>
        </div>

        <div class="flex flex-col w-full md:flex-row md:space-x-5">
          <v-text-field
            v-model="form.cidade"
            counter
            maxlength="8"
            hint="Digite o cep e talvez a API encontre"
            label="Cidade"
          ></v-text-field>
          <div class="md:w-[49%]">
            <v-select
              v-model="form.uf"
              :items="estados"
              :rules="rules.estado"
              label="Estado"
              required
            ></v-select>
          </div>
        </div>
      </div>
      <v-container fluid>
        <v-textarea
          clearable
          clear-icon="mdi-close-circle"
          label="Descrição"
          placeholder="Digite aqui os detalhes para coleta."
          rows="3"
          counter
          maxlength="300"
          v-model="form.descricao"
        ></v-textarea>
      </v-container>
      <div class="flex justify-end">
        <v-btn
          @click="salvar"
          :loading="loading"
          class="w-full md:w-auto"
          color="blue"
          elevation="2"
        >
          Salvar
          <v-icon class="text-white"> mdi-content-save </v-icon>
        </v-btn>
      </div>
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        top
        :color="message == 'Sucesso!' ? 'success' : 'error'"
      >
        {{ message }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    id: {
      default: null,
    },
  },
  data: function () {
    return {
      message: "",
      snackbar: false,
      timeout: 5000,
      loading: false,
      form: {},
      rules: {
        estado: [(val) => (val || "").length > 0 || "Required"],
      },

      estados: [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
    };
  },
  watch: {
    id(n) {
      if (n) {
        this.id = n;
        this.show();
      }
    },
  },
  methods: {
    show() {
      if (this.id) {
        axios
          .get("/coleta/" + this.id)
          .then((r) => {
            if (r.data) {
              this.form = r.data;
            }
          })
          .catch((e) => console.log(e));
      }
    },
    salvar() {
      this.loading = true;
      let method = "POST";
      let url = "/coleta/salvar";
      if (this.id) {
        method = "PATCH";
        url = "/coleta/editar/" + this.id;
      }

      axios({
        method,
        url,
        data: this.form,
      })
        .then((r) => {
          this.snackbar = true;
          this.message = "Sucesso!";
          this.loading = false;
          if (r.data) {
            console.log(r.data);
          }
          if (!this.id) {
            this.form = {};
          }
        })
        .catch((e) => {
            this.snackbar = true;
          this.message = "Error!";
          this.loading = false;
          console.log(e);
        });
    },
    cep(value) {
      if (value.length == 8) {
        axios
          .get(`https://viacep.com.br/ws/${value}/json/`)
          .then((r) => {
            if (r.data) {
              this.form.uf = r.data.uf;
              this.form.cidade = r.data.localidade;
              this.form.bairro = r.data.bairro;
              this.form.rua = r.data.logradouro;
            }
          })
          .catch((e) => console.log("erro api do cep"));
      }
    },
  },
  mounted() {
    this.show();
  },
};
</script>
