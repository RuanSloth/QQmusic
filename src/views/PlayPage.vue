<template>
  <div
    class="play-page"
    :style="{
      backgroundImage: `url(${picUrl}?imageView&thumbnail=360y360&quality=75&tostatic=0)`,
    }"
  >
    <div class="cover"></div>

    <div class="top">
      <div class="top-btn" @click="$emit('close-play-page')">
        <div class="contain">
          <svg
            t="1664812259470"
            class="icon"
            viewBox="0 0 1706 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="26973"
            width="50"
            height="50"
          >
            <path
              d="M533.12 384.043l319.959 319.959 319.959-319.959-63.805-64.045-256.149 255.927-255.927-255.927-64.045 64.045z"
              fill="#8e8e8e"
              p-id="26974"
            ></path>
          </svg>
        </div>
      </div>
      <div class="center">
      
        <span  @click="pageLrc = false ;"  >推荐</span>
        <span @click="pageLrc = false" :class="{active: !pageLrc}">歌曲</span>
        <span @click="pageLrc = true" :class="{active: pageLrc}">歌词</span>
      </div>
      <div class="top-btn">
        <div class="contain">
          <svg
            t="1664812104590"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="21985"
            data-spm-anchor-id="a313x.7781069.0.i40"
            width="30"
            height="30"
          >
            <path
              d="M832 250.352L468.215 612.354c-15.66 15.582-40.986 15.52-56.569-0.14-15.582-15.659-15.52-40.985 0.14-56.568L777.222 192H626c-22.091 0-40-17.909-40-40s17.909-40 40-40h174c61.856 0 112 50.144 112 112v174c0 22.091-17.909 40-40 40s-40-17.909-40-40V250.352z m0 339.909c0-22.092 17.909-40 40-40s40 17.908 40 40V800c0 61.856-50.144 112-112 112H224c-61.856 0-112-50.144-112-112V224c0-61.856 50.144-112 112-112h209.74c22.09 0 40 17.909 40 40s-17.91 40-40 40H224c-17.673 0-32 14.327-32 32v576c0 17.673 14.327 32 32 32h576c17.673 0 32-14.327 32-32V590.26z"
              p-id="21986"
              fill="#8e8e8e"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="wrap shadow" v-show="!pageLrc">
        <img
          :src="picUrl + '?imageView&thumbnail=360y360&quality=75&tostatic=0'"
          alt=""
          :class="{ playing: playing }"
        />
      </div>
      <div class="lyric" v-show="!pageLrc">
        <p ref="lrc1">{{ lrc[nowLrc]?.text }}</p>
        <p ref="lrc2">{{ lrc[nowLrc + 1]?.text }}</p>
        <p ref="lrc2">{{ lrc[nowLrc + 2]?.text }}</p>
        <img src="../assets/imgs/74.png" alt="" />
        <!-- <div class="do-some">
        <div class="share">
          <svg
            t="1664180589839"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="17214"
            width="20"
            height="20"
          >
            <path
              d="M919.272727 416.581818L607.418182 79.127273c-11.636364-11.636364-32.581818-11.636364-44.218182 0-6.981818 6.981818-9.309091 16.290909-9.309091 25.6v181.527272c-258.327273 0-465.454545 207.127273-465.454545 463.127273 0 62.836364 13.963636 125.672727 39.563636 183.854546 37.236364-193.163636 221.090909-339.781818 425.890909-339.781819v181.527273c-2.327273 9.309091 2.327273 18.618182 9.309091 25.6 4.654545 6.981818 13.963636 9.309091 23.272727 9.309091s18.618182-4.654545 23.272728-11.636364L919.272727 465.454545c6.981818-6.981818 9.309091-13.963636 9.309091-23.272727s-4.654545-18.618182-9.309091-25.6z"
              p-id="17215"
              fill="#8d9095"
            ></path>
          </svg>
        </div>
        <div class="liked">
          <svg
            t="1664180589839"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="17214"
            width="20"
            height="20"
          >
            <path
              d="M919.272727 416.581818L607.418182 79.127273c-11.636364-11.636364-32.581818-11.636364-44.218182 0-6.981818 6.981818-9.309091 16.290909-9.309091 25.6v181.527272c-258.327273 0-465.454545 207.127273-465.454545 463.127273 0 62.836364 13.963636 125.672727 39.563636 183.854546 37.236364-193.163636 221.090909-339.781818 425.890909-339.781819v181.527273c-2.327273 9.309091 2.327273 18.618182 9.309091 25.6 4.654545 6.981818 13.963636 9.309091 23.272727 9.309091s18.618182-4.654545 23.272728-11.636364L919.272727 465.454545c6.981818-6.981818 9.309091-13.963636 9.309091-23.272727s-4.654545-18.618182-9.309091-25.6z"
              p-id="17215"
              fill="#8d9095"
            ></path>
          </svg>
        </div>
      </div> -->
      </div>

      <page-lrc
        v-show="pageLrc"
        :lrc="lrc"
        :duration="duration"
        :currentTime="currentTime"
        @click.native="pageLrc = false"
        @update-Time-lrc="$emit('update-time', $event)"
      ></page-lrc>
    </div>
    <ul class="do" v-show="!pageLrc">
      <li>
        <img src="../assets/imgs/MH.png" alt="" />
      </li>
      <li>
        <img src="../assets/imgs/70.png" alt="" />
      </li>
      <li>
        <svg
          t="1664863214867"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="28960"
          width="35"
          height="35"
        >
          <path
            d="M840.5 900.3h-657c-16.5 0-29.9 13.4-29.9 29.9s13.4 29.9 29.9 29.9h657.1c16.5 0 29.9-13.4 29.9-29.9-0.1-16.6-13.5-29.9-30-29.9zM631.5 123.7V541.8H763.1L512 769.9l-251.2-228h131.7V123.7h239m0-59.7h-239c-33 0-59.7 26.7-59.7 59.7v358.4H183.5c-26.6 0-39.9 32.2-21.1 51l328.5 298.2c5.8 5.8 13.5 8.7 21.1 8.7s15.3-2.9 21.1-8.7l328.5-298.2c18.8-18.8 5.5-51-21.1-51H691.2V123.7c0-33-26.7-59.7-59.7-59.7z"
            p-id="28961"
            fill="rgba(256,256,223,.6)"
            
          ></path>
        </svg>
      </li>
      <li>
        <img src="../assets/imgs/Bc.png" alt="" />
        <span style="color: rgba(256,256,223,.6)">999+</span>
      </li>
      <li>
        <svg
          t="1664863825641"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="30078"
          width="35"
          height="35"
        >
          <path
            d="M224 597.333333C183.466667 597.333333 149.333333 563.2 149.333333 522.666667S183.466667 448 224 448s74.666667 34.133333 74.666667 74.666667-32 74.666667-74.666667 74.666666zM512 597.333333c-40.533333 0-74.666667-34.133333-74.666667-74.666666S471.466667 448 512 448s74.666667 34.133333 74.666667 74.666667S554.666667 597.333333 512 597.333333zM800 597.333333c-40.533333 0-74.666667-34.133333-74.666667-74.666666s34.133333-74.666667 74.666667-74.666667 74.666667 34.133333 74.666667 74.666667-32 74.666667-74.666667 74.666666z"
            fill="rgba(256,256,223,.6)"
            p-id="30079"
          ></path>
        </svg>
      </li>
    </ul>
    <div class="control" v-show="!pageLrc">
      <div class="jindu">
        <input
          type="range"
          min="0"
          :max="duration"
          ref="tmpRange"
          @input="
            draging = true;
            tmpCurrentTime = $event.target.value;
          "
          :value="tmpCurrentTime"
          @change="
            $emit('update-time', $event.target.value);
            draging = false;
          "
        />
        <div
          class="now"
          v-show="!draging"
          :style="{ width: (currentTime / duration) * 100 + '%' }"
        ></div>
        <div
          class="now"
          v-show="draging"
          :style="{ width: (tmpCurrentTime / duration) * 100 + '%' }"
        ></div>

        <div
          class="point"
          v-show="!draging"
          :style="{
            left: (currentTime / duration) * 100 + '%',
          }"
        ></div>
        <div
          class="point"
          v-show="draging"
          :style="{
            left: (tmpCurrentTime / duration) * 100 + '%',
          }"
        ></div>
      </div>

      <div class="time">
        <div class="currentTime">{{ time1 }}</div>
        <div class="duration">{{ time2 }}</div>
      </div>

      <div class="do">
        <div class="model" v-show="!model" @click="$emit('change-model')">
          <svg
            t="1664362680495"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="18955"
            width="25"
            height="25"
          >
            <path
              d="M861.742545 520.005818c13.963636 0 25.460364 10.146909 27.648 23.458909l0.372364 4.514909v77.730909a183.435636 183.435636 0 0 1-174.033454 183.20291l-9.448728 0.279272H229.981091l90.437818 90.437818a28.439273 28.439273 0 0 1 3.258182 36.305455l-3.258182 3.909818a28.439273 28.439273 0 0 1-36.305454 3.258182l-3.909819-3.258182-136.192-136.192a33.978182 33.978182 0 0 1-3.490909-44.218182l3.490909-4.049454 133.911273-133.911273a28.439273 28.439273 0 0 1 43.52 36.305455l-3.258182 3.909818-87.412363 87.365818-4.049455 4.142545h479.557818a127.441455 127.441455 0 0 0 127.255273-119.714909l0.232727-7.773091v-77.730909c0-15.453091 12.520727-27.973818 27.973818-27.973818z m-122.135272-438.923636l3.956363 3.258182L879.709091 220.532364a33.978182 33.978182 0 0 1 8.192 13.079272l0.651636 2.187637c2.606545 9.774545 0.791273 20.48-5.399272 28.951272l-3.444364 4.049455-133.911273 133.911273a28.439273 28.439273 0 0 1-43.52-36.305455l3.258182-3.909818 87.412364-87.365818 4.049454-4.189091-479.604363 0.046545a127.441455 127.441455 0 0 0-127.208728 119.714909l-0.232727 7.726546v77.730909a28.020364 28.020364 0 0 1-55.621818 4.561455l-0.372364-4.561455V398.429091a183.435636 183.435636 0 0 1 173.986909-183.202909l9.448728-0.232727h476.346181L703.301818 124.555636a28.439273 28.439273 0 0 1-3.304727-36.305454l3.258182-3.909818a28.439273 28.439273 0 0 1 36.305454-3.258182z"
              fill="#8a8a8a"
              p-id="18956"
            ></path>
          </svg>
        </div>

        <div class="model" v-show="model" @click="$emit('change-model')">
          <svg
            t="1664910162589"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="33720"
            width="25"
            height="25"
          >
            <path
              d="M192 789.333333a21.24 21.24 0 0 1-12.8-4.28 344.513333 344.513333 0 0 1-99.333333-118A341.246667 341.246667 0 0 1 384 170.666667h256q6.36 0 12.733333 0.233333l-49.153333-49.146667a21.333333 21.333333 0 0 1 30.173333-30.173333l85.333334 85.333333a21.333333 21.333333 0 0 1 0 30.173334l-85.333334 85.333333a21.333333 21.333333 0 0 1-30.173333-30.173333l48.666667-48.666667Q646.126667 213.333333 640 213.333333H384c-164.666667 0-298.666667 134-298.666667 298.666667 0 94.833333 43.546667 181.933333 119.48 238.966667A21.333333 21.333333 0 0 1 192 789.333333z m228.433333 143.06a21.333333 21.333333 0 0 0 0-30.173333l-49.153333-49.146667q6.366667 0.233333 12.733333 0.233334H640a341.46 341.46 0 0 0 304.146667-496.42 344.513333 344.513333 0 0 0-99.333334-118 21.333333 21.333333 0 1 0-25.626666 34.113333C895.12 330.066667 938.666667 417.166667 938.666667 512c0 164.666667-134 298.666667-298.666667 298.666667H384q-6.12 0-12.246667-0.246667l48.666667-48.666667a21.333333 21.333333 0 0 0-30.173333-30.173333l-85.333334 85.333333a21.333333 21.333333 0 0 0 0 30.173334l85.333334 85.333333a21.333333 21.333333 0 0 0 30.173333 0zM554.666667 618.666667V405.333333a21.333333 21.333333 0 0 0-21.333334-21.333333h-42.666666a21.333333 21.333333 0 0 0 0 42.666667h21.333333v192a21.333333 21.333333 0 0 0 42.666667 0z"
              fill="#8a8a8a"
              p-id="33721"
            ></path>
          </svg>
        </div>
        <div
          class="prev shadow"
          @click="
            $emit('update-song', {
              song: songList[
                nowSong - 1 < 0 ? songList.length - 1 : nowSong - 1
              ],
              songList: songList,
              listName: listName,
            })
          "
        >
          <svg
            t="1664179351864"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10696"
            width="35"
            height="35"
          >
            <path
              d="M862.208 824.448a63.872 63.872 0 0 1-65.664-3.2l-384-256a64 64 0 0 1-0.064-106.496l384-256A64.021333 64.021333 0 0 1 896 256v512a64.106667 64.106667 0 0 1-33.792 56.448zM320 832H192c-35.392 0-64-28.608-64-64V256c0-35.392 28.608-64 64-64h128c35.392 0 64 28.608 64 64v512c0 35.392-28.608 64-64 64z"
              fill="#ffffff"
              p-id="10697"
            ></path>
          </svg>
        </div>
        <div
          class="center shadow"
          v-show="!playing"
          @click="$emit('song-play')"
        >
          <svg
            t="1664909358511"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="31137"
            width="65"
            height="65"
          >
            <path
              d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m-50.56 234.666667c-19.2 0-34.773333 15.573333-34.773333 34.773333v182.997334a34.773333 34.773333 0 0 0 53.546666 29.248l143.808-92.394667a34.773333 34.773333 0 0 0-0.256-58.666667l-143.808-90.602666a34.773333 34.773333 0 0 0-18.538666-5.354667z"
              p-id="31138"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
        <div
          class="center shadow"
          v-show="playing"
          @click="$emit('song-pause')"
        >
          <svg
            t="1664909410814"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="32196"
            width="65"
            height="65"
          >
            <path
              d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM320 320v384h128V320H320z m256 0v384h128V320H576z"
              fill="#ffffff"
              p-id="32197"
            ></path>
          </svg>
        </div>
        <div
          class="next shadow"
          @click="
            $emit('update-song', {
              song: songList[
                nowSong + 1 > songList.length - 1 ? 0 : nowSong + 1
              ],
              songList: songList,
              listName: listName,
            })
          "
        >
          <svg
            t="1664179306740"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9439"
            width="29"
            height="29"
          >
            <path
              d="M743.36 427.52L173.76 119.04A96 96 0 0 0 32 203.52v616.96a96 96 0 0 0 141.76 84.48l569.6-308.48a96 96 0 0 0 0-168.96zM960 96a32 32 0 0 0-32 32v768a32 32 0 0 0 64 0V128a32 32 0 0 0-32-32z"
              fill="#ffffff"
              p-id="9440"
            ></path>
          </svg>
        </div>
        <div class="list" @click.stop="$emit('show-list')">
          <svg
            t="1664797952231"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="20852"
            width="38"
            height="38"
          >
            <path
              d="M717.12 394.88v12.592h-0.32v218.656h-48v-48h0.32V397.616a11.248 11.248 0 0 1-0.08-1.28v-36.864h48v34.752l0.08 0.64zM648.528 748.8h-68.256a85.328 85.328 0 1 1 0-170.672h88.848V397.616a11.248 11.248 0 0 1-0.08-1.28V336a48 48 0 0 1 48-48h71.232a48 48 0 0 1 48 48v23.472a48 48 0 0 1-48 48H716.8v273.056a68.272 68.272 0 0 1-68.272 68.272z m-67.2-122.704a37.344 37.344 0 0 0 0 74.688h71.504a16 16 0 0 0 16-16V626.08h-87.488zM716.912 336v23.568h71.36V336h-71.36z m-529.76-48H580.88c6.16 0 11.136 4.976 11.136 11.136v25.728A11.136 11.136 0 0 1 580.88 336H187.136A11.136 11.136 0 0 1 176 324.864v-25.728c0-6.16 4.976-11.136 11.136-11.136zM580.88 464c-15.84 0-29.328 9.984-34.56 24 5.232 14.016 18.72 24 34.56 24H187.136c15.84 0 29.328-9.984 34.56-24a36.88 36.88 0 0 0-34.56-24h393.728z m-393.728 0H580.88c6.16 0 11.136 4.976 11.136 11.136v25.728A11.136 11.136 0 0 1 580.88 512H187.136A11.136 11.136 0 0 1 176 500.864v-25.728c0-6.16 4.976-11.136 11.136-11.136z m0 192H404.88c6.16 0 11.136 4.976 11.136 11.136v25.728A11.136 11.136 0 0 1 404.88 704H187.136A11.136 11.136 0 0 1 176 692.864v-25.728c0-6.16 4.976-11.136 11.136-11.136z"
              p-id="20853"
              fill="#8e8e8e"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageLrc from "../components/PageLrc.vue";

