"use strict";

import CreatePlayerHeader from './vuejs/createPlayerHeader/createPlayerHeader';
import AddKillerForm from 'Components/addKillerFormVue/addKillerForm';
import EventHub, {KILLER_UPDATED} from 'EventHub';

class CreatePlayersController {

	constructor($scope, killersService) {
		'ngInject';

		Object.assign(this, {
			_killersService: killersService,
			_$scope: $scope,
			killers: killersService.getKillers()
		});

		

		setTimeout( () => {
			new window.Vue({
				el: '#v-wrapper-header',
				components: {
					CreatePlayerHeader
				}
			});

			new window.Vue({
				el: '#v-wrapper-form',
				components: {
					AddKillerForm
				}
			});
		}, 0);

		// new window.Vue({
		// 	el: '#v-wrapper',
		// 	components: {
		// 		CreatePlayerHeader
		// 	}
		// });
	}

	$onInit() {
		EventHub.$on(KILLER_UPDATED, (killers) => this.updateKillers(killers));
		//EventHub.$on(KILLER_UPDATED, () => console.log("dewklkkn,enjnj"));
		
	}

	updateKillers(killers) {
		console.log("dewklkkn,enjnj");
		this.killers = killers;
		this._$scope.$digest();
	}

	$postLink() {
		
		// new window.Vue({
		// 	el: '#v-wrapper',
		// 	components: {
		// 		CreatePlayerHeader
		// 	}
		// });	

		// setTimeout( () => {
		// 	new window.Vue({
		// 		el: '#v-wrapper',
		// 		components: {
		// 			CreatePlayerHeader
		// 		}
		// 	});
		// }, 1000);
	}

	onRemove(uuid){
		this._killersService.removeKiller(uuid);
	}
}

export default CreatePlayersController;