angular.module('Eduport.config', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.playlists', {
    url: '/playlists',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })  

  .state('app.videodetails', {
    url: '/videodetails/:videoid',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'templates/video.html',
        controller: 'VideoDetailCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    cache: false,
    templateUrl: 'templates/login.html',
    controller: 'LoginRegisterCtrl'
  })
  
  .state('register', {
    url: '/register',
    cache: false,
    templateUrl: 'templates/register.html',
    controller: 'LoginRegisterCtrl'
  })

  $urlRouterProvider.otherwise('/login');
  // $urlRouterProvider.otherwise('/app/playlists');
// 
});