<template v-slot:activator="{ on }">
  <!-- <v-dialog max-width="600px">
    <v-btn slot="activator" icon v-on="on">
      <v-icon>mdi-export</v-icon>
    </v-btn>
    <v-card-title>
      <h2>Sair</h2>
    </v-card-title>
    <v-card-text> deseja realmente sair? </v-card-text>
  </v-dialog> -->

  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark text v-on="on" v-bind="attrs"> <v-icon>mdi-export</v-icon> </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Sair</h2>
      </v-card-title>
      <v-card-text> deseja realmente sair? </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="logout">
          Sair
        </v-btn>
        <v-btn color="secundary" text @click="dialog = false">
          Cancelar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            dialog:false,
        }
    },
    methods:{
        logout(){
            axios.post('logout')
            .then(r => {
                this.dialog = false
                window.location.href = '/login';
            })
            .catch(e => console.log(e))
        }
    }
};
</script>
