<template>
  <div>
    <div v-if="!loading">
      <div
        class="head"
        :style="{
          backgroundImage: `url(${coverImg})`,
          backgroundSize: 'cover',
        }"
      >
        <div class="cover"></div>
        <div class="text">
          <h3>{{ name }}</h3>
          <h5 v-if="rank?.type === 1">歌手榜华语地区No.{{ rank.rank }}</h5>
          <h5 v-if="rank?.type === 2">歌手榜欧美地区No.{{ rank.rank }}</h5>
          <p class="fans">粉丝{{ Count }}</p>

          <div class="identifies" v-if="identifyTag?.length">
            <span class="tag" v-for="i in identifyTag" :key="i">{{ i }}</span>
            <span
              class="identi"
              v-for="(item, index) in identifies"
              :key="index"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <h3>歌手简介</h3>
      <div class="desc">
        <p class="all" ref="desc">{{ desc }}</p>
        <p class="toggle" v-if="!all" @click="toggleAll">
          完整歌手介绍
          <svg
            t="1664003308613"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2833"
            width="9"
            height="9"
          >
            <path
              d="M40.644923 251.069046l471.355077 471.355077L983.355077 251.069046A23.809313 23.809313 0 0 1 1017.026297 284.740267l-488.190687 488.190687a23.809313 23.809313 0 0 1-33.67122 0L6.973703 284.740267A23.809313 23.809313 0 0 1 40.644923 251.069046z"
              p-id="2834"
              fill="#666666"
            ></path>
          </svg>
        </p>
        <p class="toggle" v-if="all" @click="toggleAll">
          收起<svg
            t="1664003358325"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3138"
            width="9"
            height="9"
          >
            <path
              d="M983.355077 772.930954l-471.355077-471.355077L40.644923 772.930954A23.809313 23.809313 0 0 1 6.973703 739.259733l488.190687-488.190687a23.809313 23.809313 0 0 1 33.67122 0L1017.026297 739.259733A23.809313 23.809313 0 0 1 983.355077 772.930954z"
              p-id="3139"
              fill="#666666"
            ></path>
          </svg>
        </p>
      </div>
      <h3>热门单曲</h3>
      <song-list :songs="songs" :three="true"></song-list>
    </div>

    <loading-svg v-if="loading" :bool="loading" :size="80" :mtop="200"></loading-svg>
  </div>
</template>

<script>
import LoadingSvg from '../components/LoadingSvg.vue';
import SongList from "../components/SongList.vue";
export default {
  components: { SongList, LoadingSvg },
  data() {
    return {
      id: this.$route.params.id,
      coverImg: "",
      //   粉丝数
      fansCount: 0,
      desc: "",
      // 排名与地区
      rank: 0,
      name: "",
      identifyTag: [],
      identifies: [],

      all: false,
      songs: [],
      loading: true,
    };
  },
  computed: {
    Count() {
      return " " + Math.floor(this.fansCount / 1000) / 10 + "万";
    },
  },
  created() {
    
    Promise.all([
      this.axios("https://apis.netstart.cn/music/artist/detail", {
        params: { id: this.id },
      }),
      this.axios("https://apis.netstart.cn/music/artist/follow/count", {
        params: { id: this.id },
      }),

      this.axios("https://apis.netstart.cn/music/artist/top/song", {
        params: { id: this.id },
      }),
    ]).then(([m, n, s]) => {
      this.name = m.data.data.artist.name;
      this.coverImg = m.data.data.artist.cover;
      this.rank = m.data.data.artist.rank;
      this.fansCount = n.data.data.fansCnt;
      this.identifyTag = m.data.data.artist.identifyTag;
      this.identifies = m.data.data.artist.identities;

      this.desc = m.data.data.artist.briefDesc;

      this.songs = s.data.songs;
      this.songs.length = 10;

      this.loading = false
    });
  },
  methods: {
    toggleAll() {
      this.$refs.desc.classList.toggle("all");
      this.all = !this.all;
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  background-size: cover;
  position: relative;
  padding-top: 140rem;
  overflow: hidden;
  .cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 2;
    top: 0;
    left: 0;
    position: absolute;
  }
  .text {
    position: relative;
    z-index: 3;
    margin-left: 20rem;
    margin-bottom: 30rem;
    h3 {
      font-size: 20rem;
      color: #fff;
    }
    h5 {
      padding: 20rem 0;
      font-size: 15rem;
      color: #eee;
    }
    p {
      padding-bottom: 10rem;
      font-size: 13.5rem;
      &.fans {
        color: #eee;
      }
    }
    .identifies {
      span {
        color: #eee;
        &.tag {
          font-size: 13.5rem;
        }
        &.identi {
          color: rgb(203, 202, 202);
          font-size: 12rem;
          margin: 0 3rem;
          border: 1rem solid rgb(203, 202, 202);
          border-radius: 3rem;
        }
      }
    }
  }
}
h3 {
  margin-left: 10rem;
  font-weight: 600;
  font-size: 20rem;
  padding-bottom: 20rem;
  &:nth-of-type(1) {
    padding-top: 20rem;
  }
}
.desc {
  padding: 20rem;

  p {
    font-size: 14rem;
    line-height: 21rem;
    &.all {
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
    }
    &.toggle {
      padding-top: 30rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        margin-left: 5rem;
      }
    }
    color: #666;
  }
}
</style>