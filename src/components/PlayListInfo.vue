<template>
  <div
    class="play-list-info"
    :style="{ background: `url(${coverImg}?imageView&thumbnail=360y360&quality=75&tostatic=0)`, backgroundSize: 'cover' }"
  >
    <div class="coverAll"></div>

    <div class="box">
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
              fill="#ffffff"
            ></path>
          </svg>
        </div>
        <div class="center">歌单</div>
        <div class="right"></div>
      </div>
      <div class="center">
        <div class="cover">
          <div class="center">
            <img :src="coverImg+ '?imageView&thumbnail=360y360&quality=75&tostatic=0'" alt="" />

            <span class="count">
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
        </div>

        <div class="info">
          <p class="name">{{ pname }}</p>
          <div class="creator">
            <div class="contain">
              <img :src="creator.avatarUrl" alt="" />
            </div>
            <h5>
              {{ creator.nickname }}
            </h5>
          </div>
          <div class="text">简介: 抖音上超级热的中... &gt;</div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <svg
            t="1665795599268"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="15434"
            width="23"
            height="23"
          >
            <path
              d="M707.392 93.355c-77.264 0-149.104 38.759-196.389 102.673-47.258-63.929-119.083-102.673-196.389-102.673-139.281 0-252.596 123.888-252.596 276.181 0 90.853 40.585 154.588 73.209 205.797 94.816 148.743 333.217 333.849 343.314 341.653 9.727 7.52 21.1 11.282 32.447 11.282 11.373 0 22.73-3.761 32.447-11.282 10.11-7.804 248.524-192.91 343.313-341.653 32.64-51.209 73.238-114.944 73.238-205.797-0.001-152.292-113.316-276.181-252.596-276.181zM840.628 540.182c-90.254 141.629-329.64 326.614-329.64 326.614s-239.359-184.986-329.641-326.614c-33.296-52.287-63.11-101.983-63.11-170.647 0-118.568 87.912-214.725 196.376-214.725 80.155 0 148.967 52.588 179.494 127.875l0-0.375 0.082 0c2.274 7.851 8.905 13.575 16.798 13.575 7.921 0 14.552-5.723 16.812-13.575l0.232 0c30.597-75.062 99.313-127.499 179.359-127.499 108.438 0 196.376 96.157 196.376 214.725 0 68.663-29.816 118.359-63.14 170.647z"
              p-id="15435"
              fill="#fafafa"
            ></path>
          </svg>
          <span>91万</span>
        </div>
        <div class="center">
          <svg
            t="1665795675211"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="16599"
            width="24"
            height="24"
          >
            <path
              d="M622.56056 464.834794c0 27.928073 22.73684 50.64854 50.664913 50.64854 27.956725 0 50.693566-22.720468 50.693566-50.64854 0-27.928073-22.73684-50.66389-50.693566-50.66389C645.2974 414.171927 622.56056 436.907745 622.56056 464.834794"
              p-id="16600"
              fill="#fafafa"
            ></path>
            <path
              d="M931.254178 211.459063c0-40.637536-33.05893-73.698512-73.728188-73.698512L166.471964 137.76055c-40.637536 0-73.727165 33.059953-73.727165 73.698512l0 506.796488c0 40.637536 33.088606 73.696466 73.727165 73.696466l251.16846 0 94.343715 94.28641 94.315062-94.28641 251.226788 0c40.669258 0 73.728188-33.05893 73.728188-73.696466l0-82.560344-0.089028-1.282203L931.254178 211.459063zM875.96699 695.220928c0 22.88522-18.558681 41.444924-41.443901 41.444924L579.446623 736.665853l-67.462484 67.490114-67.430762-67.490114L189.506587 736.665853c-22.88522 0-41.4746-18.559705-41.4746-41.444924L148.031986 234.493685c0-22.88522 18.58938-41.488927 41.4746-41.488927l645.01548 0c22.88522 0 41.443901 18.603707 41.443901 41.488927l0 396.579247 0 36.161594L875.965967 695.220928z"
              p-id="16601"
              fill="#fafafa"
            ></path>
            <path
              d="M461.321272 464.834794c0 27.928073 22.735817 50.64854 50.662867 50.64854 27.929096 0 50.66389-22.720468 50.66389-50.64854 0-27.928073-22.734794-50.66389-50.66389-50.66389C484.057089 414.171927 461.321272 436.907745 461.321272 464.834794"
              p-id="16602"
              fill="#fafafa"
            ></path>
            <path
              d="M300.083008 464.834794c0 27.928073 22.735817 50.64854 50.66389 50.64854 27.927049 0 50.662867-22.720468 50.662867-50.64854 0-27.928073-22.735817-50.66389-50.662867-50.66389C322.817802 414.171927 300.083008 436.907745 300.083008 464.834794"
              p-id="16603"
              fill="#fafafa"
            ></path>
          </svg>
          <span>1418</span>
        </div>
        <div class="right">
       <svg t="1665796118833" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17983" width="23" height="23"><path d="M825.13 910.91H198.86c-47.3 0-85.78-38.48-85.78-85.78V198.87c0-47.3 38.48-85.78 85.78-85.78h413.05v63.41H198.86c-12.33 0-22.36 10.03-22.36 22.37v626.27c0 12.33 10.03 22.36 22.36 22.36h626.27c12.34 0 22.37-10.03 22.37-22.36V412.08h63.41v413.05c0 47.3-38.48 85.78-85.78 85.78z" p-id="17984" fill="#fafafa"></path><path d="M679.51 113.09v63.41h121.96L503.91 474.58l44.88 44.8L847.5 220.14v124.35h63.41v-231.4z" p-id="17985" fill="#fafafa"></path></svg>
          <span>分享</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coverImg: String,
    pname: String,
    creator: Object,
    playCount: Number,
  },
  computed: {
    count() {
      return Math.floor(this.playCount / 1000) / 10;
    },
  },
};
</script>

