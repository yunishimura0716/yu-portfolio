import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

import "@/assets/scss/material-kit.scss";
import 'vue-material/dist/theme/default.css'

import { DropDown } from "./globalComponents";
import { Parallax } from "./globalComponents";
import { VPopover } from "v-tooltip";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const MaterialKit = {
	install(Vue) {
		Vue.use(VueMaterial);
		Vue.component("drop-down", DropDown);
		Vue.component(Parallax.name, Parallax);
		Vue.component("v-popover", VPopover);
	}
}

export default MaterialKit;