<template>
  <div>
    <h3>热门搜索</h3>
    <ul class="s-list">
      <li
        v-for="(item, index) in hotSearchs"
        :key="index"
        @click="$emit('to-search', item.first)"
      >
        <div class="left">
          {{ index+1 }}
        </div>
        <div class="right">
          <p class="content">{{ item.first }}</p>
          <p>正在热搜</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    hotSearchs: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
h3 {
  font-size: 15rem;
  margin-left: 10rem;
  font-weight: 600;

  padding: 10rem 0;
}
.s-list {
  padding: 0 8rem;
  margin-bottom: 7rem;
  display: flex;
  flex-wrap: wrap;
  
  li {
    min-width: 150rem;
    flex-grow: 1;  
    display: flex;
       max-width: 50%;
        padding: 20rem 14rem;
    font-size: 14px;
    
    color: #333;
    align-items: center;
    border-radius: 16rem;

    .left{
      font-size: 15rem;
      flex-basis: 30rem;
    }
    .right{
      display: flex;
      flex-direction: column;
      p{
        &:nth-of-type(1){
          padding: 5rem 0;
          font-weight: 600;
          font-size: 15rem;
        }
        &:nth-of-type(2){
          font-size: 13rem;
          color: #8e8e8e;
        }
      }
    }

    &:nth-of-type(1),    &:nth-of-type(3),    &:nth-of-type(2){
      .left{
       color: red;
      }
    }
  }

}
</style>