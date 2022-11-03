vba
<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="#fefefe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <ul class="category">
      <li>
        <img src="../assets/chart/home-1.png" alt="" />
        <p>猜你想听</p>
      </li>
      <li @click="$router.push('/every')">
        <img src="../assets/chart/home-2.png" alt="" />
        <p>每日30首</p>
      </li>
      <li>
        <img src="../assets/chart/home-3.png" alt="" />
        <p>排行</p>
      </li>
      <li>
        <img src="../assets/chart/home-4.png" alt="" />
        <p>分类歌单</p>
      </li>
      <li>
        <img src="../assets/chart/home-5.png" alt="" />
        <p>新歌新碟</p>
      </li>
    </ul>
    <h3>
      大家都在听
      <div
        class="small-btn"
        v-if="!playing"
        @click="
          $emit('update-song', {
            song: newsongs[0],
            songList: newsongs,
          })
        "
      >
        <img src="../assets/imgs/1h.png" alt="" />
        <p>播放</p>
      </div>
      <div class="small-btn" v-if="playing" @click="$emit('song-pause')">
        <img src="../assets/imgs/C0.png" alt="" />
        <p>暂停</p>
      </div>
    </h3>

    <div class="song-list" :style="{ width: songArr.length * 100 + '%' }">
      <ul
        @touchstart="startX = $event.touches[0].clientX"
        @touchend="moveSongList($event)"
      >
        <li
          v-for="(item, index) in songArr"
          :key="index"
          :style="{
            left: n1 ? -((100 / songArr.length - 2) * n1) + '%' : 0,
            width: 100 / songArr.length - 2 + '%',
          }"
        >
          <song-item
            v-for="song in item"
            style="width: 342rem"
            :key="song.id"
            :song="song.name"
            :picUrl="song.picUrl"
            :sqMusic="song.song.sqMusic"
            :artists="song.song.album.artists"
            :album="song.song.album.name"
            @click.native="
              $emit('update-song', {
                song: song,
                songList: newsongs,
                listName: '最新音乐',
              })
            "
            :nowId="songId"
            :songId="song.id"
            :playing="playing"
            @song-pause="$emit('song-pause')"
          >
          </song-item>
        </li>
      </ul>
    </div>
    <h3>你的歌单宝藏库</h3>

    <ul
      class="card-list"
      @touchstart="startX = $event.touches[0].clientX"
      @touchend="moveSongCard($event)"
      :style="{
        left: leftCard + 'rem',
        width: (personalizeds.length / 2) * 115 + 'rem',
      }"
    >
      <home-card
        v-for="item in personalizeds"
        :key="item.id"
        :item="item"
        @click.native="$router.push('/playlist/' + item.id)"
        @update-song="$emit('update-song', song)"
        :nowId="songId"
        :playing="playing"
        @song-play="$emit('song-play')"
      ></home-card>
    </ul>

    <h3>
      不可多得的华语好音乐
      <div
        class="small-btn"
        v-if="!playing"
        @click="
              $emit('update-song', {
                song:  reNewSongs[2],
                songList: reNewSongs,
              })"
      >
        <img src="../assets/imgs/1h.png" alt="" />
        <p>播放</p>
      </div>
      <div class="small-btn" v-if="playing" @click="$emit('song-pause')">
        <img src="../assets/imgs/C0.png" alt="" />
        <p>暂停</p>
      </div>
    </h3>
    <div class="song-list" :style="{ width: songArr.length * 100 + '%' }">
      <ul
        @touchstart="startX = $event.touches[0].clientX"
        @touchend="moveSongList2($event)"
      >
        <li
          v-for="(item, index) in songArr2"
          :key="index"
          :style="{
            left: n2 ? -((100 / songArr.length - 2) * n2) + '%' : 0,
            width: 100 / songArr.length - 2 + '%',
          }"
        >
          <song-item
            style="width: 342rem"
            v-for="song in item"
            :key="song.id"
            :song="song.name"
            :picUrl="song.picUrl"
            :sqMusic="song.song.sqMusic"
            :artists="song.song.album.artists"
            :album="song.song.album.name"
            @click.native="
              $emit('update-song', {
                song: song,
                songList: newsongs,
                listName: '最新音乐',
              })
            "
            :nowId="songId"
            :songId="song.id"
            :playing="playing"
            @song-pause="$emit('song-pause')"
          >
          </song-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HomeCard from "../components/home/HomeCard.vue";
