<template>
      <svg
    v-if="bool"
    :width="size + 'rem'"
    :height="size + 'rem'"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="
      margin: auto;
      background: #fafafa;
      display: block;
      shape-rendering: auto;
      animation-play-state: running;
      animation-delay: 0s;
    "
    :style="{marginTop:mtop+'rem'}"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      r="32"
      stroke-width="8"
      stroke="#22d59d"
      stroke-dasharray="50.26548245743669 50.26548245743669"
      fill="none"
      stroke-linecap="round"
      style="animation-play-state: running; animation-delay: 0s"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
        style="animation-play-state: running; animation-delay: 0s"
      ></animateTransform>
    </circle>
  </svg>


</template>

<script>
export default {
  props: {
    bool: Boolean,
    size: Number,
    mtop:Number,
  },
};
</script>

<style lang="less" scoped>
</style>