<template>
  <div :class="{ red: three }" class="list">
    <div class="item" v-for="(item, index) in songs" :key="item.id">
      <div class="song-cd">
        {{ (index + 1 + "").padStart(2, "0") }}
      </div>
      
      <search-item
        class="song-item"
        :song="item.name"
        :sqMusic="item.sq"
        :artists="item.ar"
        :album="item.al.name"
        @click.native="$emit('update-song', song)"
        :nowId="songId"
        :songId="song.id"
        :playing="playing"
        @song-play="$emit('song-play')"
      ></search-item>
    </div>
  </div>
</template>

<script>
import SearchItem from '@/components/SearchItem.vue'
export default {
  components: { SearchItem },
  name: "SongList",
  props: {
    songs: Array,
    three: Boolean,
    songId: [Number, String],
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.list {
  .item {
    display: flex;
    .song-cd {
      flex-basis: 40rem;
      font-size: 16rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .song-item {
      flex: 1;
    }
  }
  &.red {
    .item:nth-of-type(-n + 3) {
      .song-cd {
        color: #df3436;
      }
    }
  }
}
</style>