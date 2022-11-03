<template>
  <div class="item">
    <img :src="`${url}?imageView=1&type=webp&thumbnail=370x0`" alt="" />
    <div class="info">
      <h3>{{ name }}</h3>
      <h5>{{ text }}</h5>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    name: String,
    text: String,
  },
};
</script>

<style lang="less" scoped>
.item {
  margin: 0 10rem;
  padding: 10rem ;
  display: flex;
  align-items: center;
  
  background: #fff;
  border-radius: 10rem;
  img {
    width: 50rem;
    border-radius: 50%;
  }
  .info {
    margin-left: 15rem;
    font-size: 15rem;
    flex: 1;
    max-width: 250rem;
    h3 {
      overflow: hidden; /* 超出一行文字自动隐藏 */
      text-overflow: ellipsis; /*文字隐藏后添加省略号*/
      white-space: nowrap; /*强制不换行*/
    }
    h5 {
      overflow: hidden; /* 超出一行文字自动隐藏 */
      text-overflow: ellipsis; /*文字隐藏后添加省略号*/
      white-space: nowrap; /*强制不换行*/
      font-size: 12rem;
      color: #999;
    }
  }
  svg {
    margin-right: 8rem;
    margin-left: 10rem;
    flex-basis: 30rem;
  }
}
</style>