export default {
  components: { PageLrc },
  props: {
    playing: Boolean,
    currentTime: [Number, String],
    duration: Number,
    songId: Number,
    songList: Array,
    listName: String,
    model: Boolean,
   
  },
  data() {
    return {
      songName: "",
      arName: "",
      lrc: [],
      picUrl: "",
      tmpCurrentTime: 0,
      draging: false,

      pageLrc: false,
    };
  },
  computed: {
    time1() {
      let a = Math.floor(this.currentTime / 60);
      let b = Math.floor(this.currentTime % 60);
      return (a + "").padStart(2, "0") + ":" + (b + "").padStart(2, "0");
    },
    time2() {
      let a = Math.floor(this.duration / 60);
      let b = Math.floor(this.duration % 60);
      return (a + "").padStart(2, "0") + ":" + (b + "").padStart(2, "0");
    },
    nowLrc() {
      return (
        this.lrc.map((o) => o.time).findIndex((i) => this.currentTime < i) - 1
      );
    },
    nowSong() {
      return this.songList.map((o) => o.id).findIndex((m) => m === this.songId);
    },
  },
  created() {
    this.axios
      .get("https://apis.netstart.cn/music/song/detail", {
        params: {
          ids: this.songId,
        },
      })
      .then((res) => {
        this.songName = res.data.songs[0].name;
        this.arName = res.data.songs[0].ar.map((o) => o.name).join("/");
        this.picUrl = res.data.songs[0].al.picUrl;
        this.axios
          .get("https://apis.netstart.cn/music/lyric", {
            params: {
              id: this.songId,
            },
          })
          .then((m) => {
            this.lrc = this.dealWithLrc(m.data.lrc.lyric);
          });
      });
  },
  watch: {
    songId(newSongId) {
      this.axios
        .get("https://apis.netstart.cn/music/song/detail", {
          params: {
            ids: newSongId,
          },
        })
        .then((res) => {
          this.songName = res.data.songs[0].name;
          this.arName = res.data.songs[0].ar.map((o) => o.name).join("/");
          this.picUrl = res.data.songs[0].al.picUrl;
          this.axios
            .get("https://apis.netstart.cn/music/lyric", {
              params: {
                id: newSongId,
              },
            })
            .then((m) => {
              this.lrc = this.dealWithLrc(m.data.lrc.lyric);
            });
        });
    },
  },
  methods: {
    updateChangePoint(e) {
      console.log(e);
    },
    dealWithLrc(lyric) {
      let arr = lyric.split("\n");

      return arr
        .filter((o) => o)
        .map((o) => {
          var { groups } = o.match(
            /\[(?<mm>\d{2}):(?<ss>\d{2}\.\d{2,3})\](?<text>.*)/
          );
          return {
            time: groups.mm * 60 + groups.ss * 1,
            text: groups.text.trim(),
          };
        });
    },
    cleanChangePoint() {},
  },
};
</script>

