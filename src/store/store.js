import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		showWeather: false,
		template: 0
	},
	mutations: {
		toggle: state => state.showWeather = !state.showWeather,
		updateTemplate: (state) => {
			state.showWeather = !state.showWeather;
			state.template = (state.template + 1) % 4;
		}
	}
});