<template>
    <div class="search-box" @click="jump">
        <i class="icon icon-search">&#xe638;</i>
        <div type="text" ref="query" class="box" >
            搜索
        </div>
    </div>
</template>

<script>
import { debounce } from '@/common/util'
export default {
    data () {
        return {
           
        }
    },
    methods: {
        jump () {
             this.$router.push('/search')   
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.search-box 
  display flex
  align-items center
  box-sizing border-box
  width 70%
  padding 0 px2rem(8px)
  height px2rem(90px)
  background #ffffff
  border-radius px2rem(50px)
  
  .icon-search 
    position relative
    left px2rem(200px)
    top px2rem(-5px)
    font-size 24px
    color #6b6a6a
  .box 
    text-align center
    flex 1
    margin 0 5px
    line-height px2rem(36px)
    background #fff
    color #6b6a6a
    font-size 16px
    outline 0
    &:placeholder 
      color hsla(0, 0%, 100%, 0.3)
//   .icon-dismiss 
//     font-size 20px
//     margin-right px2rem(10px)
//     color #6b6a6a

</style>
