/* *
 * 通用公共js库，主要定义api接口，auth apikey 常量值和通用函数
 */

// api接口地址
var apiurl = 'https://api.xf512.com/';

// http校验值，需和服务器端一致，在请求时作为headers auth参数传入
var httpauth = 'asdgladsjgs3454adooewauatg454443452';

// 服务器端校验来源的参数值
var appkey = 'IQJ3VC4FIwpiBiAAMQUm';


// 设置标识 app wx 
var shebei = '';
//#ifdef APP-PLUS
shebei = 'app';
//#endif

//#ifdef MP-WEIXIN
shebei = 'wx';
//#endif


// store 解析字符串或对象
export function parGetData(v) {
	if (v.indexOf('obj-') === 0) {
		v = v.slice(4);
		return JSON.parse(v);
	} else {
		if (v.indexOf('str-') === 0) {
			return v.slice(4);
		}
	}
}
// localstore 存储字符串或对象
export function parSetData(v) {
	if (typeof v == 'object') {
		v = JSON.stringify(v);
		v = 'obj-' + v;
	} else {
		v = 'str-' + v;
	}
	return v;
}

// 核对登录
function checklogin() {
	// 微信openid
	var openid = uni.getStorageSync('wxopenid');
	openid = openid ? parGetData(openid) : '';
	// 用户信息
	var userinfo = uni.getStorageSync('userinfo');
	userinfo = userinfo ? parGetData(userinfo) : '';
	// 登录后的token值，在请求api时传入
	var token = uni.getStorageSync('token');
	token = token ? parGetData(token) : '';
	
	var appusername = uni.getStorageSync('appusername');
	appusername = appusername ? parGetData(appusername) : '';
	
	return {
		openid,
		userinfo,
		token,
		appusername
	}
}

// 通用登录方法
function logincomm(info, self) {
//#ifdef APP-PLUS
	uni.showModal({
		title: '请登录',
		content: '请登录后继续操作',
		confirmText: '去登录',
		success: function(res) {
			if (res.confirm) {
				uni.navigateTo({
					url: '/platforms/app-plus/login/login'
				});
				return false;
			}
		}
	});
//#endif

//#ifdef MP-WEIXIN
	/* 登录方法 */
	if (!info.detail || !info.detail.userInfo) {
		return false;
	}
	var userinfo = info.detail.userInfo;
	uni.showLoading({
		title: '登录中',
		icon: 'none'
	})
	if (typeof self.showlogin !== 'undefined') {
		self.showlogin = false
	}
	uni.login({
		provider: 'weixin',
		success: function(res) {
			// 根据code换取openid
			uni.request({
				url: apiurl + 'syj/index/getopenid',
				method: "POST",
				data: {
					code: res.code,
					nickname: userinfo.nickName,
					avatarurl: userinfo.avatarUrl,
					shebei: shebei
				},
				success: function(ret) {
					if (ret.statusCode == 200 && ret.data.openid) {
						var openid = ret.data.openid;
						userinfo.openid = openid;
						userinfo.avatar = userinfo.avatarUrl;
						self.openid = openid
						self.token = ret.data.token
						self.userinfo = userinfo
						// 存入缓存
						uni.setStorageSync(
							'wxopenid',
							parSetData(openid)
						);
						// 存入用户信息
						uni.setStorageSync(
							'userinfo',
							parSetData(userinfo)
						)
						// 存入token
						uni.setStorageSync(
							'token',
							parSetData(ret.data.token)
						)
						if (ret.data.username) {
							// 已绑定app帐号
							// 存入appusername
							uni.setStorageSync(
								'appusername',
								parSetData(ret.data.username)
							)
							if (typeof self.appusername !== 'undefined') {
								self.appusername = ret.data.username
							}
						}
					}
				},
				complete: function() {
					uni.hideLoading()
				},
				header: {
					auth: httpauth
				}
			});
		}
	});
//#endif
}


// 对某条笑话设置喜欢或不喜欢
function setlike(self, data, type, tid) {
	// self = vue object 
	// data = self.data self.list[index]
	// type = like or hate
	// tid = article id
	if (!self.token) {
		//#ifdef APP-PLUS
			logincomm();
			return false;
		//#endif
			self.showlogin = true;
			return false;
	}
	if (data.type) {
		// 已表态 不变
		return false;
	} else {
		// 对应的表态数量+1
		if (type == 'like') {
			data.type = 'like'
			data.like += 1;
		} else {
			data.type = 'hate'
			data.hate += 1;
		}
	}
	// 服务器发起表态操作
	uni.request({
		url: apiurl + 'syj/index/setlike',
		method: "POST",
		dataType: "json",
		data: {
			type: type,
			id: tid,
			token: self.token,
			shebei: shebei
		},
		header: {
			auth: httpauth
		}
	});
}


// 将对象中项目存到数组arr中
function concat(arr, obj) {
	Object.keys(obj).forEach(function(key) {
		arr.push(obj[key])
	});
	return arr;
}

export default {
	apiurl,
	shebei,
	appkey,
	httpauth,
	parSetData,
	parGetData,
	checklogin,
	logincomm,
	setlike,
	concat
};
