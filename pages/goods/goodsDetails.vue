<template>
	<view class="goodsDetails_container">
		<image src="../../static/images/goods/watermelon.jpg" class="goodsImg" mode=""></image>
		<view class="goods_Box">
			商品名称：西瓜{{num}}
		</view>
	</view>
</template>

<script>
	export default {
		onLoad:function(option){
			this.num = option.item
		},
		data(){
			return{
				num:''	
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		font-size: 24rpx;
		.goodsDetails_container{
			height: 100%;
			.goodsImg{
				width: 100%;
				height: auto;
			}
		}
		
	}
</style>
