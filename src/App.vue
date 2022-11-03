<template>
  <div id="app">
    <div class="tab-bar" v-if="!this.$route.meta.hiddenTop && !showPlayPage">
  
      <div class="top" v-if="$route.path === '/home' || $route.path === '/'">
        <div class="top-fl">推荐</div>
        <div class="top-fr">
          <img src="./assets/imgs/Pa.png" alt="" />
        </div>
      </div>
      <div class="top" v-if="$route.path === '/my'">
        <div class="top-fl">我的</div>
        <div class="top-fr">
          <svg
            t="1664783733597"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12978"
            width="25"
            height="25"
          >
            <path
              d="M834.7 920.1h-643c-23.7 0-43-19.2-43-43 0-23.7 19.2-43 43-43h643c23.7 0 43 19.2 43 43 0 23.7-19.3 43-43 43zM834.7 190.9h-643c-23.7 0-43-19.2-43-43 0-23.7 19.2-43 43-43h643c23.7 0 43 19.2 43 43s-19.3 43-43 43zM834.7 545.5h-643c-23.7 0-43-19.2-43-43 0-23.7 19.2-43 43-43h643c23.7 0 43 19.2 43 43 0 23.7-19.3 43-43 43z"
              fill="#676767"
              p-id="12979"
            ></path>
          </svg>
        </div>
      </div>
      <div class="s-input" v-if="$route.path === '/home' || $route.path === '/'">
        <div class="contain">
          <svg
            t="1663751679776"
            width="18rem"
            height="18rem"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4778"
          >
            <path
              d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"
              p-id="4779"
              fill="#c9c9c9"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="搜索你想找的音乐"
            @focus="$router.push('/search')"
          />
        
        </div>
      </div>
    </div>
    <div
      class="replenish"
      v-if="!this.$route.meta.hiddenTop && !showPlayPage"
    ></div>
    <keep-alive>
      <router-view
        v-if="!showPlayPage && this.$route.meta.keepAlive"
        @update-song="UpdateSong($event)"
        @song-play="$refs.audio.play()"
        @song-pause="$refs.audio.pause()"
        :duration="duration"
        :currentTime="currentTime"
        :playing="playing"
        :songId="song?.id"
      >
      </router-view>
    </keep-alive>

    <router-view
      v-if="!showPlayPage && !this.$route.meta.keepAlive"
      @update-song="UpdateSong($event)"
      @song-play="$refs.audio.play()"
      @song-pause="$refs.audio.pause()"
      :duration="duration"
      :currentTime="currentTime"
      :playing="playing"
      :songId="song?.id"
    >
    </router-view>

    <play-page
      v-if="showPlayPage"
      @update-song="UpdateSong($event)"
      @song-play="$refs.audio.play()"
      @song-pause="$refs.audio.pause()"
      @show-list="showNowList = true"
      @close-play-page="showPlayPage = false"
      @update-time="$refs.audio.currentTime = $event"
      :duration="duration"
      :currentTime="currentTime"
      :playing="playing"
      :songId="song?.id"
      :songList="songList"
      :listName="listName"
      @change-model="model = !model"
      :model="model"
    ></play-page>
    <audio
      :src="
        song && ` https://music.163.com/song/media/outer/url?id=${song?.id}.mp3`
      "
      autoplay
      style="display: none"
      @play="playing = true"
      @pause="playing = false"
      controls
      @durationchange="duration = $event.target.duration"
      @timeupdate="currentTime = $event.target.currentTime"
      ref="audio"
    ></audio>

    <div class="cover" v-if="showNowList" @touchmove.prevent></div>
    <now-play-list
    @update-song="UpdateSong($event)"
      :list="songList"
      v-if="showNowList"
      :songId="song.id"
      @close-play-list="showNowList = false"
      @update-list="songList = $event"
      @touchmove.prevent.stop
    ></now-play-list>

    <play-bar
      v-if="song && !showPlayPage"
      :song="song"
      :playing="playing"
      @song-play="$refs.audio.play()"
      @song-pause="$refs.audio.pause()"
      :duration="duration"
      :currentTime="currentTime"
      @show-page="showPlayPage = true"
      @show-list="showNowList = true"
    ></play-bar>

    <!-- <div
      class="replenish2"
      v-if="!this.$route.meta.hiddenTop && !showPlayPage"
    ></div>

    <div class="nav-bar" v-if="!this.$route.meta.hiddenTop && !showPlayPage">
      <div class="left" @click="$router.push('/')">
        <div class="box">
          <img
            src="./assets/chart/music-1.png"
            v-show="this.$route.path !== '/home' && this.$route.path !== '/'"
            alt=""
          />

          <img
            src="./assets/chart/music.png"
            v-show="this.$route.path === '/home' || this.$route.path === '/'"
            alt=""
          />

          <span
            :class="{
              active: this.$route.path === '/home' || this.$route.path === '/',
            }"
            >首页</span
          >
        </div>
      </div>
      <div class="right">
        <div class="box" @click="$router.push('/my')">
          <img
            src="./assets/chart/user.png"
            v-show="this.$route.path !== '/my'"
            alt=""
          />
          <img
            src="./assets/chart/user-2.png"
            v-show="this.$route.path === '/my'"
            alt=""
          />

          <span :class="{ active: this.$route.path === '/my' }">我的</span>
        </div>
      </div>
    </div> -->
    <img :src="imgtest" alt="" width="100rem" height="100rem">
  </div>
