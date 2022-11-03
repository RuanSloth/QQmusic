<template>
  <div>
    <!-- 动态绑定input 获得焦点时触发防抖 传回修改 搜索事件-->
    <search-input
      :inputNow="input"
      @change-input="changeInput($event)"
      @focus.native="debouncedGetSearchSuggests(input)"
      @to-search="toSearch(input)"
      
    ></search-input>
    <!-- 传入等待状态 决定是否展示 -->
    <loading-svg :bool="loading" :size="50" :mtop="50"></loading-svg>
    <!-- 如果输入为空 且不在等待状态 展示
      传入 热门搜索和以前搜索
      传回搜索和删除事件
    -->
    <search-home
      @clean-previous="preSearchs = []"
      v-if="!input && !loading"
      :hotSearchs="hotSearchs"
      :preSearchs="preSearchs"
      @to-search="toSearch($event)"
      @delete-pre="deletePreSearch($event)"
    ></search-home>
    <!-- 如果输入不为空 不在等待状态 有搜索结果 已经确定搜索 -->
    <!-- <p v-if="input && !loading && !searchRes.length && !boolSearch" @click="toSearch(input)">
      搜索"{{ input }}"
    </p> -->
    <search-suggest
      v-if="input && !loading && !searchRes.length && !boolSearch"
      :suggests="suggests"
      @to-search="toSearch($event)"
    ></search-suggest>
    <!-- 如果有搜索结果  -->
    <search-result
      v-if="searchRes.length"
      :searchRes="searchRes"
      :bestRes="bestRes"
      :playing="playing"
      @update-song="
        $emit('update-song', {
          song: $event.song,
          songList: $event.songList,
        })
      "
      @song-pause="$emit('song-pause')"
    >
      >
    </search-result>
  </div>
</template>

<script>
import SearchInput from "../components/search/SearchInput.vue";
import SearchHome from "../components/search/SearchHome.vue";
import LoadingSvg from "../components/LoadingSvg.vue";
import SearchSuggest from "../components/search/SearchSuggest.vue";
import SearchResult from "../components/search/SearchResult.vue";

var _ = require("lodash");
export default {
  components: {
    SearchInput,
    SearchHome,
    LoadingSvg,
    SearchSuggest,
    SearchResult,
  },
  props: {
    playing: Boolean,
  },
  data() {
    return {
      hotSearchs: [],
      input: "",
      suggests: [],
      preSearchs: JSON.parse(localStorage.getItem("preSearchs")) || [],
      loading: false,

      searchRes: [],
      bestRes: [],

      // 是否确认搜索
      boolSearch: false,
    };
  },

  created() {
    this.axios.get("https://apis.netstart.cn/music/search/hot").then((res) => {
      this.hotSearchs = [...res.data.result.hots];
    });

    this.debouncedGetSearchSuggests = _.debounce(this.toSearchSuggests, 600);
  },

  methods: {
    changeInput(e) {
      this.input = e;
      this.boolSearch = false;
    },
    deletePreSearch(item) {
      this.preSearchs.splice(this.preSearchs.indexOf(item), 1);
    },
    toSearch(params) {
      this.loading = true;
      this.boolSearch = true;
      this.input = params;
      // 利用set去重,并且把新元素放在第一位
      this.preSearchs = [...new Set([params, ...this.preSearchs])];
      new Set();
      Promise.all([
        this.axios.get("https://apis.netstart.cn/music/cloudsearch", {
          params: {
            keywords: params,
          },
        }),
        this.axios.get("https://apis.netstart.cn/music/search/multimatch", {
          params: {
            keywords: params,
          },
        }),
      ]).then(([m, n]) => {
        this.loading = false;
        this.searchRes = [...m.data.result.songs];
        this.bestRes = { ...n.data.result };
        this.input = params;
      });
    },
    toSearchSuggests(newInput) {
      this.axios
        .get("https://apis.netstart.cn/music/search/suggest", {
          params: { keywords: newInput },
        })
        .then((res) => {
          this.suggests = res.data.result.songs;
          this.loading = false;
        });
    },
  },

  watch: {
    input(newInput) {
      // 如果新值不为空 且未确认搜索
      if (newInput && !this.boolSearch) {
        this.loading = true;
        this.debouncedGetSearchSuggests(newInput);
      } else if (this.boolSearch) {
        // 确认搜索的话
        return null;
      } else {
        this.searchRes = [];
        this.bestRes = {};
        this.suggests = [];
        this.loading = false;
      }
    },
    preSearchs(newPre) {
      localStorage.setItem("preSearchs", JSON.stringify(newPre));
    },
  },
};
</script>

<style lang="less" scoped>
.s-input {
  padding: 15rem 10rem;

  .contain {
    position: relative;
    svg {
      position: absolute;
      top: 5rem;
      left: 8rem;
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
h3 {
  font-size: 12rem;
  margin-left: 10rem;
  padding: 10rem 0;
}
p {
  padding-left: 10rem;
  border-bottom: #ebecec solid 1rem;
  line-height: 50rem;
  font-size: 14rem;
  color: #507daf;
}
.s-list {
  padding: 0 8rem;
  margin-bottom: 7rem;
}
</style>