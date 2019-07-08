<template>
  <div class="lateral-sliding">
    <div class="lateral-sliding-item" v-for="(item,index) in items" :key="index">
      <img :src="item.image" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          image:require('../assets/image/zz.jpg')
        },
        {
          image:require('../assets/image/aa.jpg')
        },
        {
          image:require('../assets/image/bb.jpg')
        },
        {
          image:require('../assets/image/pcl.jpg')
        },
        {
          image:require('../assets/image/hh.jpg')
        },
        {
          image:require('../assets/image/ll.jpg')
        },
        {
          image:require('../assets/image/nn.jpg')
        },
        {
          image:require('../assets/image/oo.jpg')
        },
        {
          image:require('../assets/image/pp.jpg')
        },
        {
          image:require('../assets/image/xz.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.lateral-sliding 
  display flex
  overflow-y hidden
  overflow-x scroll

  .lateral-sliding-item 
    display flex
    margin-right 8px
    background-color yellow
    margin-top 21px
    img
      width 40px
      height 40px
      border-radius 50%

    

</style>