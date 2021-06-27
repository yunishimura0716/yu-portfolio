import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import { publicPath } from '../vue.config'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: `${publicPath}home`, component: Home
		},
		{
			path: '*', redirect: `${publicPath}home`
		}
	]
})