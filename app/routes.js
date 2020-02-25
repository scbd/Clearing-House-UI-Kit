define(['app', 'lodash', 'text!views/index.html?', 'views/index', 'providers/extended-route'], function(app, _, rootTemplate) { 'use strict';

    app.config(['extendedRouteProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/',         { template:    rootTemplate,                          resolveController: 'views/index',       resolveUser: false }).
            when('/about',    { templateUrl: 'views/about/index.html',              resolveController: false }).
            when('/search',   { templateUrl: 'views/search/index.html',             resolveController: false }).
            when('/explore',  { templateUrl: 'views/explore/index.html',            resolveController: false }).
            when('/submit',   { templateUrl: 'views/submit/index.html',             resolveController: false }).
            when('/countries',{ templateUrl: 'views/countries/index.html',          resolveController: false }).
            when('/reports',  { templateUrl: 'views/reports/index.html',            resolveController: false  }).
            when('/forums',   { templateUrl: 'views/forums/index.html',             resolveController: false  }).
            when('/help/404', { templateUrl: 'views/404.html',  label : 'Not found',  controller: [function(){}], resolveUser: false }).
            when('/help/403', { templateUrl: 'views/403.html',  label : 'Forbidden',  controller: [function(){}], resolveUser: false }).
            otherwise({ redirectTo: '/help/404' });
    }]);

    //============================================================
    //
    //
    //============================================================
    function securize(roles)
    {
        return ["$location", "authentication", function ($location, authentication) {

            return authentication.getUser().then(function (user) {

                if (!user.isAuthenticated) {

                    console.log("securize: force sign in");

                    if (!$location.search().returnUrl)
                        $location.search({ returnUrl: $location.url() });

                    $location.path('/signin');

                }
                else if (roles && !_.isEmpty(roles) && _.isEmpty(_.intersection(roles, user.roles))) {

                    console.log("securize: not authorized");

                    $location.search({ path: $location.url() });
                    $location.path('/help/403');
                }

                return user;
            });
        }];
    }

});
