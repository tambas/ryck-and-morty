/*global jwplayer*/

export default {
  setup() {
    jwplayer.defaults = {
      aspectratio: "16:9",
      autostart: false,
      controls: true,
      abouttext: "Watch Now",
      aboutlink: "/about",
      displaytitle: true,
      displaydescription: false,
      height: "100%",
      width: "100%",
      key: "enterprise/canPlayAds/1800000000000",
      pid: "WatchNowPlayer",
      lang: "fr",
      skin: {
        name: "bekle"
      },
      preload: "auto",
      repeat: false,
      stretching: "uniform",
      floating: {
        dismissible: true,
      },
      cast: {
        //customAppId: "0569500E"
      }
    };
  }
}