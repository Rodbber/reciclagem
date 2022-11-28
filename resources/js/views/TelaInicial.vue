<template>
  <div class="p-10">
    <h1 class="text-2xl">Formas de uso:</h1>
    <div>
      <ul>
        <li>
          Clique no botão "Listar de coletas" para ver todas coletas registradas
        </li>
        <li>
          Na tela principal clique no botão "Nova coleta", para registrar uma
          nova coleta
        </li>
        <li>
          Em "Listar de coletas", clicando em
          <v-icon small class="mr-2"> mdi-pencil </v-icon>, você pode editar uma
          coleta registrada
        </li>
        <li>
          Em "Listar de coletas", clicando em <v-icon small> mdi-delete </v-icon>,
          você pode cancelar uma coleta registrada
        </li>
        <li>
          Em "Listar de coletas", clicando em <v-icon small> mdi-delete </v-icon>,
          quando cancelada, você pode apagar uma coleta cancelada
        </li>
        <li>
          Em "Listar de coletas", clicando em
          <v-icon small> mdi-check-bold </v-icon>, você pode confirmar uma
          coleta registrada
        </li>
        <li>
          Clicando em <v-icon>mdi-export</v-icon>, você pode sair da aplicação
        </li>
      </ul>
      <div class="flex justify-end">
        <router-link to="/home" slot="right" class="pl-2 mt-2">
          Continuar
          <v-icon> mdi-play </v-icon>
        </router-link>

      </div>
    </div>
  </div>
</template>
