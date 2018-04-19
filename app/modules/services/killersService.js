'use strict';

import {EVENT_HUB_ACTIONS} from 'EventHub';

const _ = require('lodash');
const localStorage = require('store');

export class KillersService {
	constructor(wordsService) {
		'ngInject';

		Object.assign(this, {
			_wordsService: wordsService,
			killers: []
		});

		this.init();
	}

	getKillers () {
		return this.killers;
	}

	saveToLocal() {
		localStorage.set('killers', this.killers);
	}

	addKiller(killer) {
		this.killers.push({
			name: killer,
			uuid: _.random(1000000).toString(),
			word: this._wordsService.getWord(this.killers.length+1)
		});

		this.saveToLocal();

		//EventHub.$emit(KILLER_UPDATED, this.killers);
		EVENT_HUB_ACTIONS.killersUpdated(this.killers);
	}

	removeKiller(uuid) {
		_.remove(this.killers, (killer) => killer.uuid === uuid);
		this.saveToLocal();
		EVENT_HUB_ACTIONS.killersUpdated(this.killers);
	}

	init() {
		const killersRestore = localStorage.get('killers');
		this.setKillers(killersRestore || []);
	}

	setKillers(killers) {
		this.killers = killers;
		this.saveToLocal();
	}

	createNewKillers() {
		this.setKillers([]);
	} 
}