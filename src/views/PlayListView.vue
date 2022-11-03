<template>
  <div>
    <div v-if="!loading">
      <play-list-info
        :coverImg="playList.coverImgUrl"
        :pname="playList.name"
        :creator="playList.creator"
        :playCount="playList.playCount"
      ></play-list-info>
      <h3 class="section">
        <div class="text">
          <svg
            t="1665799237738"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="19063"
            width="20"
            height="20"
          >
            <path
              d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"
              p-id="19064"
              fill="#8e8e8e"
            ></path></svg
          >
          <span>
            搜索歌曲
            </span>
        </div>
      </h3>

  <div class="all">
      <div class="left"  @click="
          $emit('update-song', {
            song: playList.tracks[0],
            songList: playList.tracks,
            listName: playList.name,
          })
        ">
      <img src="@/assets/imgs/1N1.png" alt="">
      <span>全部播放({{playList.tracks?.length}})</span>
      </div>
      <div class="right">
        <img src="@/assets/imgs/ft.png" alt="">
      </div>
    </div>


      <div
        class="play-item"
        v-for="(song, index) in playList.tracks"
        :key="song.id"
      >
        <div class="song-cd">
          {{ index + 1 }}
        </div>

        <search-item
          class="song-item"
          :song="song.name"
          :sqMusic="song.sq"
          :artists="song.ar"
          :album="song.al.name"
          :songId="songId"
          @click.native="
              $emit('update-song', {
                song: song,
                songList: playList.tracks,
                listName: playList.name,
              })
            "
          :nowId="songId"
          @song-play="$emit('song-play')"
        ></search-item>
      </div>

      <!-- <h3 class="section">精彩评论</h3>
      <comment-item
        v-for="(item, index) in hotComments"
        :comment="item"
        :key="index"
      ></comment-item>
      <h3 class="section">最新评论</h3>
      <comment-item
        v-for="(item, index) in comments"
        :comment="item"
        :key="index + 'a'"
      ></comment-item>
      <div class="replenish"></div>
      <div class="play-ft">
        <div class="contain">收藏歌单</div>
      </div> -->
    </div>
    <!-- <loading-svg
      v-if="loading"
      :bool="loading"
      :size="80"
      :mtop="200"
    ></loading-svg> -->
    
  </div>
</template>

<script>
import PlayListInfo from "../components/PlayListInfo.vue";

// import LoadingSvg from "../components/LoadingSvg.vue";
// import CommentItem from "../components/CommentItem.vue";
import SearchItem from "@/components/SearchItem.vue";
export default {
  components: { PlayListInfo, SearchItem },
  // components: { PlayListInfo, SearchItem },
  // components: { PlayListInfo, SearchItem, LoadingSvg, CommentItem },
  data() {
    return {
      id: this.$route.params.id,
      playList: {},
      loading: true,

      offset: 0,
      comments: [],
      hotComments: [],
    };
  },
  props: {
    songId: [Number, String],
  },
  created() {
    Promise.all([
      this.axios.get("https://apis.netstart.cn/music/playlist/detail", {
        params: {
          id: this.id,
        },
      }),
      this.axios.get("https://apis.netstart.cn/music/comment/playlist", {
        params: { id: this.id, limit: 10 },
      }),
      this.axios.get("https://apis.netstart.cn/music/comment/playlist", {
        params: { id: this.id, offset: this.offset * 20 },
      }),
      this.axios.get("https://apis.netstart.cn/music/comment/hot", {
        params: { id: this.id, limit: 10, type: 2 },
      }),
    ]).then(([m, n, o, p]) => {
      this.playList = { ...m.data.playlist };
      this.hotComments = n.data.hotComments;
      this.newComments = n.data.comments;
      this.total = n.data.total;

      this.loading = false;

      this.comments = this.comments.concat(o.data.comments);

      this.hotComments = p.data.hotComments;
    });
  },
  watch: {
    offset() {
      this.axios
        .get("https://apis.netstart.cn/music/comment/album", {
          params: { id: this.id, offset: this.offset * 20 },
        })
        .then((res) => {
          this.comments = this.comments.concat(res.data.comments);
        });
    },
  },
};
</script>

<style lang="less" scoped>
h3.section {

  line-height: 23px;
  padding: 15rem 20px;
  font-size: 12px;
  color: #666;
  background-color: #fafafa;
  .text{
    padding: 5rem;
    text-align: center;
    background-color: #eeeff3;
    border-radius: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        padding-left: 5rem;
        color: #8e8e8e;
    }
  }
}

.all{
  display: flex;
  justify-content: space-between;
  margin: 15rem;
  .left{
    display: flex;
    align-items: center;
    img{

      width: 30rem
    }
    span{
      font-size: 15rem;
      padding-left: 5rem;
    }
  }
  .right{
    img{
      width: 30rem
    }
  }
}

.play-item {
  display: flex;
  .song-cd {
    flex-basis: 40rem;
    font-size: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .song-item {
    flex: 1;
  }
}
.replenish {
  height: 62rem;
  width: 100%;
}
.play-ft {
  padding-left: 30rem;
  padding-right: 30rem;
  position: fixed;
  height: 62rem;
  width: 100%;
  bottom: 0rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top: 1rem rgb(222, 221, 221) solid;
  .contain {
    flex: 1 1 12px;

    width: 100%;
    height: 40rem;
    line-height: 40rem;
    border-radius: 40rem;
    font-size: 18rem;
    text-align: center;
    background: rgb(255, 58, 58);
    color: rgb(255, 255, 255);
  }
}
</style>