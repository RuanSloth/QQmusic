<template>
  <div>
    <div class="hot-pic">
      <div class="pic"></div>
      <div class="update-time">更新日期:09月21日</div>
    </div>
    <div class="hot-item" v-for="(item, index) in hotsongs" :key="item.id">
      <div class="hot-cd">
        {{ (index + 1 + "").padStart(2, "0") }}
      </div>
      <song-item
        class="song-item"
        :song="item.name"
        :sqMusic="item.sq"
        :artists="item.ar"
        :album="item.al.name"
         @click.native="$emit('update-song', item)"
      
        :songId="item?.id"
      
        @song-play="$emit('song-play')"

      ></song-item>
    </div>
    <div class="hot-more"><span>查看完整榜单</span>&gt;</div>
  </div>
</template>

<script>
import SongItem from "../components/SongItem.vue";
export default {
  data() {
    return {
      hotsongs: [],
    };
  },
  components: {
    SongItem,
  },
  created() {
    this.axios
      .get("https://apis.netstart.cn/music/playlist/detail?id=3778678")
      .then((res) => {
        this.hotsongs = [...res.data.playlist.tracks];
        this.hotsongs.length = 20;
      });
  },
};
</script>

<style lang="less" scoped>
.hot-pic {
  display: flex;
  flex-direction: column;
  padding: 30rem 0;
  padding-left: 20rem;
  background: url(../assets/hotpic-bc.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .pic {
    background: url(../assets/jingling.png) no-repeat;
    background-size: 166rem 97rem;
    width: 142rem;
    height: 67rem;
    position: relative;
    z-index: 3;
    background-position: -26rem -30rem;
  }
  &::after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .update-time {
    margin-top: 10rem;
    z-index: 2;
    color: hsla(0, 0%, 100%, 0.8);
    font-size: 12rem;
  }
}
.hot-item {
  display: flex;
  .hot-cd {
    flex-basis: 40rem;
    font-size: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  // 前三个hot-item的排名要红色
  &:nth-of-type(-n + 4) {
    .hot-cd {
      color: #df3436;
    }
  }
  .song-item {
    flex: 1;
  }
}
.hot-more {
  height: 55px;
  line-height: 55px;
  text-align: center;
  color: #999;
  span {
    font-size: 14rem;
    padding-right: 10rem;
  }
}
</style>