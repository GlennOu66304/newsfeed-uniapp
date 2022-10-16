<template>
	<view style="flex-wrap:wrap;">
	<navigator class="news-list" url="/pages/info/info"
	
	v-for="(item, index) in news">
		<image :src=item.imgsrc mode="widthFix"></image>
		<view class="news-title">
		<h4>{{item.ltitle}}</h4>
		<span>{{item.digest}}</span>
		</view>
	</navigator>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
		return{ 
         news: [],
		 }
		},
		onLoad() {
			_self = this;
        this.getNews();
		},
		methods: {
			
          getNews: ()=>{
			  
			  uni.request(
			  
			  {
				url:"http://c.3g.163.com/nc/article/list/T1348648517839/0-20.html",
				success:(res)=>{
					// console.log(res);
				_self.news = res.data.T1348648517839;
					
				}
			  }
			  
			  )
		  }
		},
		
		
	}
</script>

<style>
view{width: 100%;}
.news-list{
	display:flex;
	width: 94%;
	padding: 10upx 3%;
	flex-wrap:nowrap;
	margin:12upx 0;
	}
.news-list image{
	width: 200upx;
	margin-right: 12upx;
	flex-shrink: 0;
	}
.news-title{
	width:100%;
	height:auto;
	font-size:28upx;
	}

</style>
