<template>
  <div class="res">
    <ul class="top">
      <li>
        <div class="contain">
          综合
        </div>
      </li>
      <li>
        <div class="contain">
          歌曲
        </div>
      </li>
      <li>
        <div class="contain">
          视频
        </div>
      </li>
      <li>
        <div class="contain">
          歌单
        </div>
      </li>
      <li>
        <div class="contain">
          专辑
        </div>
      </li>
      <li>
        <div class="contain">
          歌手
        </div>
      </li>
    </ul>
    <div class="best-res">
      <h3>为你推荐</h3>
      <best-item
        v-for="a in artists"
        :url="a.img1v1Url"
        :key="a.id"
        :name="`歌手: ${a.name}${a.alias[0] ? '(' + a.alias[0] + ')' : ''} `"
        @click.native="$router.push('/singer/' + a.id)"
      ></best-item>
      <best-item
        v-for="p in playlist"
        :url="p.coverImgUrl"
        :key="p.id"
        :name="`歌单: ${p.name}`"
        :text="`by ${p.creator.nickname}`"
        @click.native="$router.push('/playlist/' + p.id)"
      ></best-item>
      <best-item
        v-for="z in album"
        :url="z.picUrl"
        :key="z.id"
        :name="`专辑: ${z.name}`"
        :text="`${z.artist.name}`"
        @click.native="$router.push('/album/' + z.id)"
      ></best-item>
    </div>
      <h3>
      单曲
      <div
        class="small-btn"
        v-if="!playing"
        @click="
              $emit('update-song', {
                song:  searchRes[0],
                songList: searchRes,
              })"
        
      >
        <img src="../../assets/imgs/1h.png" alt="" />
        <p>播放</p>
      </div>
      <div class="small-btn" v-if="playing" @click="$emit('song-pause')">
        <img src="../../assets/imgs/C0.png" alt="" />
        <p>暂停</p>
      </div>
    </h3>
    <div class="songs">
   
      <search-item
         v-for="song in searchRes"
        :key="song.id"
        :song="song.name"
        :artists="song.ar"
        :sqMusic="song.sq"
        :album="song.al.name"
        @click.native="$emit('update-song', {song})"
        :nowId="songId"
        :songId="song.id"
        :playing="playing"
        @song-play="$emit('song-play')"
      >
           
      </search-item>
    </div>
  </div>
</template>

<script>
import BestItem from "./BestItem.vue";

import SearchItem from '../SearchItem.vue';
export default {
  components: { BestItem, SearchItem },
  props: {
    searchRes: Array,
    songId: [Number, String],
    bestRes: Object,
    playing: Boolean
  },
  data() {
    return {
      artists: [],
      playlist: [],
      album: [],
    };
  },

  created() {
    this.artists = this.bestRes.artist ? [...this.bestRes.artist] : [];
    this.album = this.bestRes.album ? [...this.bestRes.album] : [];
    this.playlist = this.bestRes.playlist ? [...this.bestRes.playlist] : [];
  },
};
</script>

<style lang="less" scoped>
.res{
  background-color: #f4f4f4;
}
ul.top{
  display: flex;
  background: #fff;
  justify-content: space-around;
  li{
    .contain{
      font-size: 14rem;
      padding-bottom: 8rem;
      color: #8e8e8e;
    }
    &:nth-of-type(1){
      .contain{
        color: #111;
        border-bottom: solid 5rem #1ed89d;
      }
    }
  }

}
.best-res {
  margin-top: 15rem;
  background-color: #f4f4f4;
  h3 {
    margin-left: 10rem;
    padding-bottom: 5rem;
  }
}
.songs {
  margin-left:  10rem;
  margin-right:  18rem;
}


  h3 {
    margin: 10rem 15rem;
    font-size: 16rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    .small-btn {
      display: flex;
      padding: 2rem 7rem 2rem 3rem;
      background-color: #e0f6ef;
      margin-left: 10rem;
      align-items: center;
      img {
        width: 20rem;
      }
      p {
        font-size: 12rem;
      }
      border-radius: 15rem;
    }
  }
</style>