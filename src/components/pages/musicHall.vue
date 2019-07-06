<template>
  <div class="container">
		<!-- 头部搜索 -->
		<div class="search">
			<h1>音乐馆</h1>
			<!-- 搜索组件 -->
			<v-searchBox></v-searchBox>
			<!-- 轮播图 -->
			<v-banner></v-banner>
			<v-tabbar></v-tabbar>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		
	</div>
</template>

<script>
import searchBox from '@/components/searchBox'
import banner from '@/components/banner'
import api from '@/api'
import tabbar from '@/components/tabbar'
export default {
	name: 'musicHall',
	data() {
		return {
			
		}
	},
	components: {
		'v-searchBox' :searchBox,
		'v-banner': banner,
		'v-tabbar': tabbar
	},
	methods: {
	},
}
</script>

<style>

</style>
