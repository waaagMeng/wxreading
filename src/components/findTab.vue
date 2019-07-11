<template>
    <!-- 底部tab栏 -->
    <div class="findtab">
      <div class="tab">
        <router-link tag="div" class="tab-item" to="/recommends">
        <slot name="left-icon"></slot>
        <span class="tab-link">推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/video">
        <slot name="conten-icon"></slot>
        <span class="tab-link">视频</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/artical">
        <slot name="right-icon"></slot>
        <span class="tab-link">文章</span>
        </router-link>

        
          <!-- <router-view></router-view> -->
        
      </div>
    </div>
</template>

<script>
export default {
    name: 'findtab'
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.findtab
  position relative
  .tab 
    display flex
    height px2rem(88px)
    line-height px2rem(88px)
    font-size 16px
    position sticky
    top 0px
    left 0px
    width px2rem(350px)
    
    &-item 
      flex 1
      text-align center
      .tab-link
        padding-top 5px
        padding-bottom 5px
        color #aaa
      &.active
        .tab-item
          color #ea2448
          border-bottom 2px solid #ea2448
</style>
