import Vue from 'vue'
import Vuex from 'vuex'
import {
	parGetData,
	parSetData,
	checklogin
} from '../common/util.js'
Vue.use(Vuex)

var logininfo = checklogin();
const store = new Vuex.Store({
	state: {
		openid: logininfo.openid,
		userinfo: logininfo.userinfo
	},
	mutations: {
		updatelogin(state, u) {
			if (u.openid) {
				state.openid = u.openid;
				state.userinfo = u.userinfo;
			}
		},
		logoutmac(state) {
			uni.removeStorageSync('wxopenid');
			uni.removeStorageSync('userinfo');
			state.openid = ''
			state.userinfo = ''
			console.log('store logoutmac')
		}
	},
	actions: {
		updateloginaction(context, u) {
			context.commit('updatelogin', u)
		},

		logoutaction(context) {
			context.commit('logoutmac')
		}
	}
})

export default store
