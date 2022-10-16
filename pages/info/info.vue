<template>
	<view style="flex-wrap:wrap;"> 
	
<!-- 	<view v-for="(item, index) in news"  style="flex-wrap:wrap;">
		<view  style="flex-wrap:wrap;">
			{{item.ltitle}}
		</view>
		<image v-if="item.type == 'img'" :src="item.topic_background" style="width:100%;" mode="widthFix"></image>
		<text v-if="item.type == 'txt'">
			{{item.digest}}			
		</text>
			</view> -->
		
			<h3>{{news.ltitle}}</h3>
			<p>{{news.digest}}	</p>
			<!-- <img :src=news.imgsrc alt="" mode="widthFix"> -->
			<image :src=news.imgsrc mode="widthFix"></image>
			</view>
</template>

<script>
	var _self ;
	export default {
     data() {
		return{ 
         news: {},
		 }
		},
		onLoad:function(e){
			_self = this;
			uni.request({
				url:"https://c.3g.163.com/nc/article/list/T1348648517839/0-20.html",
				success:function(res){
					_self.news = res.data.T1348648517839[0];
					// console.log(_self.news);
				}
			})
		}
	}
</script>

<style>

</style>