<style lang="less" scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.play-page {
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  padding: 10rem 20rem;
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    backdrop-filter: blur(40px);
  }
  .top {
    display: flex;
    width: 100%;
    position: relative;
    z-index: 5;
   
    .top-btn {
      flex-basis: 50rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contain {
        min-width: 50rem;
        min-height: 50rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 21rem;
      }
    }
    .center {
      flex: 1;
      display: flex;
      justify-content: center;
      padding: 0 30rem;
      text-align: center;
      justify-content: space-between;
      align-items: center;
       span.active{
      color: #fafafa;
    }
      span {
        color: #8e8e8e;
      }
      .right {
        flex-basis: 50rem;
      }
    }
  }
  .container {
    position: relative;
    z-index: 5;
    width: 100%;
    margin: 18rem 0;
    min-height: 390rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    .wrap {
      display: flex;
      justify-content: center;
      min-height: 290rem;
      img {
        border-radius: 30rem;
        width: 92%;
      }
    }

    .lyric {
      padding: 10rem 0;
      width: 100%;
      display: flex;
      position: relative;
      flex-direction: column;
      min-height: 100rem;
      p {
        padding: 5rem 0;
        &:nth-of-type(1) {
          font-size: 20rem;
          font-weight: 700;
          color: #fff;
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          font-size: 13rem;
          font-weight: 500;
          color: #989292;
        }
      }
      img {
        position: absolute;
        right: 0;
        width: 40rem;
        top: 50rem;
      }
    }
  }
  ul.do {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    li {
      position: relative;
      img {
        width: 45rem;
      }
      span {
        position: absolute;
        top: 4rem;
        right: -11rem;
        color: #8e8e8e;
      }
    }
  }
  .control {
    margin-top: 20rem;
    width: 100%;
    position: relative;
    z-index: 5;
    .jindu {
      height: 2rem;
      width: 100%;
      background-color: #8e8e8e;
      border-radius: 3rem;
      position: relative;
      input {
        width: 100%;
        opacity: 0;
        top: -5rem;
        left: 0;
        position: absolute;
      }
      .point {
        left: -7rem;
        top: -3rem;
        position: absolute;
        width: 9rem;
        max-width: 9rem;
        height: 9rem;
        background-color: #fff;
        border-radius: 50%;

        pointer-events: none;
      }
      .now {
        border-radius: 3rem;
        width: 15rem;
        height: 100%;
        background-color: #fafafa;
      }
    }
    .time {
      display: flex;
      justify-content: space-between;
      margin-top: 5rem;
      margin-bottom: 10rem;
      color: #8e8e8e;
    }
    .do {
      margin-top: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .prev {
        min-width: 50rem;
        min-height: 50rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50rem;
      }
      .center {
        min-width: 70rem;
        min-height: 70rem;
        display: flex;

        justify-content: center;
        align-items: center;
        border-radius: 117rem;
      }
      .next {
        min-width: 50rem;
        min-height: 50rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50rem;
      }
    }
  }

  .page-play-list {
    position: absolute;
    overflow: auto;
    top: 100rem;

    width: 100%;
    height: 400rem;
    z-index: 10;
  }
}
</style>