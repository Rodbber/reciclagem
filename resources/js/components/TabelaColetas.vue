<template>
  <div class="px-10 mt-10">
    <v-data-table
      :headers="headers"
      :items="coletas"
      :items-per-page="10"
      :loading="loading"
      loading-text="Carregando..."
      class="elevation-1"
    >
      <template v-slot:item.data_hora="{ item }">
        {{ formatDate(item.data_hora) }}
      </template>
      <template v-slot:item.descricao="{ item }">
        {{ item.descricao ? item.descricao : "-" }}
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip :color="status(item).cor">
          {{ status(item).status }}
        </v-chip>
      </template>
      <template v-slot:item.descricao="{ item }">
        <div class="break-all w-56 h-14 overflow-y-auto">
            {{ item.descricao }}
        </div>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" v-if="item.status !== 1 && !item.deleted_at" small @click="confirmarColeta(item)"> mdi-check-bold </v-icon>
        <router-link
        v-if="item.status !== 1 && !item.deleted_at"
          :to="{ name: 'editar_coleta', params: { id: item.id } }"
          class="button is-small is-primary"
        >
          <v-icon small class="mr-2"> mdi-pencil </v-icon>
        </router-link>

        <v-icon v-if="item.status !== 1" small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template slot="no-data">
        <div>Sem dados para mostrar. <v-icon>mdi-emoticon-sad</v-icon></div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      headers: [
        {
          text: "Data",
          align: "start",
          value: "data_hora",
        },
        { text: "Descrição", value: "descricao" },
        { text: "Status", value: "status" },
        { text: "Ações", value: "actions" },
      ],
      coletas: [],
    };
  },
  methods: {
    formatDate(value) {
      return new Date(value).toLocaleString("pt-BR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    },
    status(item) {
      if (item.deleted_at) {
        return { status: "Cancelada", cor: "red" };
      }
      switch (item.status) {
        case 0:
          return { status: "Aguardando coleta", cor: "yellow" };
        case 1:
          return { status: "Concluida", cor: "success" };
      }
    },

    confirmarColeta(item){
        axios
        .patch("/coleta/confirmar/" + item.id)
        .then((r) => {
          this.getData();
        })
        .catch((e) => console.log(e));
    },

    // editItem(item) {
    //     this.$route.push({name:'editar_coleta', props:{id:item.id}})
    // },
    deleteItem(item) {
        if(!item.deleted_at){
            axios
        .delete("/coleta/" + item.id)
        .then((r) => {
          this.getData();
        })
        .catch((e) => console.log(e));
        }else{
            axios
        .delete("/coleta/force/" + item.id)
        .then((r) => {
          this.getData();
        })
        .catch((e) => console.log(e));
        }

    },

    getData() {
      this.loading = true;
      axios
        .get("/coleta/all")
        .then((r) => {
          if (r.data) {
            this.coletas = r.data;
          }
          this.loading = false;
        })
        .catch((e) => {
          this.loading = false;
          console.log(e);
        });
    },
  },
  mounted() {
    this.getData();
    /* setTimeout(() => {
        this.desserts = [

        ]
        this.loading = false
    }, 5000); */
  },
};
</script>
