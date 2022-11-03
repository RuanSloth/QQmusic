<template>
  <li class="home-card">
    <div class="contain-img">
      <img
        :src="`${item.picUrl}?imageView=1&type=webp&thumbnail=370x0`"
        alt=""
      />
      <span>
        <svg
          t="1663758353081"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6035"
          width="16"
          height="16"
        >
          <path
            d="M822.345143 512.365714a310.857143 310.857143 0 0 0-620.690286 0c15.140571-11.702857 33.938286-18.651429 54.345143-18.651428 50.724571 0 91.428571 42.971429 91.428571 95.451428v174.811429c0 52.48-40.704 95.451429-91.428571 95.451428s-91.428571-42.971429-91.428571-95.451428V530.285714a347.428571 347.428571 0 0 1 694.857142 0v233.691429c0 52.48-40.704 95.451429-91.428571 95.451428s-91.428571-42.971429-91.428571-95.451428v-174.811429c0-52.48 40.704-95.451429 91.428571-95.451428 20.406857 0 39.204571 6.948571 54.345143 18.651428zM310.857143 589.165714c0-32.731429-24.795429-58.88-54.857143-58.88s-54.857143 26.148571-54.857143 58.88v174.811429c0 32.731429 24.795429 58.88 54.857143 58.88s54.857143-26.148571 54.857143-58.88v-174.811429z m512 0c0-32.731429-24.795429-58.88-54.857143-58.88s-54.857143 26.148571-54.857143 58.88v174.811429c0 32.731429 24.795429 58.88 54.857143 58.88s54.857143-26.148571 54.857143-58.88v-174.811429z"
            p-id="6036"
            fill="#ffffff"
          ></path>
        </svg>
        {{ count }}万
      </span>
    </div>
    <h5>{{ item.name }}</h5>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    count() {
      return Math.floor(this.item.playCount / 1000) / 10;
    },
  },
};
</script>

<style lang="less" scoped>
li.home-card {
  flex-grow: 1;
  width: 100rem;
  margin-right: 10rem;
  margin-bottom: 10rem;
  h5 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-top: 10rem;
  }
}
.contain-img {
  position: relative;
  img {
    border-radius: 10rem;
  }
  span {
    position: absolute;
    display: flex;
    z-index: 2;
    bottom: -10rem;
    left: 0;
    color: #fff;
    padding: 5rem;
    border-radius: 25rem;
    background-color: #b3b48d;
  } 
 
    
  //    &:nth-of-type(2) {
  //     background-color: #b3b38f;
  //   }
  //   &:nth-of-type(3) {
  //     background-color: #b3948f;
  //   }
  //   &:nth-of-type(4) {
  //     background-color: #9b8fb3;
  //   }
  //   &:nth-of-type(5) {
  //     background-color: #808080;
  //   }
  //   &:nth-of-type(6) {
  //     background-color: #8fabb3;
  //   }
}
</style>