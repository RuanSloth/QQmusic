<template>
  <div class="control" ref="control">
    <div class="left" @click="$emit('show-page')">
      <div class="contain">
        <img
          :src="
            song?.picUrl
              ? song?.picUrl +
                '?imageView&thumbnail=360y360&quality=75&tostatic=0'
              : song.al.picUrl +
                '?imageView&thumbnail=360y360&quality=75&tostatic=0'
          "
          :class="{ playing: playing }"
          alt=""
        />
        <img src="../assets/imgs/QE.png" alt="" />
      </div>
      <div class="text">{{ song?.name }}</div>
    </div>
    <div class="right">
      <div
        class="contain play"
        v-if="!playing"
        @click.stop="$emit('song-play')"
      >
        <svg
          t="1664797762734"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="20524"
          width="28"
          height="28"
        >
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
            p-id="20525"
            fill="#FFFFFF"
          ></path>
          <path
            d="M719.4 499.1l-296.1-215c-10.6-7.7-25.3-0.2-25.3 12.9v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215c8.8-6.4 8.8-19.4 0-25.8z m-257.6 134V390.9L628.5 512 461.8 633.1z"
            p-id="20526"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
      <div
        class="contain pause"
        v-if="playing"
        @click.stop="$emit('song-pause')"
      >
        <svg
          t="1664797596023"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="19300"
          width="25"
          height="25"
        >
          <path
            d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0zM512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96s416 186.24 416 416S741.76 928 512 928zM320 320 448 320 448 704 320 704zM576 320 704 320 704 704 576 704z"
            p-id="19301"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <canvas ref="canvas"></canvas>
      <svg
        @click.stop="$emit('show-list')"
        t="1664797952231"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="20852"
        width="35"
        height="35"
      >
        <path
          d="M717.12 394.88v12.592h-0.32v218.656h-48v-48h0.32V397.616a11.248 11.248 0 0 1-0.08-1.28v-36.864h48v34.752l0.08 0.64zM648.528 748.8h-68.256a85.328 85.328 0 1 1 0-170.672h88.848V397.616a11.248 11.248 0 0 1-0.08-1.28V336a48 48 0 0 1 48-48h71.232a48 48 0 0 1 48 48v23.472a48 48 0 0 1-48 48H716.8v273.056a68.272 68.272 0 0 1-68.272 68.272z m-67.2-122.704a37.344 37.344 0 0 0 0 74.688h71.504a16 16 0 0 0 16-16V626.08h-87.488zM716.912 336v23.568h71.36V336h-71.36z m-529.76-48H580.88c6.16 0 11.136 4.976 11.136 11.136v25.728A11.136 11.136 0 0 1 580.88 336H187.136A11.136 11.136 0 0 1 176 324.864v-25.728c0-6.16 4.976-11.136 11.136-11.136zM580.88 464c-15.84 0-29.328 9.984-34.56 24 5.232 14.016 18.72 24 34.56 24H187.136c15.84 0 29.328-9.984 34.56-24a36.88 36.88 0 0 0-34.56-24h393.728z m-393.728 0H580.88c6.16 0 11.136 4.976 11.136 11.136v25.728A11.136 11.136 0 0 1 580.88 512H187.136A11.136 11.136 0 0 1 176 500.864v-25.728c0-6.16 4.976-11.136 11.136-11.136z m0 192H404.88c6.16 0 11.136 4.976 11.136 11.136v25.728A11.136 11.136 0 0 1 404.88 704H187.136A11.136 11.136 0 0 1 176 692.864v-25.728c0-6.16 4.976-11.136 11.136-11.136z"
          p-id="20853"
          fill="#ffffff"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
  },
  mounted() {
    // console.log(this.currentTime);
    // console.log(this.duration);

    this.barcontrol = (this.currentTime / this.duration).toFixed(2) * 2;
    this.initCancas(this.barcontrol, 25);
  },
  watch: {
    currentTime() {
      //  获取play按钮大小,包含小数位

      this.barcontrol = (this.currentTime / this.duration).toFixed(2) * 2;
      this.initCancas(this.barcontrol, 25);
      // console.log(this.barcontrol, size)
    },
  },
  methods: {
    //  val 进度条参数  size  设置画布大小
    initCancas(val, size) {
      let canvas = this.$refs.canvas;
      // let w = this.$refs.playbarpic.offsetWidth;
      // let h = this.$refs.playbarpic.offsetHeight;
      //  初始画布宽高(小数位忽略)
      canvas.width = size;
      canvas.height = size;
      let bar = canvas.getContext("2d");
      //  画布线条颜色
      bar.strokeStyle = "#fff";
      //  线宽  保持和边框大小一样
      bar.lineWidth = size / 5;
      bar.beginPath();
      //  arc(x,y,半径,初始位置[0为3点钟位置],结束位置[0-2π],[false 顺时针,true 逆时针])
      bar.arc(size / 2, size / 2, size / 2 - size / 20, 0, val * Math.PI);
      // bar.lineCap = "round";
      bar.stroke();
      bar.closePath();
    },
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
.control {
  width: 95vw;
  height: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #c2a5a5;
  position: fixed;
  bottom: 16rem;
  border-radius: 0 50rem 50rem;
  z-index: 100;

  .left {
    flex: 1;
    display: flex;
    align-items: center;
    color: #efefef;
    font-size: 14rem;

    .contain {
      border-radius: 50%;
      padding: 5rem;

      img {
        width: 50rem;

        position: relative;
        border-radius: 10rem;
        box-sizing: content-box;

        animation-play-state: paused;
        &.playing {
          animation-play-state: running;
        }
        &:nth-of-type(1) {
          z-index: 100;
          box-shadow: 2px 5px 12px 0 #7e7c7c;
        }
        &:nth-of-type(2) {
          position: absolute;
          left: 17rem;
          width: 45rem;
          z-index: 5;
        }
      }
    }
    .text {
      flex-basis: 100rem;
      flex-grow: 1;
      text-align: center;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
    }
  }
  .right {
    position: relative;
    width: 100rem;
    display: flex;
    align-items: center;
    .contain {
      padding: 5rem 10rem;
      &.pause {
        padding: 5rem 11.5rem;
      }
    }
  }
  canvas {
    transform: rotate(-90deg);
    position: absolute;
    left: 14rem;
    width: 20rem;
    height: 20rem;
    top: 8.5rem;
    pointer-events: none;
  }
}
</style>