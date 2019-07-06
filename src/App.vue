<template>
  <div id="app">
    <!-- tab -->
    <tab>
      <!-- <i slot="left-icon" class="icon">&#xe911;</i> -->
      <!-- <i slot="conten-icon" class="icon">&#xe692;</i> -->
      <!-- <i slot="right-icon" class="icon">&#xe692;</i> -->
    </tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import tab from '@/components/tab'
export default {
  name: 'App',
  components: {
    tab
  }
}
</script>

<style lang="stylus">
@import "./assets/css/function"
@font-face 
  font-family "icon"
  /* project id 277165 */
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot ");
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix ") format("embedded-opentype"),
      url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
      url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
      url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg");
.icon
  font-family "icon" !important
  font-size 18px
  font-style normal
  color #aaa
html,body 
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparentify  //点击屏幕高亮
  background #F0F0F0
</style>

