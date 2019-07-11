<template>
  <div class="container">
		<!-- 头部搜索 -->
		<div class="search">
			<div class="title">音乐馆</div>
			<!-- 搜索组件 -->
			<v-searchBox class="searchbox"></v-searchBox>
		</div>
			<!-- 轮播图 -->
			<v-banner></v-banner>
			<v-tabbar></v-tabbar>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
			<v-recommend></v-recommend>
		
	</div>
</template>

<script>
import searchBox from '@/components/searchBox'
import banner from '@/components/banner'
import api from '@/api'
import tabbar from '@/components/tabbar'
import recommend from '@/components/recommend'
export default {
	name: 'musicHall',
	data() {
		return {
			
		}
	},
	components: {
		'v-searchBox' :searchBox,
		'v-banner': banner,
		'v-tabbar': tabbar,
		'v-recommend': recommend
	},
	methods: {
	},
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function'
.search
	display flex
	margin-bottom px2rem(30px)
	.title
		font-size 28px
		line-height 28px
		margin-left px2rem(20px)
		margin-top px2rem(20px)
	.searchbox
		margin-top px2rem(10px)
		margin-left px2rem(25px)
</style>
