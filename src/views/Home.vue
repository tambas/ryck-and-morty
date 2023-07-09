<template>
  <div class="home">
    <div class="container mx-auto">
      <div class="seasons">
        <div class="season" v-for="(season, id) in data.seasons" :key="id" @click="changeSeason(id)"
             :class="{ active: active === Number(id) }">
          <span>Saison</span> {{ id }}
        </div>
      </div>

      <Episodes v-if="data.seasons[active].episodes" :season="active" :episodes="data.seasons[active].episodes"></Episodes>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import data from '@/data.json';
  import Episodes from "../components/Episodes";

  export default {
    name: 'Home',

    components: {
      Episodes,
    },

    data() {
      return {
        data: data,
      }
    },

    methods: {
      changeSeason(id) {
        this.$store.commit('changeActive', Number(id));
      }
    },

    computed: mapState([
      'active'
    ])
  }
</script>
