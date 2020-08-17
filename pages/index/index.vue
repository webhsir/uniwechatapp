<template>
	<view id="homeContainer">
		<uni-search-bar placeholder="点击搜索你想要的内容" @input="search"></uni-search-bar>
		<carousel :img-list="imgList" url-key="url" @selected="selectedBanner" />
		<view class="mainCont">
			<view class="menu">
				<view class="singleMenu" v-for="(item,index) in menuList" :key='index'>
					<image :src="item.img" mode=""></image>
					<view class="title">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="adCont">
				<view class="left commPadd">
					<view class="title">
						精品特惠
						<image src="../../static/images/home/fruit.png" class="fruitStyle"></image>
					</view>
					<view class="subtitle">全场5折起</view>
				</view>
				<view class="right ">
					<view class="r_top r_common commPadd">
						<view class="title">
							新鲜瓜果
						</view>
						<view class="subtitle">农场直达</view>
						<image src="../../static/images/home/watermelone.png" class="imgStyle"></image>
					</view>
					<view class="r_btm r_common commPadd">
						<view class="title">
							热门店铺
						</view>
						<view class="subtitle">更多优惠</view>
						<image src="../../static/images/home/store.png" class="imgStyle"></image>
					</view>
				</view>
			</view>

			<view class="freshCont">
				<view class="f_title">
					<view class="t_left">
						新鲜直达
					</view>
					<view class="t_right">
						查看更多>
					</view>
				</view>
				<goodsItem v-for="(item,index) in listNum" :key='index' :item='item'></goodsItem>
				
			</view>
		</view>
	</view>
</template>

<script>
	import carousel from '@/components/vear-carousel/vear-carousel'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import goodsItem from '@/pages/goods/goodsItem.vue'
	export default {
		components: {
			carousel,
			goodsItem
		},
		data() {
			return {

				imgList: [{
					url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					id: 1
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					id: 2
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
					id: 3
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					id: 4
				}, ],
				menuList: [{
						title: '果蔬生鲜',
						img: '../../static/images/home/vgtable.png'
					},
					{
						title: '进口专区',
						img: '../../static/images/home/airport.png'
					},
					{
						title: '烘焙工具',
						img: '../../static/images/home/cake.png'
					},
					{
						title: '全部分类',
						img: '../../static/images/home/categroy.png'
					}
				],
				currentPage: 1,
				listNum: 10
				
			}
		},
		methods: {
			selectedBanner(item, index) {
				console.log('🥒', item, index)
			},
			search() {
				console.log(111)
			},
			onReachBottom() {
				let total = 4
				if (this.currentPage >= 4) {
					uni.showToast({
						title: "到底啦!没有更多了~",
						icon: 'none'
					})
			
				} else {
					uni.showLoading({
						title: '加载中...'
					})
					let _this = this
					let _uni = uni
					setTimeout(function() {
						_this.currentPage++
						_this.listNum += 5
						_uni.hideLoading()
					}, 1000)
				}
			}
			
			

		}
	}
</script>

<style lang="scss">
	#homeContainer {
		.mainCont {
			padding: 0 20rpx;

			.menu {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				flex-wrap: wrap;
				margin-top: 20rpx;

				.singleMenu {
					font-size: 24rpx;
					text-align: center;

					image {
						width: 64rpx;
						height: 64rpx;
					}

				}
			}

			.adCont {
				display: flex;
				height: 300rpx;
				margin-top: 20rpx;

				.title {
					font-size: 30rpx;
				}

				.subtitle {
					font-size: 24rpx;
					margin-top: 20rpx;
				}

				.commPadd {
					padding-top: 20rpx;
					padding-left: 10rpx;
				}

				.left {
					width: 360rpx;
					background-color: #f4bcab;
					border-radius: 7px;
					position: relative;

					.fruitStyle {
						width: 160rpx;
						height: 160rpx;
						position: absolute;
						bottom: 0;
						right: 0;
					}

				}

				.right {
					flex: 1;
					margin-left: 10rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.imgStyle {
						width: 80rpx;
						height: 80rpx;
						position: absolute;
						bottom: 10rpx;
						right: 0;
					}

					.r_common {
						height: 120rpx;
						border-radius: 20rpx;
						position: relative;
					}

					.r_top {
						background-color: #c6ebff;

					}

					.r_btm {
						background-color: #f8eed9;
					}

				}
			}

			// 新鲜直达
			.freshCont {
				.f_title {
					display: flex;
					justify-content: space-between;
					padding: 20rpx 0;

					.t_right {
						font-size: 24rpx;
					}
				}

				
			}
		}


	}
</style>
