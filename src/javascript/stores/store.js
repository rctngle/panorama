import AppDispatcher from '../dispatchers/app-dispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import _ from 'underscore';

import Config from '../config/config';
import Constants from '../constants/constants';

import moment from 'moment';

const CHANGE_EVENT = 'change';

AppDispatcher.register((action) => {
	switch(action.actionType) {

	// case Constants.APP_FETCH_MAP_TIMELINE_CONFLICTS:
	// 	fetchMapTimelineConflicts(action.conflictId).then((response) => {
	// 		Store.emitChange();
	// 	}, (response) => {
	// 		console.error('Failed!', response.statusMessage);
	// 		Store.emitChange();
	// 	});
	// 	break;
	// case Constants.APP_FETCH_FILTERS:
	// 	fetchFilters(action.postType).then((response) => {
	// 		Store.emitChange();
	// 	}, (response) => {
	// 		console.error('Failed!', response.statusMessage);
	// 		Store.emitChange();
	// 	});
	// 	break;
	// case Constants.APP_SET_FILTER:
	// 	setFilter(action.filter, action.value).then((response) => {
	// 		Store.emitChange();
	// 	}, (response) => {
	// 		console.error('Failed!', response.statusMessage);
	// 		Store.emitChange();
	// 	});
	// 	break;
	// default:
	}
});

module.exports = Store;