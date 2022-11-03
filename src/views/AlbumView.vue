<template>
  <div>
    <div v-if="!loading">
      <album-info :info="info"> </album-info>

      <div class="desc">
        <div class="sdesc">简介:{{ " " + info.sdesc }}</div>
        <div class="ldesc all" ref="ldesc">
          <div class="part" v-for="(i, index) in info.desc" :key="index">
            {{ i }}<br />
          </div>
        </div>
        <div>
          <svg
            class="toggle"
            v-if="!all"
            @click="toggleAll"
            t="1664003308613"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2833"
            width="12"
            height="12"
          >
            <path
              d="M40.644923 251.069046l471.355077 471.355077L983.355077 251.069046A23.809313 23.809313 0 0 1 1017.026297 284.740267l-488.190687 488.190687a23.809313 23.809313 0 0 1-33.67122 0L6.973703 284.740267A23.809313 23.809313 0 0 1 40.644923 251.069046z"
              p-id="2834"
              fill="#666666"
            ></path>
          </svg>
          <svg
            class="toggle"
            v-if="all"
            @click="toggleAll"
            t="1664003358325"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3138"
            width="12"
            height="12"
          >
            <path
              d="M983.355077 772.930954l-471.355077-471.355077L40.644923 772.930954A23.809313 23.809313 0 0 1 6.973703 739.259733l488.190687-488.190687a23.809313 23.809313 0 0 1 33.67122 0L1017.026297 739.259733A23.809313 23.809313 0 0 1 983.355077 772.930954z"
              p-id="3139"
              fill="#666666"
            ></path>
          </svg>
        </div>
      </div>
      <h3 class="section">歌曲列表</h3>
      <song-list :songs="songs" :three="false"
        >/
        <h3 class="section">精彩评论</h3>
      </song-list>
      <h3 class="section">精彩评论</h3>
      <comment-item
        v-for="(item,index) in hotComments"
        :comment="item"
        :key="index"
      ></comment-item>
      <h3 class="section">最新评论</h3>
       <comment-item
        v-for="(item,index) in comments"
        :comment="item"
        :key="index+'a'"
      ></comment-item>
    </div>

    <loading-svg
      v-if="loading"
      :bool="loading"
      :size="80"
      :mtop="200"
    ></loading-svg>
  </div>
</template>

<script>
import AlbumInfo from "../components/AlbumInfo.vue";
import CommentItem from "../components/CommentItem.vue";
import LoadingSvg from "../components/LoadingSvg.vue";
import SongList from "../components/SongList.vue";
export default {
  components: { AlbumInfo, LoadingSvg, SongList, CommentItem },
  data() {
    return {
      id: this.$route.params.id,
      loading: true,
      songs: [],
      info: { img: "", alname: "", arname: "", desc: [], sdesc: "", time: "" },
      all: false,
      offset: 0,
      comments: [],
      hotComments: [],
    };
  },
  created() {
    Promise.all([
      this.axios.get("https://apis.netstart.cn/music/album", {
        params: { id: this.id },
      }),
      this.axios.get("https://apis.netstart.cn/music/comment/album", {
        params: { id: this.id, offset: this.offset * 20 },
      }),
      this.axios.get("https://apis.netstart.cn/music/comment/hot", {
        params: { id: this.id, limit: 10, type: 3 },
      }),
    ]).then(([m, n, p]) => {
      this.loading = false;
      this.info.alname = m.data.album.name;
      this.info.img = m.data.album.picUrl;
      this.info.arname = m.data.album.artist.name;
      // this.info.time = m.data.album.description.name

      this.info.sdesc = m.data.album.description.split("\n\n")[0];
      this.info.desc = m.data.album.description
        .split("\n\n")
        .filter((o, i) => i > 0);
      this.songs = m.data.songs;

      this.comments = this.comments.concat(n.data.comments);

      this.hotComments = p.data.hotComments;
    });
  },
  methods: {
    toggleAll() {
      this.$refs.ldesc.classList.toggle("all");
      this.all = !this.all;
    },
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
  height: 23px;
  line-height: 23px;
  padding: 0 10px;
  font-size: 12px;
  color: #666;
  background-color: #eeeff0;
}
.all {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
}

.desc {
  padding: 10rem 10rem 0 15rem;
  font-size: 14rem;
  color: #333;
  position: relative;
  .sdesc {
    padding-bottom: 10rem;
  }
  .ldesc {
    .part {
    }
  }
  .toggle {
    position: absolute;
    right: 10rem;
    bottom: 0;
  }
}
</style>