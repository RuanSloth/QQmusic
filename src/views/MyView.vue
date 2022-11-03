<template>
  <div class="my">
    <div class="head">
      <div class="log-in">立即登录</div>
      <p>畅享前往曲库歌曲</p>
    </div>
    <div class="list">
      <div class="list-item">
        <img src="../assets/imgs/HH.webp" alt="" />
        <span>我喜欢</span>
      </div>
      <div class="list-item">
        <img src="../assets/imgs/7o.webp" alt="" />
        <span>最近播放</span>
      </div>
      <div class="list-item">
        <img src="../assets/imgs/0I.webp" alt="" />
        <span>本地音乐</span>
      </div>
      <div class="list-item">
        <img src="../assets/imgs/6e.webp" alt="" />
        <span>已购</span>
      </div>
    </div>

    <h5>自建歌单</h5>
    <div class="my-list">
      <div class="my-list-item">
        <div class="left">
          <svg
            t="1664781736101"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8130"
            width="20"
            height="20"
          >
            <path
              d="M874.666667 469.333333H554.666667V149.333333c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666667 42.666666v320H149.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667s19.2 42.666667 42.666666 42.666667h320v320c0 23.466667 19.2 42.666667 42.666667 42.666666s42.666667-19.2 42.666667-42.666666V554.666667h320c23.466667 0 42.666667-19.2 42.666666-42.666667s-19.2-42.666667-42.666666-42.666667z"
              p-id="8131"
              fill="#22d59d"
            ></path>
          </svg>
        </div>
        <div class="text">新建歌单</div>
      </div>
      <div class="my-list-item">
        <div class="left">
            <img src="../assets/imgs/W1.png" alt="">
        </div>
        <div class="text">导入外部歌单</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.my {
  height: 100vh;
}
.head {
  padding: 50rem 35rem 25rem;
  margin: 0 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1rem #ddd6d6;
  .log-in {
    display: flex;
    padding: 5rem 50rem;
    background: #22d59d;
    color: #fafafa;
    border-radius: 10rem;
  }
  p {
    padding: 5rem;
    color: #8e8e8e;
  }
}
.list {
  display: flex;
  padding: 25rem 30rem 50rem;
  justify-content: space-around;
  .list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 35rem;
    }
    span {
      font-weight: 600;
      font-size: 15rem;
    }
  }
}
h5 {
  font-size: 15rem;
  font-weight: 600;
  padding-left: 15rem;
}

.my-list {
    display: flex;
    flex-direction: column;
    padding-left: 15rem;
    padding-top: 15rem;
    .my-list-item{
        padding-bottom: 10rem;
        align-items: center;
        display: flex;
         &:nth-of-type(2){
            .left{

                padding: 15rem;
            }
            }
        .left{
            border-radius: 10rem;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20rem;
            
            img{
                width: 30rem;
            }
            &:nth-of-type(2){
                padding: 10rem;
            }
        }
        .text{
            font-size: 17rem;
            padding: 10rem;
        }
    }
}
</style>