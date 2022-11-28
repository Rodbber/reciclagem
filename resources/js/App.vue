<template>
  <div id="app">
    <v-app id="inspire">
      <v-responsive class="bg-gray-300">
        <div class="w-full h-full flex flex-col items-center">
          <div class="w-full">
            <v-app-bar
              color="accent-4 bg-gradient-to-r from-emerald-700 to-green-400"
              dense
              dark
            >
              <v-toolbar-title
                >Coleta maneira
                <v-icon>mdi-recycle</v-icon>
              </v-toolbar-title>

              <v-spacer></v-spacer>

              <Popup />
            </v-app-bar>
          </div>
          <div class="w-full md:w-4/5 h-full md:h-[90vh] overflow-y-auto max-h-max bg-white">
            <router-view />
          </div>
        </div>
      </v-responsive>
    </v-app>
    <BottonSheet />
  </div>
</template>


<script>
import Popup from "./components/Popup";

export default {
  components: { Popup },
};
</script>
