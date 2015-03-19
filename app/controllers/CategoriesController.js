'use strict';


(function(){
	var CategoriesController =function ($scope,$location)
	{
		$scope.categories = [
			'business',
			'sports',
			'entertainment'
		];

		$scope.setCategory = function () {
				console.log("Set category to: "+$scope.selectedCategory)
				$location.path('/news/'+$scope.selectedCategory);
		}
	};

	CategoriesController.$inject=['$scope','$location'];

	angular.module('newsReaderApp').controller('CategoriesController',CategoriesController);

}())

