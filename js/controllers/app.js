var james_pic = "http://cicats.com/wp-content/uploads/2016/07/average-cat-lifespan-96x96.jpg"
var cori_pic = "http://news.nationalgeographic.com/news/2005/08/photogalleries/dogclone/images/thumbnail/dog_clone3T.jpg"

var james_quote = "With great power comes great electricity bill."
var cori_quote = "\" quotes! \""
var postsApp = angular.module('postsApp', []);

postsApp.controller('authorsController', function authorsController($scope){
	$scope.posts = {
		"1" :{
			"author" : "James",
			"pic" : james_pic,
			"quote" : james_quote,
			"date" : "Aug 35, 2016",
			"title" : "The Shish You Don't Know",
			"media" : [],
			"post" : "So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. "

		}
	};
});




/*
function AppCtrl ($scope){
	$scope.authors = {
		"James":{
			"nme": "James",
			"picture": "http://cicats.com/wp-content/uploads/2016/07/average-cat-lifespan-96x96.jpg"
		},
		"Cori":{
			"name": "Cori",
			"picture": "http://news.nationalgeographic.com/news/2005/08/photogalleries/dogclone/images/thumbnail/dog_clone3T.jpg"
		}
	}
}

function getAuthors($scope){
	$scope.authors = {
		"Cori":{

		}
	}

}*/