// @ is an alias to /src

import SongItem from "../components/SongItem.vue";

export default {
  name: "HomeView",
  components: {
    SongItem,
    HomeCard,
  },
  props: {
    songId: [Number, String],
    playing: Boolean,
  },
  data() {
    return {
      personalizeds: [],
      newsongs: [],
      images: [
        require("../assets/chart/2.png"),
        require("../assets/chart/3.png"),
        require("../assets/chart/4.png"),
      ],
      songArr: [],
      listArr: [],
      n1: 0,
      n2: 0,
      songArr2: [],
      startX: 0,
      moveCardX: 0,
      leftCard: 0,
    };
  },
  computed: {
    reNewSongs() {
      
      return [...this.newsongs].reverse()
    },
  },
  created() {
    Promise.all([
      this.axios.get("https://apis.netstart.cn/music/personalized", {
        params: {
          limit: 14,
        },
      }),
      this.axios.get("https://apis.netstart.cn/music/personalized/newsong", {
        params: {
          limit: 12,
        },
      }),
    ]).then(([p, n]) => {
      this.personalizeds = p.data.result;
      this.newsongs = n.data.result;

      let tmpArr = [...this.newsongs];

      for (let i = 0; i < tmpArr.length; i) {
        this.songArr.push(tmpArr.splice(i, 3));
      }
      for (let i = this.songArr.length - 1; i >= 0; i--) {
        this.songArr2.push(this.songArr[i]);
      }
    });
  },
  methods: {
    moveSongList(e) {
      // console.log(e,window.innerWidth);
      let move = e.changedTouches[0].clientX - this.startX;

      if (move > 0) {
        // 应该滑到上一张

        if (this.n1 > 0) {
          this.n1--;
        }
      } else if (move === 0) {
        return;
      } else {
        // 应该滑到下一张
        if (this.n1 < this.songArr.length - 1) {
          this.n1++;
        }
      }
    },
    moveSongList2(e) {
      // console.log(e,window.innerWidth);
      let move = e.changedTouches[0].clientX - this.startX;

      if (move > 0) {
        // 应该滑到上一张

        if (this.n2 > 0) {
          this.n2--;
        }
      } else if (move === 0) {
        return;
      } else {
        // 应该滑到下一张
        if (this.n2 < this.songArr.length - 1) {
          this.n2++;
        }
      }
    },
    moveSongCard(e) {
      let move = e.changedTouches[0].clientX - this.startX;
 
      // console.log(Math.abs(this.moveCardX += move) ,window.innerWidth + (this.personalizeds.length / 2) * 120)
      let tmp = (this.moveCardX += move);
      if (tmp < 0) {
        this.leftCard =
          Math.abs(tmp) + window.innerWidth >
          (this.personalizeds.length / 2) * 120
            ? (this.moveCardX = -(this.personalizeds.length / 2) * 115 + 360)
            : this.moveCardX;
      } else {
        this.leftCard = 0;
      }
    },
  },
};
</script>

<style lang="less" >
.home {
  overflow: hidden;
  .van-swipe {
    margin: 0 15rem;
    border-radius: 10rem;
  }
  .song-list {
    margin-left: 15rem;
    margin-bottom: 30rem;
    ul {
      position: relative;
      width: calc(100% - 15rem);
      display: flex;
      li {
        width: 100%;
        position: relative;
        transition: 0.5s;
      }
    }
  }
  ul.category {
    display: flex;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 60%;
      }
    }
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
  ul.card-list {
    transition: 0.3s;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    padding-bottom: 24rem;
    margin-left: 15rem;
    li {
    }
  }

  .home-ft {
    padding: 63rem 0 30rem;
    background-image: url(../assets/ftbc.png);
    background-size: cover;
    .logosvg {
      display: block;
      margin: 0 auto;
      width: 230rem;
      height: 44rem;
    }
    .openapp {
      line-height: 38rem;
      border: 1rem solid #d33a31;
      border-radius: 38rem;
      font-size: 16rem;
      color: #d33a31;
      margin: 15rem 37rem 5rem;
      text-align: center;
    }
  }
 
}
</style>
