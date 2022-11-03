<template>
  <div
    class="album-info"
    :style="{ background: `url(${info.img})`, backgroundSize: 'cover' }"
  >
    <div class="coverAll"></div>
    <div class="box">
      <div class="cover">
        <img :src="info.img" alt="" />
        <span class="text">专辑</span>
      </div>
      <div class="info">
        <p class="alname">{{ info.alname }}</p>
        <div class="arname">歌手:<span>   {{ " " + info.arname }}</span></div>
        <div class="time">发行时间:&nbsp;2022-09-25</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style lang="less" scoped>
.album-info {
  width: 100%;
  position: relative;

  .box {
    position: relative;
    z-index: 3;
    height: 100%;
    width: 100%;
    background-position: 50%;
    backdrop-filter: blur(20rem);
    padding: 30rem 10rem;
    display: flex;
    .cover {
      flex-shrink: 0;
      position: relative;
      img {
        width: 126rem;
        height: auto;
      }
      span.text {
        position: absolute;
        z-index: 2;
        top: 10px;
        left: 0;
        padding: 0 8px;
        height: 17px;
        color: #fff;
        font-size: 9px;
        text-align: center;
        line-height: 17px;
        background-color: rgba(217, 48, 48, 0.8);
        border-top-right-radius: 17px;
        border-bottom-right-radius: 17px;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      margin-left: 20rem;
      p.alname {
        font-size: 17rem;
        color: #fff;
        padding: 10rem 0;
      }
      div {
        color: rgb(196, 195, 195);
        padding: 5rem 0;
        &.arname {
            font-size: 14rem;
            span{
        color: #fff;

            }
        }
        &.time{
            font-size: 12rem;
        }
        
      }
    }
  }
  .coverAll {
    top: 0;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>