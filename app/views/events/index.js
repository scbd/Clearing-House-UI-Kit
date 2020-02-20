
  define(['app', 'moment', 'lodash'], function (app, moment, _) {

      app.controller('EventsController', ['$scope','$rootScope','$http', '$filter', function ($scope, $rootScope, $http, $filter) {
          var basicQuery ={
              'q': 'schema_s:meeting AND title_t:*SOI*',
              'fl': 'title_s, startDate_dt, endDate_dt, eventCity_EN_t, eventCountry_EN_t, symbol_s',
              'wt': 'json',
              'start': 0,
              'rows': 9999,
          };
          $scope.currentTab = 'upcomingMeetings';
          $scope.updateCurrentTab = function(tabname) {
              $scope.currentTab = tabname;
          };

          var nextMeetingQueryParameters = _.assign({},basicQuery, {'fq': 'endDate_dt:[NOW TO *]'}, {'sort': 'endDate_dt asc'} );
          var previousMeetingQueryParameters = _.extend({}, basicQuery, {'fq': 'endDate_dt:[* TO NOW]'}, {'sort': 'endDate_dt desc'} );

           $http.get('https://api.cbd.int/api/v2013/index/select', { params: nextMeetingQueryParameters})
               .success(function (data) {
                  $scope.nextMeetingCounts = data.response.docs.length;
                  $scope.nextMeetings = _.map(data.response.docs, function(item)
                                  { var name=item.title_s;
                                    var startDay =$filter('formatDate')(item.startDate_dt, 'DD');
                                    var endDay=  $filter('formatDate')(item.endDate_dt, 'DD');
                                    var days;
                                    if(startDay==endDay)
                                      days = startDay;
                                    else
                                      days= startDay + "-" + endDay;

                                    var startMonth = $filter('formatDate')(item.startDate_dt, 'MMMM');
                                    var endMonth = $filter('formatDate')(item.endDate_dt, 'MMMM');
                                    var startDate =  $filter('formatDate')(item.startDate_dt, 'DD, MMMM');
                                    var endDate = $filter('formatDate')(item.endDate_dt, 'DD, MMMM')
                                    var month;
                                    if(startMonth==endMonth){
                                      month=startMonth;
                                      startDate =  $filter('formatDate')(item.startDate_dt, 'DD');
                                    }
                                    else{
                                      month=startMonth + ' - ' + endMonth;
                                    }
                                    var year=$filter('formatDate')(item.startDate_dt, 'YYYY');
                                    var  meeting={'name': item.title_s, 'days':days, 'startDate':startDate, 'endDate':endDate,'month':month,'year':year, 'city': item.eventCity_EN_t, 'country': item.eventCountry_EN_t, 'url': 'https://www.cbd.int/doc/?meeting=' + item.symbol_s};

                                    return meeting;
                                  });
              }).error(function(error){$scope.nextMeetings=[]; $scope.nextMeetingCounts = 0;});

          $http.get('https://api.cbd.int/api/v2013/index/select', { params: previousMeetingQueryParameters})
               .success(function (data) {
                  $scope.previousMeetingCounts = data.response.docs.length;
                  $scope.previousMeetings = _.map(data.response.docs, function(item)
                                  { var name=item.title_s;
                                    var startDay =$filter('formatDate')(item.startDate_dt, 'DD');
                                    var endDay=  $filter('formatDate')(item.endDate_dt, 'DD');
                                    var days;
                                    if(startDay==endDay)
                                      days = startDay;
                                    else
                                      days= startDay + "-" + endDay;
                                    var startMonth = $filter('formatDate')(item.startDate_dt, 'MMMM');

                                    var endMonth = $filter('formatDate')(item.endDate_dt, 'MMMM');
                                    var startDate =  $filter('formatDate')(item.startDate_dt, 'DD, MMMM');
                                    var endDate = $filter('formatDate')(item.endDate_dt, 'DD, MMMM')
                                    var month;
                                    if(startMonth==endMonth){
                                      month=startMonth;
                                      startDate =  $filter('formatDate')(item.startDate_dt, 'DD');
                                    }
                                    else{
                                      month=startMonth + ' - ' + endMonth;
                                    }
                                    var year=$filter('formatDate')(item.startDate_dt, 'YYYY');
                                    var  meeting={'name': item.title_s, 'days':days, 'startDate':startDate, 'endDate':endDate,'month':month,'year':year, 'city': item.eventCity_EN_t, 'country': item.eventCountry_EN_t, 'url': 'https://www.cbd.int/doc/?meeting=' + item.symbol_s};

                                    return meeting;
                                  });
              }).error(function(error){$scope.previousMeetings=[]; $scope.previousMeetingCounts = 0; });
          }])
          .filter('formatDate', function(){
              return function(date,formart){
                  if(formart== undefined)
                      formart = 'DD MMM YYYY';
                  return moment.utc(date).format(formart);
              }
          });



  });
