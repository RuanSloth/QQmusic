<template>
  <div>
    <div class="top" v-if="preSearchs.length > 0">
      <h3>搜索历史</h3>
      <svg
        t="1664911034658"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="36439"
        width="20"
        height="20"
        @click="$emit('clean-previous')"
      >
        <path
          d="M561.1008 708.4544V413.7984c0-47.1552 49.1008-47.1552 49.1008 0v294.7072c0.0512 34.0992-49.1008 38.656-49.1008-0.0512z m-147.3024 0V413.7984c0-47.1552 49.1008-47.1552 49.1008 0v294.7072c0 38.656-49.1008 34.0992-49.1008-0.0512z m442.0096-442.0096h-147.3536v-49.152c0-71.7312-22.9888-98.2528-98.2528-98.2528H413.7984c-74.0352 0-98.2528 24.1664-98.2528 98.2528v49.152H168.192c-53.0944 0-53.0944 49.1008 0 49.1008h687.616c53.0944 0 53.0944-49.1008 0-49.1008z m-491.1616-49.152c0-47.6672 2.9696-49.1008 49.1008-49.1008h196.4544c46.08 0 49.1008 1.1264 49.1008 49.1008v49.152H364.6464v-49.152z m343.9104 687.616H315.5456c-70.9632 0-98.2528-27.2384-98.2528-98.2528V413.7984c0-49.6128 49.1008-49.6128 49.1008 0v392.9088c0 47.7184-0.1024 49.152 49.1008 49.152h392.9088c47.7184 0 49.1008 0.1536 49.1008-49.152V413.7984c0-48.4864 49.1008-48.4864 49.1008 0v392.9088c0.1024 69.4272-23.9616 98.2016-98.048 98.2016z"
          fill="#bababa"
          p-id="36440"
        ></path>
      </svg>
    </div>
    <previous-search
      :preSearchs="preSearchs"
      @to-search="$emit('to-search', $event)"
      @delete-pre="$emit('delete-pre', $event)"
    ></previous-search>

    <search-hot
      @to-search="$emit('to-search', $event)"
      :hotSearchs="hotSearchs"
    ></search-hot>
  </div>
</template>

<script>
import PreviousSearch from "./PreviousSearch.vue";
import SearchHot from "./SearchHot.vue";
export default {
  components: { SearchHot, PreviousSearch },
  props: {
    hotSearchs: Array,
    preSearchs: Array,
  },
};
</script>

<style lang="less" scoped>
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
  font-size: 15rem;
  margin-left: 10rem;
  font-weight: 600;

  padding: 10rem 0;
}
svg{
  margin-right: 15rem;
}
}

</style>