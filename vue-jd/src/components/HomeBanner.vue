<template>
	<div class="home_ban">
		<div class="m_banner clearfix" id="my_banner">
                <ul class="banner_box">
                      <li v-for="v in imgDatas"><img :src="v" alt="" /></li>  
                    <!-- <li><img src="../assets/images/l8.jpg" alt="" /></li> 
                    <li><img src="../assets/images/l1.jpg" alt="" /></li> 
                    <li><img src="../assets/images/l2.jpg" alt="" /></li> 
                    <li><img src="../assets/images/l3.jpg" alt="" /></li> 
                    <li><img src="../assets/images/l4.jpg" alt="" /></li> 
                    <li><img src="../assets/images/l5.jpg" alt="" /></li> 
                    <li><img src="../assets/images/l6.jpg" alt="" /></li>  -->
                </ul>
                <ul class="point_box">
                     <li v-for="vv in imgDatas"></li>  
                    <!-- <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li>  -->
                </ul>
            </div>
	</div>
</template>
<script>
    export default{
        data(){
            return {
                imgDatas : [require('../assets/images/l8.jpg'),
                require('../assets/images/l1.jpg'),
                require('../assets/images/l2.jpg'),
                require('../assets/images/l3.jpg'),
                require('../assets/images/l4.jpg'),
                require('../assets/images/l5.jpg'),
                require('../assets/images/l6.jpg'),
                require('../assets/images/l7.jpg')]
            }
        }
    }
</script>