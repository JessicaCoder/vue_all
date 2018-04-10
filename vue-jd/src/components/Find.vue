<template>
	<div class="find-view">
		<p @click="goBack">返回</p>
		<p>find find</p>
	</div>
</template>
<script>
   export default{
        methods:{
            goBack(){
                console.log('1234');
               //window.history.go(-1);
               //this.$router.push({path:'/home'});
                this.$router.push('/catgory');
            }
        }
    }
</script>
<style>
	.find-view {
		color: #f60;
	}
</style>