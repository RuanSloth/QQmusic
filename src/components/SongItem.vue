<template>
  <div class="song-item" :class="{ active: song.id === songId }">
    <img
      :src="picUrl + '?imageView&thumbnail=360y360&quality=75&tostatic=0'"
      alt=""
    />

    <div class="sinfo">
      <div class="sname">
        {{ song }}
      </div>
      <div class="ar-al">{{ artistsName }}-{{ album }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picUrl: String,
    song: String,
    songId: [Number, String],
    nowId: [Number, String],
    sqMusic: Object,
    artists: Array,
    album: String,
    playing: Boolean,
  },
  data() {
    return {
      artistsName: "",
    };
  },
  created() {
    this.artistsName = this.artists.map((n) => n.name).join("/");
  },
};
</script>

<style lang="less" scoped>
.song-item {
  padding: 6rem 0;
  display: flex;
  
 
  img {
    width: 50rem;
        border-radius: 5rem;
  }
 
  .sinfo .ar-al{
    padding: 0 8rem;
    font-size: 12rem;
    color: #888;
       -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
    max-width: 200rem;
    }
 .sname {
    font-size: 15rem;
    font-weight: 600;
    
    margin: 8rem;
    -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
  }
}

.r {
  padding-right: 10rem;
  display: flex;
  align-items: center;
  position: relative;
}
</style>