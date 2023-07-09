<script src="../../../../Downloads/wn/web/web/resources/js/player.js"></script>
<template>
  <div class="player">
    <div class="back" @click="stop">
      <i class="fas fa-long-arrow-left"></i> <span>Retour à la navigation</span>
    </div>
    <div id="player"></div>
  </div>
</template>

<script>
  /*global jwplayer*/
  import data from '@/data.json';
  import {mapState} from "vuex";

  export default {
    name: "Player",

    data() {
      return {
        data: data,
      }
    },

    computed: mapState([
      'lang'
    ]),

    mounted() {
      this.play();
    },

    methods: {
      play() {
        const seasonNumber = this.$route.params.season;
        const episodeNumber = this.$route.params.episode;

        const episode = this.data.seasons[seasonNumber].episodes[episodeNumber];
        const id = this.id(seasonNumber, episodeNumber);
        let player = jwplayer("player");

        let config = {
          title: id + ' - ' + episode.name,
          file: episode.stream,
          image: '/img/ep/' + episode.image + '.jpg',
          mediaid: id,
        };

        config.tracks = [];

        if (episode.thumbnails) {
          config.tracks.push({
            file: episode.thumbnails,
            kind: "thumbnails"
          });
        }

        if (episode.subtitles) {
          Object.entries(episode.subtitles).forEach(([lang, url]) => {
            config.tracks.push({
              file: url,
              label: lang,
              kind: "captions",
            });
          });
        }

        if (episode.drm) {
          config.drm = {
            widevine: {
              url: episode.drm,
            }
          }
        }

        player.setup(config);

        let langSet = false;
        let self = this;

        player.on('audioTracks', function (levels) {
          if (langSet) {
            return
          }

          langSet = true;

          if (levels.tracks[levels.currentTrack].language !== self.lang) {
            for (const i in levels.tracks) {
              if (levels.tracks[i].language === self.lang) {
                setTimeout(function () {
                  player.setCurrentAudioTrack(i);
                }, 200)
                break
              }
            }
          }
        })

        player.on('audioTrackChanged', function (levels) {
          self.$store.commit('changeLang', levels.tracks[levels.currentTrack].language);
        })

        player.play();
        //player.setFullscreen(true);
      },

      stop() {
        let player = jwplayer("player");
        player.stop();
        //this.$router.push({ name: 'home' });
        this.$router.back();
      },

      id(season, episode) {
        if (Number(season) < 10) {
          season = '0' + season
        }

        if (Number(episode) < 10) {
          episode = '0' + episode
        }

        return 'S' + season + 'E' + episode;
      }
    }
  }
</script>

