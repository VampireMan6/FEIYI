<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<input type="text" v-model="account" placeholder="请输入账号" />
			</view>
		</view>
		<view class="input-group">
			<view class="input-row">
				<text class="title">密码：</text>
				<input type="text" password="true" v-model="password" placeholder="请输入密码" />
			</view>
		</view>
		<view class="btn-row"><button type="warn" @tap="bindLogin">绑定</button></view>

		<view class="msg">
			<text>{{ msg }}</text>
		</view>
	</view>
</template>

<script>
import util, { parGetData, parSetData, checklogin } from '../../../common/util';
export default {
	data() {
		return {
			account: '',
			password: '',
			openid: '',
			type: 'login',
			msg: '如果你有【笑一波】app帐号，可在此绑定，如果没有，则无需绑定'
		};
	},
	methods: {
		bindLogin() {
			if (this.account.length < 5) {
				uni.showToast({
					icon: 'none',
					title: '账号最短为 5 个字符'
				});
				return;
			}
			if (this.password.length < 6) {
				uni.showToast({
					icon: 'none',
					title: '密码最短为 6 个字符'
				});
				return;
			}
			uni.showLoading({
				title: '登录中',
				icon: 'none'
			});
			const data = {
				username: this.account,
				password: this.password,
				openid: this.openid,
				shebei: util.shebei
			};
			var self = this;
			// 去登录
			uni.request({
				url: util.apiurl + 'syj/index/loginbyname',
				method: 'POST',
				data: data,
				success: ret => {
					if (ret.statusCode == 200 && ret.data.code < 1) {
						// 绑定成功
						self.msg = '绑定成功';
						if (ret.data.username) {
							// 已绑定app帐号
							// 存入appusername
							uni.setStorageSync('appusername', parSetData(ret.data.username));
						}
						uni.switchTab({
							url: '/pages/center/center'
						});
					} else {
						self.msg = ret.data.msg;
						setTimeout(function() {
							uni.hideLoading();
						}, 1000);
					}
				},
				complete: function() {
					uni.hideLoading();
				},
				header: {
					auth: util.httpauth
				}
			});
		}
	},
	onShow() {
		var logininfo = util.checklogin();
		this.openid = logininfo.openid;
	}
};
</script>
<style>
.content {
	display: flex;
	flex: 1;
	flex-direction: column;
	background-color: #efeff4;
	padding: 20px;
}

.input-group {
	background-color: #ffffff;
	margin-top: 40px;
	position: relative;
}
.input-row {
	display: flex;
	position: relative;
	font-size: 30upx;
	width: 100%;
}

.input-row .title {
	width: 20%;
	height: 50px;
	min-height: 50px;
	padding: 15px 0;
	padding-left: 30px;
	line-height: 50px;
}

.input-row input {
	width: 80%;
	height: 50px;
	min-height: 50px;
	display: block;
	margin: 0;
	padding: 15px 0;
	line-height: 50px;
}

.btn-row {
	margin-top: 50px;
	padding: 20px;
}
.msg {
	display: block;
	text-align: center;
	margin-top: 20upx;
	padding: 10upx;
}

.msg text {
	color: #007aff;
	padding: 0 20px;
	font-size: 20upx;
}
</style>
