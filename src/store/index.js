import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		shopList: [{
				id: '01',
				name: '小米手机',
				desc: '描述',
				price: '2000.00',
				img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
				checked: true,
				num: '1'
			},
			{
				id: '02',
				name: '小米手机2',
				desc: '描述',
				price: '6000.00',
				img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
				checked: true,
				num: '2'
			},
			{
				id: '03',
				name: '小米手机3',
				desc: '描述',
				price: '3000.00',
				img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
				checked: true,
				num: '3'
			}
		]
	},
	// 同步操作
	mutations: {
		toAllChecked(state, checked) {
			// 变更状态
			console.log(checked)
			for (let index = 0; index < state.shopList.length; index++) {
				state.shopList[index].checked = checked
			}
		},
		numAdd(state, index) {
			state.shopList[index].num++
		},
		numSub(state, index) {
			state.shopList[index].num--
			if (state.shopList[index].num == 0) state.shopList[index].checked=false
		}
	},
	// 计算属性
	getters: {
		getTotalPrice: state => {
			var TotalPrice = 0
			var TotalPriceList = state.shopList.filter(item => item.checked)
			for (let index = 0; index < TotalPriceList.length; index++) {

				TotalPrice += (TotalPriceList[index].price * TotalPriceList[index].num)
			}
			return TotalPrice * 100
		},
		getTotalChecked: state => {
			var Checked = !state.shopList.some(item => !item.checked)
			return Checked
		}
	},
	// 异步操作
	actions: {

	}
})

export default store