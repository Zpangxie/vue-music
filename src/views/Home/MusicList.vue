<template>
  <div>
    <div v-if="newMusic.length > 0"></div>
    <MusicListView :musiclist="newMusic" />
  </div>
</template>

<script>
import MusicListView from "./MusicListView";
export default {
  name: "MusicList",
  data() {
    return {
      newMusic: [],
    };
  },
  created() {
    this.$api
      .getMusicList({
        method: "baidu.ting.billboard.billList",
        type: 1,
        siza: 6,
        offset: 0,
      })
      .then((res) => {
        console.log(res);
        this.newMusic = res.song_list;
      });
  },
  components: { MusicListView },
};
</script>