<style lang="less" scoped>
.play-list-info {
  width: 100%;
  position: relative;

  .box {
    position: relative;
    z-index: 3;
    height: 100%;
    width: 100%;
    background-position: 50%;
    backdrop-filter: blur(20rem);
    padding: 0 10rem 20rem;
    display: flex;
    flex-wrap: wrap;
    & > .top {
      padding: 15rem 0;
      padding-left: 5rem;
      flex-basis: 100%;
      display: flex;
      .center {
        color: #fff;
        flex: 1;
        font-size: 17rem;
        text-align: center;
      }
      .left,
      .right {
        flex-basis: 50rem;
      }
    }
    & > .center {
      position: relative;
      display: flex;
          align-items: center;
      .cover {
        flex-shrink: 0;
        position: relative;
        border-radius: 19rem;
        box-shadow: 11px 0px 0px -5px #9e9e9e80;
        .center{
          position: relative;
        }
        img {
          width: 100rem;
          height: auto;
          border-radius: 5rem;
        }
        span.count {
          position: absolute;
          display: flex;
          z-index: 2;
          bottom: 5rem;
          left: 5rem;
          color: #fafafa;
          font-size: 12rem;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        margin-left: 15rem;
        p.name {
          font-size: 16rem;
          color: #fff;
          padding-bottom: 20rem;
        }
        .creator {
          display: flex;
          .contain {
            position: relative;
            img {
              width: 30rem;
              border-radius: 50%;
              margin-right: 5rem;
            }
            .icon {
              background-image: url(../assets/jl2.png);
              width: 12rem;
              height: 12rem;
              border-radius: 50%;
              position: absolute;
              bottom: 0;
              right: 0;
              background-size: 75px auto;
              background-position: -40rem 0;
            }
          }

          h5 {
            font-size: 14rem;
            line-height: 30rem;
            color: hsla(0, 0%, 100%, 0.7);
          }
        }
        .text {
          font-size: 14rem;
          line-height: 30rem;
          color: hsla(0, 0%, 100%, 0.7);
        }
      }
    }
    .bottom {
      padding-top: 10rem;
      display: flex;
      justify-content: space-around;
      flex-basis: 100%;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          padding-left: 5rem;
          color: #fff;
        }

        flex-basis: 100rem;
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