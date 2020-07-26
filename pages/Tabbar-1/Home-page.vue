<template>
	<view class="container">
		<!-- 轮播 -->
		<swiper class="swiper w-100 relative" :autoplay="true" :interval="3000" :duration="1000" :circular="true" :current="swiperCurrent" @change="changeSwiper">
			<swiper-item v-for="item in swiperImg" :key="item.id">
			    <image class="swiper-item w-100 h-100 absolute" :src="item" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播指示点样式修改 -->
		<view class="dots absolute">
			<view v-for="(item,index) in swiperImg.length" :key="item">
				<view class="dot m-r-10 b-r-50" :class="index==swiperCurrent ? ' active' : ''"></view>
		    </view>
		</view>
		<!-- 顶部搜索、提示图标 -->
		<view class="img absolute">
			<img class="search-img" src="../../static/tabbar-1-img/search.png" @click="search">
			<img class="remind-img" src="../../static/tabbar-1-img/remind.png" @click="remind">
		</view>
		<!-- 页面主要内容 -->
		<view class="content relative w-100 column p-x-20 b-b">
			<!-- 导航栏 -->
			<view class="nav w-100 b-r-8 b-b f-between f-center m-b-20">
				<view class="column f-center" v-for="(item,i) in navs" :key="i">
					<img class="nav-img m-b-10" :src="item.imgs">
					<text class="f-14">{{item.text}}</text>
				</view>
			</view>
			<!-- 平台公告 -->
			<view class="platform-announcement w-100 b-b f-center m-b-20 b-r-8">
				<img class="platform-announcement-img" src="../../static/tabbar-1-img/platform-announcement.png">
				<text class="f-12 m-l-20">热烈庆祝非遗大观 V1.0 APP正式上</text>
			</view>
			<!-- 振兴计划 -->
			<view class="plan w-100 b-r-35 t-c f-center m-b-20">
				<text class="f-20 c-white">传统工艺振兴计划</text>
			</view>
			<!-- 今日推荐 -->
			<view class="today-recommended column" >
				<view class="time f-center m-b-8">
					<img class="today-time-img" src="../../static/tabbar-1-img/today-time.png" alt="">
					<text class="f-14 m-l-10 ECB5AA">{{month + "月" + day + "日"}}</text>
				</view>
				<text class="f-20 ED7059 m-b-20">今日推荐</text>
				<view>
					dsfsdsdf
				</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			swiperImg: [//轮播图
			    '../../static/tabbar-1-img/background-img.png',
				'../../static/tabbar-1-img/background-img.png',
				'../../static/tabbar-1-img/background-img.png',
			],
			navs:[//导航栏
				{
					"imgs":'../../static/tabbar-1-img/nav-1.png',
					"text":"非遗传承"
				},
				{
					"imgs":'../../static/tabbar-1-img/nav-2.png',
					"text":"私人博物馆"
				},
				{
					"imgs":'../../static/tabbar-1-img/nav-3.png',
					"text":"非遗大观"
				}
			],
			current: 0,
			swiperCurrent: 0,              
			month:"",//月份
			day:""//日期
		};
	},
	onLoad() {//监听页面加载
		setTimeout(function () {//页面加载启动下拉刷新
		            // console.log('start pulldown');
		        }, 1000);
		uni.startPullDownRefresh();
		// 获取今日日期
		var month = (new Date()).getMonth();
		var day =(new Date()).getDate();
		this.month=month+1;
		this.day=day;
	},
	onPullDownRefresh() {//监听用户下拉动作
		// console.log('onPullDownRefresh');
		var timeoutid;
		if(timeoutid!==undefined){
			clearTimeout(timeoutid);//取消由 setTimeout 设置的定时器
		}
		timeoutid=setTimeout(function(){//设定一个定时器
				// console.log("refresh")
				uni.stopPullDownRefresh()//结束刷新
			},1000);
		// console.log(timeoutid)
	},
	methods: {
		changeSwiper(e){//轮播图
			this.swiperCurrent = e.detail.current;
	    },
		search(){//跳转到搜索页面
			uni.navigateTo({
				url:'Search/Search'
			})
		},
		remind(){//跳转到搜索页面
			uni.navigateTo({
				url:'Remind/Remind'
			})
		}
	}
};
</script>

<style lang="scss">
	.container{
		/* 轮播样式 */
		.swiper{
		    height: 750upx;
		}
		/* 轮播指示点样式 */
		.dots {
			top:680upx;
		    left:610upx;
		    z-index: 99;
			
			.dot {//未选中样式
			    width: 10upx;
			    height: 10upx;
				background-color: rgba(255, 255, 255, 0.5);
			    transition: all .6s;
			}
			.active {//别选中样式
			    width: 20upx;
			    height: 10upx;
				background-color: #FFFFFF;
				border-radius: 14upx;
			}
		}
		/* 顶部搜索 提示图标样式 */
		.img{
			top:112upx;
			left:576upx;
			
			.search-img{//搜索按钮
				width:44upx;
				height: 44upx;
			}
			.remind-img{//提醒按钮
				width:40upx;
				height: 44upx;
				margin-left: 50upx;
			}
		}
		// 页面主体内容样式
		.content{
			top:-40upx;
			z-index: 999;
			// 导航栏样式
			.nav{
				height:220upx;
				padding:40upx 60upx;
				background-color: #FFFFFF;
				box-shadow: 0upx 12upx #F8F8F8;
				
				.nav-img{
					width:70upx;
					height: 80upx;
				}
			}
			// 平台公告样式
			.platform-announcement{
				height: 100upx;
				background-color: #F8F8F8;
				padding: 28upx 0 28upx 28upx;
				
				.platform-announcement-img{
					width: 50upx;
					height: 44upx;
				}
			}
			//振兴计划样式
			.plan{
				height: 140upx;
				background-color: #333333;
				justify-content: center;
			}
			//今日推荐样式
			.today-recommended{
				.time{
					.today-time-img{
						width:36upx;
						height: 20upx;
					}
				}
			}
		}
		
	}
	
</style>
