'use strict';

angular.module('mappXL-main', [
	'appFilters',
	'home','locator','header','scroll','userViewDirective'
]);

angular.module('mappXL-positions', [
	'appFilters',
	'positions','feedbackDirective','ngRateIt','header','scroll','confirmDialogDirective'
]);
