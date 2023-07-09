<template>
  <div>
    <div class="episodes" v-if="!loading">
      <div class="episode" v-for="(episode, id) in episodes" :key="id" @click="play(season, id)">
        <img :src="'/img/ep/' + episode.image + '-min.jpg'" :alt="episode.name">
        <div class="number">Épisode {{ id }}</div>
        <div class="play"><i class="fas fa-play"></i></div>
      </div>
    </div>
    <div class="loader" v-if="loading">
      <img src="../assets/images/loader.gif" alt="loader">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Episodes",

    props: {
      season: Number,
      episodes: Object,
    },

    watch: {
      episodes: function () {
        this.preload();
      }
    },

    data() {
      return {
        loading: true,
      }
    },

    created() {
      this.preload();
    },

    methods: {
      preload() {
        this.loading = true;
        let imageLoaded = 0;

        for (const [/*id*/, episode] of Object.entries(this.episodes)) {
          const img = new Image();
          img.src = '/img/ep/' + episode.image + '-min.jpg';

          img.onload = () => {
            imageLoaded++;

            if (imageLoaded === Object.keys(this.episodes).length) {
              this.loading = false;
            }
          };
        }
      },

      play(season, episode) {
        this.$router.push({ name: 'watch', params: { season: season, episode: episode }});
      }
    }
  }
</script>

<style scoped>

</style>