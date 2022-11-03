<template>
  <div class="every">
    <div class="head">
      <div class="top">
        <div class="left" @click="$router.go(-1)">
          <svg
            t="1665453375842"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2780"
            width="20"
            height="20"
          >
            <path
              d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"
              p-id="2781"
              fill="#fafafa"
            ></path>
          </svg>
        </div>
        <div class="right">
          <svg
            t="1664812104590"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="21985"
            data-spm-anchor-id="a313x.7781069.0.i40"
            width="25"
            height="25"
          >
            <path
              d="M832 250.352L468.215 612.354c-15.66 15.582-40.986 15.52-56.569-0.14-15.582-15.659-15.52-40.985 0.14-56.568L777.222 192H626c-22.091 0-40-17.909-40-40s17.909-40 40-40h174c61.856 0 112 50.144 112 112v174c0 22.091-17.909 40-40 40s-40-17.909-40-40V250.352z m0 339.909c0-22.092 17.909-40 40-40s40 17.908 40 40V800c0 61.856-50.144 112-112 112H224c-61.856 0-112-50.144-112-112V224c0-61.856 50.144-112 112-112h209.74c22.09 0 40 17.909 40 40s-17.91 40-40 40H224c-17.673 0-32 14.327-32 32v576c0 17.673 14.327 32 32 32h576c17.673 0 32-14.327 32-32V590.26z"
              p-id="21986"
              fill="#fafafa"
            ></path>
          </svg>
        </div>
      </div>
      <div class="info">
        <div class="box">
          <span class="num">每日三十首</span>
          <div class="mouth">
            <span>-</span>Oct <span>-</span>
          </div>
          <div class="day">{{new Date().getDate()}}</div>
        </div>
      </div>
    </div>
    <div class="list-info">
      <div class="top">
        <img src="../assets/imgs/Kv.png" alt="" />
        <span>QQ音乐官方歌单</span>
      </div>
      <div class="center">甄选私人好品味: {{playList[0]?.name}}、{{playList[1]?.name}}</div>

      <div class="bottom">
        <div class="left">
          <svg
            t="1665928612580"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2636"
            width="26"
            height="26"
          >
            <path
              d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z m0 63.146667c-41.44 0-70.261333 15.189333-116.96 55.04-2.165333 1.845333-14.4 12.373333-17.941334 15.381333a32.32 32.32 0 0 1-41.770666 0c-3.541333-3.018667-15.776-13.536-17.941334-15.381333-46.698667-39.850667-75.52-55.04-116.96-55.04C230.186667 180.48 149.333333 281.258667 149.333333 426.698667 149.333333 537.6 262.858667 675.242667 493.632 834.826667a32.352 32.352 0 0 0 36.736 0C761.141333 675.253333 874.666667 537.6 874.666667 426.698667c0-145.44-80.853333-246.218667-206.88-246.218667z"
              p-id="2637"
              fill="#2c2c2c"
            ></path>
          </svg>
          <span>收藏</span>
        </div>
        <div class="right">
          <svg
            t="1665928665902"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4032"
            width="23"
            height="23"
          >
            <path
              d="M481.578667 968.832l-157.909334-158.293333H85.418667A85.290667 85.290667 0 0 1 0 725.12L0.426667 128.042667C0.426667 80.768 38.4 42.666667 85.845333 42.666667h852.778667c47.189333 0 85.418667 38.101333 85.376 85.418666l-0.426667 597.12c0 47.146667-38.229333 85.333333-85.376 85.333334h-237.781333l-158.549333 158.293333a42.624 42.624 0 0 1-60.288 0z m456.704-243.712L938.666667 128.042667s-852.906667-0.128-852.906667 0.042666c0 0-0.384 597.077333-0.298667 597.077334H341.333333c11.306667 0 22.186667 4.48 30.165334 12.501333l140.330666 140.629333 140.8-140.672a42.624 42.624 0 0 1 30.165334-12.458666h255.488zM277.333333 512a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m234.666667 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m234.666667 0a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
              fill="#2c2c2c"
              p-id="4033"
            ></path>
          </svg>
          <span>评论</span>
        </div>
      </div>
    </div>

    <div class="all">
      <div class="left"  @click="
          $emit('update-song', {
            song: playList[0],
            songList: playList,
          })
        ">
      <img src="@/assets/imgs/1N1.png" alt="">
      <span>全部播放({{playList?.length}})</span>
      </div>
      <div class="right">
        <img src="@/assets/imgs/ft.png" alt="">
      </div>
    </div>

    <div
      class="play-item"
      v-for="(song, index) in playList"
      :key="song.id"
    >
      <div class="song-cd">
        {{ index + 1 }}
      </div>

      <search-item
        class="song-item"
        :song="song?.name"
        :sqMusic="song.song.sqMusic"
        :artists="song.song?.artists"
        :album="song.song.album?.name"
        :songId="songId"
        @click.native="
          $emit('update-song', {
            song: song,
            songList: playList,
            listName: '推荐音乐',
          })
        "
        :nowId="songId"
        @song-play="$emit('song-play')"
      ></search-item>
    </div>
  </div>
</template>

<script>
import SearchItem from "@/components/SearchItem.vue";
export default {
  components: {
    SearchItem,
  },
  props:{
    songId: [Number, String]
  },
  data() {
    return {
      playList: {},
    };
  },
  created() {
    
      this.axios.get("https://apis.netstart.cn/music/personalized/newsong", {
        params: {
          limit: 30,
        },
      })
      .then((res) => (this.playList = res.data.result));
  },
};
</script>

<style lang="less" scoped>
.every {
  background-color: #fafafa;
}
.head {
  background-color: #cbcbcb;
  padding: 10rem 15rem 50rem;
  width: 100%;

  .top {
    display: flex;
    justify-content: space-between;
  }
  .info {
    display: flex;
    justify-content: center;
    padding: 20rem;
    .box {
      width: 150rem;
      height: 150rem;
      border: 2rem solid #fff;
      display: flex;
      flex-direction: column;
      box-sizing: content-box;
      .num {
        position: relative;
        z-index: 2;
        background-color: #cbcbcb;
        top: -11rem;
        width: 100rem;
        text-align: center;
        left: 25rem;
        font-size: 15rem;
        color: #fff;
        font-weight: 700;
      }
      .mouth {
        font-size: 15rem;
        color: #fff;
        text-align: center;
        span {
          margin: 5rem;
          position: relative;
          top: -2rem;
        }
      }
      .day {
        padding-top: 10rem;
        text-align: center;
        font-size: 80rem;
        color: #fff;
      }
    }
  }
}

.list-info {
  margin: 15rem;
  margin-top: -30rem;
  border-radius: 10rem;
  padding: 10rem 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .top {
    padding-left: 15rem;
    display: flex;
    align-items: center;
    img {
      width: 40rem;
    }
    span {
      font-size: 16rem;
    }
  }
  .center {
    padding: 15rem;
    padding-right: 0;
    border-bottom: 2rem solid #f3f3f3;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    padding: 10rem;
    .left {
      display: flex;
      align-items: center;
      span {
        padding-left: 5rem;
      }
    }
    .right {
      display: flex;
      align-items: center;
      span {
        padding-left: 5rem;
      }
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
</style>
