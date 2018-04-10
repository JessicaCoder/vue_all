<template>
	<div>
		<CategoryHeadView></CategoryHeadView>
		<CategoryMainView></CategoryMainView>
	</div>
</template>
<script>
	import CategoryHeadView from './CategoryHead.vue';
	import CategoryMainView from './CategoryMain.vue';
	export default {
		components:{
			CategoryHeadView, 
			CategoryMainView
		}
	}
</script>
<style> 
@import '../assets/css/category.css';
</style>