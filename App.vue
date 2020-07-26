<script>
import util from './common/util.js';
export default {
	onLaunch: function() {
		//#ifdef APP-PLUS
		/* 5+环境锁定屏幕方向 */
		plus.screen.lockOrientation('portrait-primary'); //锁定
		/* 5+环境升级提示 */
		var server = util.apiurl + 'syj/index/checkupdate'; //检查更新地址
		var req = {
			//升级检测数据
			appid: plus.runtime.appid,
			version: plus.runtime.version,
			imei: plus.device.imei,
			shebei: util.shebei
		};
		uni.request({
			url: server,
			data: req,
			method: 'POST',
			dataType: 'json',
			header: {
				auth: util.httpauth
			},
			success: res => {
				console.log(JSON.stringify(res.data));
				if (res.statusCode == 200 && res.data && res.data.isUpdate) {
					let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
					uni.showModal({
						//提醒用户更新
						title: '更新提示',
						content: res.data.note ? res.data.note : '是否选择更新',
						success: res => {
							if (res.confirm) {
								plus.runtime.openURL(openUrl);
							}
						}
					});
				}
			}
		});
		uni.getProvider({
			service: 'push',
			success: function(res) {
				// 个推的名称为 igexin
				if (~res.provider.indexOf('igexin')) {
					uni.subscribePush({
						provider: 'igexin',
						success: function(res) {}
					});
				}
			}
		});
		uni.onPush({
			provider: 'igexin',
			callback: function(data) {
				var title = '';
				var jsondata = JSON.parse(data.data);
				for (var a in jsondata) {
					title += a + '=' + jsondata[a];
				}
				uni.showModal({
					title: '提示',
					content: title,
					success: function(res) {
						if (res.confirm) {
						} else if (res.cancel) {
						}
					}
				});
			}
		});
		//#endif
	}
};
</script>
<style>
@import './common/common.css';
@import './common/icon.css';
@import './common/uni.css';
page,
view {
	display: flex;
}
page {
	min-height: 100%;
	/* background-color: #F8F8F8; */
}

</style>
