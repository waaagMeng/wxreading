<template>
    <!-- 底部tab栏 -->
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/musicHall">
        <slot name="left-icon"></slot>
        <span class="tab-link">音乐馆</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/find">
        <slot name="conten-icon"></slot>
        <span class="tab-link">发现</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/mine">
        <slot name="right-icon"></slot>
        <span class="tab-link">我的</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'tab'
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.tab 
  display flex
  height px2rem(88px)
  line-height px2rem(88px)
  font-size 14px
  position fixed
  bottom 0px
  left 0px
  right 0px
  &-item 
    flex 1
    text-align center
    .tab-link
      padding-bottom 5px
      color #aaa
    &.active
      .tab-item
        color #ea2448
        border-bottom 2px solid #ea2448
</style>
