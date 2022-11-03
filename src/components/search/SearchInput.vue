<template>
  <div class="s-input">
    <div class="contain">
      <svg
        t="1663751679776"
        width="18rem"
        height="18rem"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4778"
      >
        <path
          d="M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"
          p-id="4779"
          fill="#c9c9c9"
        ></path>
      </svg>
      <input
        type="text"
        placeholder="搜索你想找的音乐"
        :value="inputNow"
        @input="$emit('change-input', $event.target.value)"
        @keyup.enter="$emit('to-search')"
      />
      <span @click="$router.go(-1)">取消</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotSearchs: Array,
    inputNow: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.s-input {
  padding: 0rem 10rem 10rem;
  background: #fff;
  .contain {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
      top: 5rem;
      &:nth-of-type(1) {
        left: 8rem;
      }
    }

    span {
      min-width: 50rem;
      text-align: center;
      font-weight: 600;
      font-size: 15rem;
    }
    input {
      width: 100%;
      height: 30rem;
      background: #ebecec;
      border-radius: 30px;
      border: 0;
      font-size: 14rem;
      padding: 0 30rem;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>