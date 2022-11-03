<template>
  <div class="song-item" :class="{ active: song.id === songId }">
    <div class="sinfo">
      <div class="sname">
        {{ song }}
      </div>
      <div class="ar-al"> 
      <img v-if="sqMusic != null" src="@/assets/imgs/2D.png" width="20">
      {{ artistsName }}-{{album}}</div>
    </div>

    <div class="right">
      <svg
        t="1665752456453"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="14378"
        width="25"
        height="25"
      >
        <path
          d="M233.43968 179.043792H790.559297c42.98807 0 82.202187 17.588587 110.690008 45.613874 28.29237 28.511357 45.857421 67.945485 45.857421 110.952998v352.799138c0 43.22957-17.564028 82.417081-45.857421 110.690008-28.487821 28.29237-67.700915 45.856397-110.690008 45.856398H233.43968c-42.986023 0-81.95864-17.564028-110.471021-45.856398-28.511357-28.271904-46.076408-67.459415-46.076408-110.690008V335.612711c0-43.00649 17.564028-82.440617 46.076408-110.952998 28.512381-28.02631 67.483974-45.61592 110.471021-45.615921z m565.758368 58.741869H224.792743c-25.232684 0-48.258097 10.284227-65.389267 27.438933-16.654308 16.654308-26.937512 39.680744-26.937512 64.908312v363.745444c0 25.457812 10.284227 48.483224 26.937512 65.389267 17.131169 16.905018 40.156582 27.188222 65.389267 27.188222h574.406328c25.232684 0 48.483224-10.283204 65.139579-27.188222 17.154705-16.906042 27.437909-39.931454 27.437909-65.389267v-363.744421c0-25.228591-10.283204-48.254004-27.437909-64.908312-16.657378-17.155728-39.907918-27.439956-65.140602-27.439956z"
          fill="#afafaf"
          p-id="14379"
        ></path>
        <path
          d="M400.75843 682.377412a21.904892 21.904892 0 0 1-21.906939-21.905916V365.628328a21.904892 21.904892 0 0 1 32.859385-18.97005l255.341502 147.421584a21.903869 21.903869 0 0 1 0 37.9401L411.711899 679.441547a21.903869 21.903869 0 0 1-10.953469 2.935865z m21.905916-278.806937v218.957851l189.623755-109.479437-189.623755-109.478414z"
          fill="#afafaf"
          p-id="14380"
        ></path>
      </svg>
      <svg
        t="1664863825641"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="30078"
        width="25"
        height="25"
      >
        <path
          d="M224 597.333333C183.466667 597.333333 149.333333 563.2 149.333333 522.666667S183.466667 448 224 448s74.666667 34.133333 74.666667 74.666667-32 74.666667-74.666667 74.666666zM512 597.333333c-40.533333 0-74.666667-34.133333-74.666667-74.666666S471.466667 448 512 448s74.666667 34.133333 74.666667 74.666667S554.666667 597.333333 512 597.333333zM800 597.333333c-40.533333 0-74.666667-34.133333-74.666667-74.666666s34.133333-74.666667 74.666667-74.666667 74.666667 34.133333 74.666667 74.666667-32 74.666667-74.666667 74.666666z"
          fill="#afafaf"
          p-id="30079"
        ></path>
      </svg>
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
  display: flex;
  justify-content: space-between;
  .sinfo {
    max-width: 70%;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0 10rem;
    }
  }

  .sinfo .ar-al {
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
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    
    margin: 8rem;
  }
}

.r {
  padding-right: 10rem;
  display: flex;
  align-items: center;
  position: relative;
}
</style>