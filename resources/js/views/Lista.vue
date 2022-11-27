<template>
<div>
    <router-link to="/" slot="right" class="pl-10">
      <v-icon color="black" class="mt-10"> mdi-arrow-left </v-icon>
    </router-link>
    <div>
        <TabelaColetas />
    </div>
</div>
</template>

<script>
import TabelaColetas from '../components/TabelaColetas.vue';

export default {
    components:{TabelaColetas},


}
</script>
