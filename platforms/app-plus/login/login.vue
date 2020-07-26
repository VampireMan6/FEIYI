<template>
	<view class="content">
		<block v-if="type == 'login'">
			<view class="input-group">
				<view class="input-row border">
					<text class="title">账号：</text>
					<input type="text" v-model="account" placeholder="请输入你的账号" />
				</view>
			</view>
			<view class="input-group">
				<view class="input-row">
					<text class="title">密码：</text>
					<input
						type="text"
						password="true"
						v-model="password"
						placeholder="请输入你的密码"
					/>
				</view>
			</view>
			<view class="btn-row"><button type="warn" @tap="bindLogin">立即登录</button></view>
		</block>
		<block v-if="type == 'reg'">
			<view class="input-group">
				<view class="input-row border">
					<text class="title">用户名：</text>
					<input type="text" v-model="account" placeholder="长度5-12个字符" />
				</view>
			</view>
			<view class="input-group">
				<view class="input-row">
					<text class="title">密码：</text>
					<input
						type="text"
						password="true"
						v-model="password"
						placeholder="长度6-18个字符"
					/>
				</view>
			</view>
			<view class="input-group">
				<view class="input-row">
					<text class="title">确认密码</text>
					<input
						type="text"
						password="true"
						v-model="password2"
						placeholder="请再次输入密码"
					/>
				</view>
			</view>
			<view class="btn-row">
				<button type="warn" @tap="bindReg">
					{{ type == 'login' ? '立即登录' : '注册帐号' }}
				</button>
			</view>
		</block>
		<view class="action-row">
			<text @click="toggle">{{ type == 'login' ? '注册账号' : '已有帐号直接登录' }}</text>
			<text @tap="gopwd">忘记密码</text>
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
			password2: '',
			token: '',
			type: 'login'
		};
	},
	methods: {
		toggle() {
			this.type = this.type == 'login' ? 'reg' : 'login';
		},
		gopwd() {
			uni.showModal({
				title: '未绑定手机，无法找回密码',
				confirmText: '知道了',
				content: '请联系客服处理,客服email: 2867557054@qq.com',
				success: function(res) {}
			});
		},
		bindLogin() {
			if (this.account.length < 5 || this.account.length > 12) {
				uni.showToast({
					icon: 'none',
					title: '账号长度必须为5-12个字符'
				});
				return;
			}
			if (this.password.length < 6 || this.password.length > 18) {
				uni.showToast({
					icon: 'none',
					title: '密码长度必须为6-18个字符'
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
				shebei: util.shebei
			};
			// 去登录
			uni.request({
				url: util.apiurl + 'syj/index/loginbyname',
				method: 'POST',
				data: data,
				success: ret => {
					if (ret.statusCode == 200 && ret.data.code < 1) {
						// 存入用户信息
						uni.setStorageSync('userinfo', parSetData(ret.data.data));
						// 存入token
						uni.setStorageSync('token', parSetData(ret.data.token));
						uni.switchTab({
							url: '/pages/center/center'
						});
					} else {
						uni.showToast({
							title: ret.data.msg,
							icon: 'none'
						});
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
		},
		bindReg() {
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
			if (this.password != this.password2) {
				uni.showToast({
					icon: 'none',
					title: '两次密码不同'
				});
				return;
			}
			uni.showLoading({
				title: '注册中',
				icon: 'none'
			});
			const data = {
				username: this.account,
				password: this.password,
				shebei: util.shebei
			};
			// 去登录
			uni.request({
				url: util.apiurl + 'syj/index/reg',
				method: 'POST',
				data: data,
				success: ret => {
					if (ret.statusCode == 200 && ret.data.code < 1) {
						// 存入用户信息
						uni.setStorageSync('userinfo', parSetData(ret.data.data));
						// 存入token
						uni.setStorageSync('token', parSetData(ret.data.token));
						uni.switchTab({
							url: '/pages/center/center'
						});
					} else {
						uni.showToast({
							title: ret.data.msg,
							icon: 'none'
						});
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
	onLoad() {}
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
.action-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 20upx;
}

.action-row text {
	color: #007aff;
	padding: 0 20px;
	font-size: 30upx;
}
</style>
