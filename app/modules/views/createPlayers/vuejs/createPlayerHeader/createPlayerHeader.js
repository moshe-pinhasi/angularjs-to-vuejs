'use strict';

// import './createPlayerHeader.html';
//import {killersService} from 'Services/index';
let killersService = angular.injector(['services']).get("killersService");
import EventHub, {KILLER_UPDATED} from 'EventHub';

console.log(killersService);

const CreatePlayerHeader = {
	template: require('./createPlayerHeader.html'),
	data() {
		return  {
			killers: killersService.getKillers()
		};
	},
	computed: {
		// killers() {
		// 	return killersService.getKillers();
		// }
	},
	created() {
		EventHub.$on(KILLER_UPDATED, this.updateKillers);
	},
	methods: {
		updateKillers(killers) {
			this.killers = killers;
		}
	}
};

export default CreatePlayerHeader;