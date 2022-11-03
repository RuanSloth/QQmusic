<template>
  <div class="now">
    <div class="top">
      <div class="left">播放队列({{ list?list.length: 0 }})</div>
      <div class="right" @click="$emit('update-list',[])">
        <svg
          t="1664911034658"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="36439"
          width="20"
          height="20"
        >
          <path
            d="M561.1008 708.4544V413.7984c0-47.1552 49.1008-47.1552 49.1008 0v294.7072c0.0512 34.0992-49.1008 38.656-49.1008-0.0512z m-147.3024 0V413.7984c0-47.1552 49.1008-47.1552 49.1008 0v294.7072c0 38.656-49.1008 34.0992-49.1008-0.0512z m442.0096-442.0096h-147.3536v-49.152c0-71.7312-22.9888-98.2528-98.2528-98.2528H413.7984c-74.0352 0-98.2528 24.1664-98.2528 98.2528v49.152H168.192c-53.0944 0-53.0944 49.1008 0 49.1008h687.616c53.0944 0 53.0944-49.1008 0-49.1008z m-491.1616-49.152c0-47.6672 2.9696-49.1008 49.1008-49.1008h196.4544c46.08 0 49.1008 1.1264 49.1008 49.1008v49.152H364.6464v-49.152z m343.9104 687.616H315.5456c-70.9632 0-98.2528-27.2384-98.2528-98.2528V413.7984c0-49.6128 49.1008-49.6128 49.1008 0v392.9088c0 47.7184-0.1024 49.152 49.1008 49.152h392.9088c47.7184 0 49.1008 0.1536 49.1008-49.152V413.7984c0-48.4864 49.1008-48.4864 49.1008 0v392.9088c0.1024 69.4272-23.9616 98.2016-98.048 98.2016z"
            fill="#bababa"
            p-id="36440"
          ></path>
        </svg>
      </div>
    </div>
    <div class="fill"></div>
    <ul class="main">
      <li
        v-for="item in list"
        :key="item.id"
        :class="{ active: item.id === songId }"
         @click="
          $emit('update-song', {
            song: item,
            songList: list,
          })
        "
      >
        <div class="left">
          <span class="sname">
            {{ item.name }}
          </span>
          <img
            v-if="item.song?.sqMusic ? item.song.sqMusic != null : false"
            src="@/assets/imgs/2D.png"
            style="width: 20rem"
            alt=""
          />
          <span class="sinfo">-{{ item?.song?.artists[0].name}}</span>
          <svg
            v-if="item.id === songId"
            t="1664911928066"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="44827"
            width="15"
            height="15"
          >
            <path
              d="M896 1024a64 64 0 0 1-64-64V448a64 64 0 0 1 128 0v512a64 64 0 0 1-64 64z m-256 0a64 64 0 0 1-64-64V64a64 64 0 0 1 128 0v896a64 64 0 0 1-64 64z m-256 0a64 64 0 0 1-64-64v-256a64 64 0 0 1 128 0v256a64 64 0 0 1-64 64z m-256 0a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v640a64 64 0 0 1-64 64z"
              fill="#22d59d"
              p-id="44828"
            ></path>
          </svg>
        </div>
        <div class="right" @click="updateList(item)">
          <svg
            t="1664915182599"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="45942"
            width="15"
            height="15"
          >
            <path
              d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"
              p-id="45943"
              fill="#bababa"
            ></path>
          </svg>
        </div>
      </li>
    </ul>
    <div class="close" @click="$emit('close-play-list')">
        关闭
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    songId: Number,
  },
  data() {
    return {
      property: "value",
    };
  },
  methods: {
    getSinfo(item) {
      return item?.song?.artists?.map((n) => n.name).join("/");
    },
    updateList(item){
        let tmp = this.list.filter((o)=> o.id !== item.id)
        this.$emit('update-list',tmp)
    }
  },
};
</script>

<style lang="less" scoped>
.now {
  overscroll-behavior: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top-left-radius: 10rem;
  border-top-right-radius: 10rem;
  left: 0;
  max-height: 70vh;
  z-index: 1000;
  background-color: #fafafa;
  overflow: auto;

  .top {
    border-top-left-radius: 10rem;
    border-top-right-radius: 10rem;
    background-color: #fafafa;
    position: fixed;
    width: 100%;
    padding: 15rem 15rem;
    display: flex;
    justify-content: space-between;
    border-bottom: #dadada 1rem solid;
    .left {
      color: #bababa;
    }
  }
  .fill {
    width: 100%;
    height: 50rem;
  }
  .main {
    border-bottom: #dadada 1rem solid;
    padding: 20rem 15rem;
    li {
      padding-bottom: 30rem;
      display: flex;
      justify-content: space-between;
      &:nth-last-of-type(1) {
        padding-bottom: 0;
      }
        &.active {
        color: #22d59d;
        .left{
                 .sname {
          color: #22d59d;
        }

        .sinfo {
          color: #22d59d;
          margin-right: 5rem;
        }
        svg{
            position: relative;
            top: 2rem;
        }
        }
   
      }
      .left{
         .sname {
        font-size: 15rem;
        color: #000;
        padding-right: 5rem;
      }
      img {
        width: 30rem;
        padding-right: 5rem;
      }
      .sinfo {
        color: #bababa;
        font-size: 13rem;
      }
    
      }
        .right{

        }
    }
  }

  .close{
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15rem 0;
    font-size: 16rem;
  }
}
</style>