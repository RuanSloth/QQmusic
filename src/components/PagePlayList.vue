<template>
  <div class="page-play-list">
    <div class="top">
      <span class="now-list">当前播放</span>
      <span class="list-name">{{ listName }}</span>
    
    </div>
    <div class="songs">
       <song-item
        class="song-item"
        v-for="song in songList"
        :key="song.id"
        :song="song.name"
        :sqMusic="song.song.sqMusic"
        :artists="song.song.album.artists"
        :album="song.song.album.name"
        @click.native="$emit('update-song', song)"
        :nowId="songId"
        :songId="song.id"
        :playing="playing"
      ></song-item>
    </div>
    
  </div>
</template>

<script>
import SongItem from "./SongItem.vue";
export default {
  components: {
    SongItem,
  },
  props: {
    listName: String,
    songList: Array,
    songId: Number,
    playing: Boolean
  },
};
</script>

<style lang="less" scoped>
.page-play-list{
  padding: 20rem 10rem 0 10rem;
  background-color: #fff;
  .songs{
    height: 100%;
    overflow: auto;
  }
}
</style>