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
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })  
  .state('app.videodetails', {
    url: '/videodetails',
    views: {
      'menuContent': {
        templateUrl: 'templates/video.html',
        controller: 'VideoDetailCtrl'
      }
    }
  })


  $urlRouterProvider.otherwise('/app/playlists');
});