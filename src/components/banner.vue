<template>
	 <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container" >
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for="(item, index) in banner" :key="index">
            <img class='swiper-img' :src="item.imageUrl" />
        </swiper-slide>
        <!-- Optional controls ,显示小点-->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import api from "@/api";
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
			banner: [],
			swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:1000,
                // delay:1000
            },
    };
	},
	components:{
		 swiper,
    swiperSlide
	},
	created() {
		this.getBanners()
	},
 

  methods: {
    getBanners() {
      api
        .Banner({
          type: 1
        })
        .then(res => {
          if (res.code === 200) {
            console.log(res);
            this.banner = res.banners;
          } else {
            console.log(error);
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
	height 170px 
	.swiper-slide img 
		width 100%
		border-radius 5%
</style>
