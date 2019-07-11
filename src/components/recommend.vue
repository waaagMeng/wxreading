<template>
  <div class="container">
		<div class="title">推荐歌单</div>
		<div class="recommend-item">
			<swiper :options="swiperOption">
        <swiper-slide  class="swiper-item" 
				v-for="(item, index) in recommend" :key="index">
				<router-link to="/ListDetail" class="detail">
					<img class='swiper-img' :src="item.coverImgUrl" />
					<span class="name">{{item.name}}</span>
				</router-link>
				</swiper-slide>
			</swiper>
		</div>
		<div class="recommend-item">
			<swiper :options="swiperOption">
				<swiper-slide  class="swiper-item" 
				v-for="(item, index) in recommendtwo" :key="index">
				<router-link to="/ListDetail" class="detail">
					<img class='swiper-img' :src="item.coverImgUrl" />
					<span class="name">{{item.name}}</span>
				</router-link>
				</swiper-slide>
			</swiper>
		</div>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      
		
	</div>
</template>

<script>
import api from "@/api";
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	data() {
		return {
			recommend: [],
			recommendtwo:[],
			swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
        }
		}
	},
	created() {
		this.getRecommend()
	},
	methods: {
		getRecommend() {
			api.PlayLists().then((res) => {
				if(res.code === 200) {
					console.log(res)
					this.recommend = res.playlists.slice(0,6)
					this.recommendtwo = res.playlists.slice(7,13)
				} else {
					console.log('error')
				}
			})
		}
	},
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.container
	padding-top px2rem(20px)
	margin-top  px2rem(70px)
	.title
		font-size 18px
		font-weight 550
	.recommend-item
		margin-top px2rem(40px)
		.detail
			text-decoration none
			color #3c3c3c
		.swiper-item img 
			width px2rem(240px)
			height px2rem(240px)
			border-radius 5px
		.name
			margin-top px2rem(15px)
			width px2rem(240px)
			display -webkit-box
			-webkit-box-orient vertical
			font-size 12px
			line-height 16px
			overflow hidden
			text-overflow ellipsis
			-webkit-line-clamp 2
			line-clamp 2
</style>
