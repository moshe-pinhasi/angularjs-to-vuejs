"use strict";

import GameService from './gameService';
import WordsService from './wordsService';
import {KillersService} from './killersService';

// export let killersService;

module.exports = angular.module('services', [])
	.service('gameService', GameService)
	.service('wordsService', WordsService)
	.service('killersService', KillersService);
// 	.run( ($injector) => {
// 		'njInject';
// console.log('killersService run index');

// killersService = $injector.get('killersService');

// console.log(killersService);
// 	});