</template>
<script>
import PlayBar from "./components/PlayBar.vue";
import PlayPage from "./views/PlayPage.vue";
import NowPlayList from "./components/NowPlayList.vue";

export default {
  components: { PlayBar, PlayPage, NowPlayList },
  data() {
    return {
      imgtest: require('./assets/chart/2.png'),
      showPlayPage: false,
      song: null,
      playing: false,
      songList: [],
      listName: [],
      currentTime: 0,
      duration: 0,
      model: false,
      showNowList: false,
    };
  },

  methods: {
    UpdateSong(res) {
      // 如果之前没播放歌曲,或现在想要播放的不是同一个
      console.log(res)
      if (!this.song || this.song.id !== res.song.id) {
        this.song = res.song;
        this.songList = res.songList;
        this.listName = res.listName;
        if (this.$refs.audio.readyState === 4) {
          this.$refs.audio.pause();
        } else {
          this.$refs.audio.play();
        }
      }
      // 否则的话,直接播放就好
      else {
        this.$refs.audio.play();
      }
    },
  },
  watch: {
    model(newModel) {
      if (newModel) {
        this.$refs.audio.loop = true;
      } else {
        this.$refs.audio.loop = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.s-input {
  padding: 0rem 10rem 10rem;

  .contain {
    position: relative;
    svg {
      position: absolute;
      top: 5rem;
      &:nth-of-type(1) {
        left: 8rem;
      }
      &:nth-of-type(2) {
        top: 5rem;
        right: 8rem;
      }
    }
    input {
      width: 100%;
      height: 30rem;
      background: #ebecec;
      border-radius: 30px;
      border: 0;
      font-size: 14rem;
      padding: 0 30rem;

      &:focus {
        outline: none;
      }
    }
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.tab-bar {
  background-color: #fafafa;
}
audio {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fafafa;
  min-height: 100vh;
  .van-swipe {
    margin: 0 15rem;
    border-radius: 10rem;
  }
}
.tab-bar {
  // position: sticky;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10rem;

    .top-fl {
      font-size: 20rem;
      font-weight: 700;
      padding-left: 10rem;
    }
    .top-fr {
      font-size: 16rem;
      height: 36rem;
      line-height: 36rem;
      color: #d43c33;
      background-color: #fff;
      display: flex;
      align-items: center;
      img {
        width: 35rem;
      }
      border-radius: 37.5%/100%;
    }
  }

  nav {
    background: #fff;
    display: flex;
    box-shadow: 0 0 2rem 0px rgb(208, 208, 208);
    a {
      text-decoration: none;
      flex-basis: 33.3%;

      text-align: center;

      span {
        display: inline-block;
        height: 40rem;
        line-height: 40rem;
        color: #2c3e50;
        font-size: 15rem;
        font-weight: 400;
      }
      &.router-link-exact-active {
        span {
          color: #dd001b;
          border-bottom: 3rem solid #dd001b;
        }
      }
    }
  }
}
.replenish {
  width: 100%;
  height: 96rem;
}
.replenish2 {
  width: 100%;
  height: 80rem;
}
.cover {
  position: absolute;
  width: 100%;
  height: 300%;
  background-color: #1b1b1bd4;
  z-index: 999;
  top: 0;
}
.nav-bar {
  display: flex;
  position: fixed;
  z-index: 99;
  bottom: 0;
  width: 100%;
  background: #fafafa;
  justify-content: space-around;
  padding: 5rem 0 5rem;

  span {
    color: #8f8f8f;

    text-align: center;
  }
  span.active {
    color: #1bd99d;
  }
  .box {
    display: flex;
    flex-direction: column;
  }
  .left {
  }
  .right {
  }
}
</style>
