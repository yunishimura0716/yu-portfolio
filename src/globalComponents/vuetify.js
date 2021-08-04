// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
	iconfont: 'md',
})


const opts = {
	icons: {
		iconfont: 'mdi',
	},
}

export default new Vuetify(opts)