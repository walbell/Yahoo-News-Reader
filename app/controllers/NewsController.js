'use strict';


(function(){
	var NewsController =function ($scope, $routeParams, newsFactory)
	{
		console.log($routeParams.category);
		$scope.category=$routeParams.category;

		newsFactory.getNews($scope.category)
		.success( function (data, status, headers, config){
				console.log("SUCCESS",data.query.results.item);
				$scope.news_list=data.query.results.item;
			});
	};

	NewsController.$inject=['$scope','$routeParams','newsFactory'];

	angular.module('newsReaderApp').controller('NewsController',NewsController);

}())

