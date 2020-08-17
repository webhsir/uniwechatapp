<template>
	<view class="singleCont" @click="goDetails(item)">
		<view class="sc_left">
			<image src="../../static/images/home/orange.jpg" mode=""></image>
		</view>
		<view class="sc_right">
			<view class="des">
				优质地产出，高品质水果，值得一试
			</view>
			<view class="price_box">
				<text class="price">&yen;56</text>
				<text class="sell_number">已售：600</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['item'],
		data() {
			return {

			}
		},
		methods: {
			goDetails(item) {
				uni.navigateTo({
					url: `/pages/goods/goodsDetails?item=${Math.floor(Math.random()*10)}`,
					animationType: 'pop-in',
					animationDuration: 200
				});
			}
		},
	}
</script>

<style lang="scss">
	.singleCont {
		display: flex;

		.sc_left {
			image {
				width: 400rpx;
				height: 226rpx;
			}
		}

		.sc_right {
			padding: 20rpx;

			.des {
				font-size: 26rpx;
			}

			.price_box {
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				margin-top: 20rpx;

				.price {
					color: red;
				}
			}
		}
	}
</style>
