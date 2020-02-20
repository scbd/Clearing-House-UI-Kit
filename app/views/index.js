define(['app', 'angular', 'authentication'], function() { 'use strict';

	return ['$scope', '$rootScope', '$route', '$browser', '$location', '$window', 'authentication', function ($scope, $rootScope, $route, $browser, $location, $window, authentication) {

	
		$scope.carouselData=  {
					items :[
						{
							title: "Sustainable Ocean Day: Ocean Voices at CBD COP 14",
							imageUrl: "app/images/carousel/sod-cop14.jpg",
							targetUrl: "http://enb.iisd.org/biodiv/cop14/sustainable-ocean-day/ "
						}, {
							title: "Sustainable Ocean Night at UN Ocean Conference",
							description: "Sustainable Ocean Night at UN Ocean Conference",
							imageUrl: "app/images/carousel/soi-oc-group-photo.jpg",
							targetUrl: "http://enb.iisd.org/oceans/sdg14conference/cbd-partners/6jun.html"
						}, {
							title: "Sustainable Ocean Initiative video",
							description: "",
							imageUrl: "app/images/carousel/soi-video.jpg",
							targetUrl: "https://www.youtube.com/watch?v=4q6RiihseQ8"
						}, {
							title: "Sustainable Oceans: Marine Biodiversity for the Future We Want",
							description: "",
							imageUrl: "app/images/carousel/soi-marine-biodiversity-video.jpg",
							targetUrl: "https://www.youtube.com/watch?v=73hSF4kC0Lg"
						}, {
							title: "PANORAMA portal hosted by Blue Solutions",
							description: "",
							imageUrl: "app/images/carousel/blue-solutions.jpg",
							targetUrl: "http://panorama.solutions/en/portal/marine-coastal"
						}, {
							title: "CBD and Partners at the UN Ocean Conference",
							description: "",
							imageUrl: "app/images/carousel/cbd-ocean-conference.jpg",
							targetUrl: "http://enb.iisd.org/oceans/sdg14conference/cbd-partners/about.html"
						}, {
							title: "SOI Global Dialogue with Regional Seas Organizations and Regional Fisheries Bodies",
							description: "",
							imageUrl: "app/images/carousel/soiom-2016-01-group-photo.jpg",
							targetUrl: "https://www.cbd.int/doc/?meeting=SOIOM-2016-01"
						}, {
							title: "Perspectives on Marine Biodiversity and Sustainable Development: Interviews at the UN Ocean Conference",
							imageUrl: "app/images/carousel/soi-interview.jpg",
							targetUrl: "resources/unoc-interviews"
						}

					]
				};
		$(document).ready(function(){
				$('.carousel').carousel({
					interval: 5000
				});
			});
        $rootScope.homePage = true;
        $rootScope.navigation = [];
        $rootScope.navigationTree = [];
    }];
});
