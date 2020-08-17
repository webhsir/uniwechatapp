<template>
	<view class="homeCont">
		<view class="cont">
			<view class="imgBox">
				<image src="../../static/images/home/1.jpeg" mode=""></image>
			</view>
			<view>
				你是一个小臭宝
			</view>
		</view>
	</view>
</template>


<script>
	import {
		login
	} from '@/api/index.js'
	export default {
		onLoad: function() {},
		data() {
			return {
				msg: 'tests'
			};
		},
		methods: {

			Test() {

				login().then(res => { // 请求
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="less">
	page {
	  height: 100%;
	}
	.homeCont{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	
	.cont{
		font-size: 24rpx;
		text-align: center;
	}

	.imgBox {
		width: 300rpx;
		height: 300rpx;
		border-radius: 50%;
		border: 1px solid #ccc;
		padding: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;	
		image{
			width: 200rpx;
			height: 200rpx;
		}

	}
</style>
