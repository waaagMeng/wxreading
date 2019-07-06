<template>
  <div class="find">
    <!-- 头部搜索 -->
    <div class="header-search">
      <div class="title">发现</div>
      <!-- 搜索框 -->
      <v-search-box  ref="searchBox"></v-search-box>
    </div>
    <v-scroll></v-scroll>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
export default {
  components: {
    'v-search-box': searchBox,
    'v-scroll': scroll
  },
  methods: {
   
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function'
.header-search
  display flex
  justify-content space-around
  .title
    font-size 28px
    line-height 28px
    display flex
    align-items center
    

</style>
