angular.module('starter.controllers', ['starter.settings'])

    .controller('MainCtrl', function ($scope, $location, $rootScope, settings) {
        $scope.colour = settings.colour;
        $scope.$watch(function() {return settings.colour;}, function () {
            $scope.colour = settings.colour;
        });

        $rootScope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
            if (settings.locked) {
                event.preventDefault();
                $location.path(oldUrl);
            }
        });

    })
    .controller('DashCtrl', function($scope, categoriesPromise, CategoryService) {

        $scope.categories = categoriesPromise.data;
        CategoryService.setCategoryData(categoriesPromise.data);

        $scope.$watch(function(){
            return CategoryService.categories;
        }, function(newVal,oldVal){
            if(newVal !== oldVal){
                $scope.categories = newVal;
            }
        },true)
    })

.controller('HealthCtrl', function($scope,Tasks) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

        $scope.washTasks = Tasks.washTasks();
        $scope.trackAudio = function (audio) {
            audio.cls = 'task-clicked';
        };

    })

    .controller('PersonalCtrl', function($scope,Tasks) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});


        $scope.hoistingTasks =Tasks.hoistingTasks();

        $scope.trackAudio = function(audio) {
            audio.cls = 'task-clicked';
        };
    })
    .controller('CategoryCtrl', function($scope, CategoryService) {

    $scope.insert = function(parentId, title, image, audio) {

        var newRecord = {
            parentId: 0,
            categoryId: '/' + $scope.title,
            title: $scope.title,
            image: '/img/sun.jpg',
            audio: ''
        $scope.trackAudio = function (audio) {
            audio.cls = 'task-clicked';
        };
    })

        CategoryService.setCategoryData([newRecord]);
    .controller('CategoryCtrl', function ($scope) {

    };

        $scope.insert = function (parentId, title, image, audio) {
            var newRecord = {
                parentId: parentId,
                title: title,
                image: image,
                audio: audio
            };

            $scope.categories.push(newRecord);

        };

    });


