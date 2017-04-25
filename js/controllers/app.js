var james_pic = "http://cicats.com/wp-content/uploads/2016/07/average-cat-lifespan-96x96.jpg"
var cori_pic = "http://news.nationalgeographic.com/news/2005/08/photogalleries/dogclone/images/thumbnail/dog_clone3T.jpg"

var james_quote = "With great power comes great electricity bill."
var cori_quote = "\" quotes! \""

var postsData = {
		"1" :{
			"id" : "1",
			"author" : "James",
			"pic" : james_pic,
			"quote" : james_quote,
			"date" : "Aug 24, 2016",
			"title" : "We're still kind of alive",
			"media" : [],
			"summary" : "So some things happened.",
			"post" : "<p>So we both realized that we’re kind of awful at keeping people updated on life events. We don’t really post on social media because it’s social media. We’re not cool enough to have a trendy, post-about-what-crepe-your-hubby-made-you blog. So, the only option was to make this 100% organic, GMO, Wix free blog. Because what’s the point of having a website if you didn’t code it poorly yourself??</p>\
			<p>But anyway, if you weren’t completely put off by that intro, this is our life:</p>\
			<p>We spent the summer in Denver, which I’m sure will be written about, while I was interning at the National Renewable Energy Laboratory. I  worked on their energy forecasting model which has various political and economic inputs and optimizes the electricity capacity and types of generation out to the year 2050. Basically, it is computer jiu-jitsu. Cori worked from home and is convinced the ideal home office contains only a computer, a couch, and a TV. The computer may be optional...</p>\
			<p>Now that we’re back in Provo, Cori has convinced me to take in a small, furry creature. We got a 12 week old puppy named Milo. He is a border collie-malamute mix and he likes me the most, so we’ve decided to keep him. I’m sure he will be the focus of at least eighty thousand posts, so I won’t go too much in to detail here. Cori is also excited to be bothering her coworkers at her office again. They like her there. I think.</p>\
			<p>As for the future, I start my last semester of my chemical engineering undergrad at BYU in a couple of days. I’m done in December. The plan is then for me to get a job and work for 6-7 months and then start graduate school for nuclear engineering. I’m not that smart, I just pick which degrees sound the most impressive. </p>\
			<p>There it is. Stay tuned for our take on everything that is not important and nothing that is. Or don’t. Probably don’t. If you catch our mental disorders don’t say we didn’t warn you. </p>"

		},
		"2" :{
		"id" : "2",
		"author" : "Cori",
		"pic" : cori_pic,
		"quote" : cori_quote,
		"date" : "Aug 36, 2017",
		"title" : "The Shish You DO Know",
		"media" : [],
		"summary" : "So no things happened.",
		"post" : "So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. "

		},
		"3" :{
		"id" : "3",
		"author" : "Cori",
		"pic" : cori_pic,
		"quote" : cori_quote,
		"date" : "Aug 36, 2017",
		"title" : "The Shish You DO Know",
		"media" : [],
		"summary" : "So no things happened.",
		"post" : "So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. "
		},
		"4" :{
		"id" : "4",
		"author" : "Cori",
		"pic" : cori_pic,
		"quote" : cori_quote,
		"date" : "Aug 36, 2017",
		"title" : "Ahh Poo",
		"media" : ["http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg"],
		"summary" : "So no things happened.",
		"post" : "So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. "
	}
	};


var App = angular.module('postsApp', ['ngRoute']);

App.config(function($routeProvider){
	//set up routes
	$routeProvider
	.when('/',{
		templateUrl: '/partials/index.html',
		controller: 'homeController'
	})
	.when('/posts',{
		templateUrl: '/partials/posts.html',
		controller: 'postsPageController'
	})
	.when('/posts/:id',{
		templateUrl: '/partials/post_template.html',
		controller: 'postsController'
	})
	.when('/about',{
		templateUrl: '/partials/about.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

App.controller('homeController', function($scope){
	$scope.allPosts = postsData
	//get id of the newest post
	newestId = Object.keys(postsData).length
	$scope.newestPost = postsData[newestId]
	$scope.posts = []


	//last three posts to display
	$scope.posts.push(postsData[newestId-1])
	$scope.posts.push(postsData[newestId-2])
	$scope.posts.push(postsData[newestId-3])

});

App.controller('postsController', function($scope,$routeParams, $sce){
	//$scope.posts = postsData
	currentId = $routeParams.id

	$scope.currentPost = postsData[currentId]
	$scope.currentPost.post = $sce.trustAsHtml($scope.currentPost.post)
});

App.controller('postsPageController', function($scope){
	newestId = Object.keys(postsData).length
	$scope.posts12 = []
	if (newestId <= 12){
		var limit = newestId-1;
	} else{
		var limit = 11
	}
	for(var i=0; i <= limit; i++){
		$scope.posts12.push(postsData[newestId-i]);
	}
});
