<template>
  <div class="find">
    <!-- 头部搜索 -->
    <div class="header-search">
      <h1>发现</h1>
      <!-- 搜索框 -->
      <v-search-box @query="onQueryChange" ref="searchBox"></v-search-box>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
export default {
  components: {
    'v-search-box': searchBox
  }
}
</script>

<style>

</style>
