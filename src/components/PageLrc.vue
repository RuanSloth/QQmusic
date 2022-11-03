<template>
  <div @mousemove="move($event)" class="alllrc" ref="all" :style="{top: -lrcn* 48+'rem'}">
    <p v-for="(i, index) in lrc" :key="index" :class="{high: index===lrcn+5 }">{{ i.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    duration: Number,
    currentTime: Number,
    lrc: Array,
  },
  data() {
    return {
      n: 0,
    };
  },
  computed: {
    lrcn() {
      return (
        this.lrc.map((o) => o.time).findIndex((e) => e > this.currentTime) - 6
      );
    },
  },
  methods: {
    move(e) {
      console.log(e);
    },
  },
  watch: {
    lrcn() {
      

      }

    },
  
};
</script>

<style lang="less" scoped>
.alllrc {
  position: relative;
  top: 0;
  
  p {
    color: #8e8e8e;
    padding-bottom: 25rem;
    font-size: 17rem;

&.high{
 
    font-size: 20rem;
    color: #fff;
  
}
  }
}
</style>