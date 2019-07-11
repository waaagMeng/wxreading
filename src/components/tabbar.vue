<template>
  <div class="tab-container">
		<router-link to="/singer" class="tab-item">
			<i class="icon">&#xe630;</i>
			<span class="tab-link">歌手</span>
		</router-link>
		<router-link to="/rank" class="tab-item">
			<i class="icon">&#xe630;</i>
			<span class="tab-link">排行</span>
		</router-link>
		<router-link to="/lists" class="tab-item">
			<i class="icon">&#xe630;</i>
			<span class="tab-link">分类歌单</span>
		</router-link>
		<router-link to="/radio" class="tab-item">
			<i class="icon">&#xe630;</i>
			<span class="tab-link">电台</span>
		</router-link>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.tab-container
	display flex
	.tab-item
		flex 1
		text-decoration none 
		text-align center
		.tab-link
			display block
			margin-top 10px
</style>
