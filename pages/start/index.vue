<template>
	<view class="startPageCont">
		<view class="enter" @click="goHome" open-type="switchTab" >
			立即体验
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goHome() {
				uni.switchTab({
					url: `/pages/index/index`,
					animationType: 'pop-in',
					animationDuration: 200
				});
			}
		}

	}
</script>

<style lang="scss">
	
	page{
		height: 100%;
		
		.startPageCont{
			height: 100%;
			background-color: rgba(0,0,0,.5);
			display: grid;
			place-items: center;
			.enter{
				border: 1px solid #ccc;
				font-size: 28rpx;
				padding: 10rpx;
				border-radius: 20rpx;
				box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
			}
		}
	}
	
</style>
