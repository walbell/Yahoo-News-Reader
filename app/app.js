angular.module('newsReaderApp',['ngRoute','ngSanitize'])
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "app/templates/select_category.html",
		controller: "CategoriesController" 
	})
	.when ('/news/:category',{
		templateUrl: "app/templates/news.html",
		controller: "NewsController" 
	})
});
