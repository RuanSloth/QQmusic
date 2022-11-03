<template>
  <ul>
    <li v-for="(item, index) in preSearchs" :key="index">
   
      <p @click="$emit('to-search', item)">{{ item }}</p>
      
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    preSearchs: Array,
  },
};
</script>

<style lang="less" scoped>
ul{
  display: flex;
  flex-wrap: wrap;
  background-color: #fafafa;
  li {
    margin-bottom: 10rem;
  display: flex;
  margin-left: 10rem;

  align-items: center;
  position: relative;
  border-radius: 20rem;
  padding: 10rem;
  background-color: #fff;
  p {
    font-size: 14rem;
    line-height: 21rem;
 

    flex-grow: 1;

  }
}
}

</style>