angular.module('Eduport.controllers', [])

.controller('AppCtrl', ['$scope', function($scope){

}])

.controller('LoginRegisterCtrl', ['$scope','$rootScope','$state','$log', function($scope,$rootScope,$state,$log){
  $scope.userdata={};
  $scope.log={};
  $rootScope.second=20;
  $scope.doLogin = function(login) {
    if(login.$valid) {
     if($rootScope.isNetwork()){
      cordova.plugins.Keyboard.close();
       // send data to Registration API
       $log.debug(angular.toJson($scope.log))
       $state.go("app.playlists");

     }
   } else {
    login.submitted = true;
  }
}

$scope.register=function(login){
  if(login.$valid) {
    if($rootScope.isNetwork()){
      cordova.plugins.Keyboard.close();
      // send data to Registration API
      $log.debug(angular.toJson($scope.userdata));
      $state.go("app.playlists");
    }
  }else{
    login.submitted = true;
  }
}

$scope.goBack=function(){
  $state.go("login");
}


}])


.controller('PlaylistsCtrl', ['$scope','videoService','$ionicLoading', '$rootScope','$state',function($scope,videoService,$ionicLoading,$rootScope,$state){
 $scope.videos = [];
 $scope.videonotavailabel=false;
 $scope.youtubeParams = {
  key: 'AIzaSyCWtY3gUyiBJ9t-xqnIAJjRjBCbjZAuOxs',
  type: 'video',
  maxResults: '20',
  part: 'id,snippet',
  order: 'date',
  channelId: 'UCOhHO2ICt0ti9KAh-QHvttQ',
}
$scope.loadVideoList=function(){
  if($rootScope.isNetwork()){
    $ionicLoading.show();
    $scope.videos = [];
    $scope.videonotavailabel=false;
    videoService.loadList({'params':$scope.youtubeParams}).then(function(response){
      angular.forEach(response.data.items, function(child){
        $scope.videos.push(child);
      });
      $ionicLoading.hide();
    },function(error){
      $ionicLoading.hide();
      $scope.videonotavailabel=true;
      $rootScope.customPopup("Server not responding. Please try again later.");
    }).finally(function() {
     $scope.$broadcast('scroll.refreshComplete');
   });
  }else{
    $scope.videonotavailabel=true;
    $scope.$broadcast('scroll.refreshComplete');
  }

}

$rootScope.second=($rootScope.second)?20:2500;
setTimeout(function() {
  $scope.loadVideoList();
},$rootScope.second);


$scope.playVideo=function(videoData){
 if($rootScope.isNetwork()){
  $state.go('app.videodetails',{'videoid':videoData.id.videoId});
}
}

}])

.controller('VideoDetailCtrl', ['$scope','$stateParams','videoService','$ionicLoading','$rootScope',function($scope, $stateParams,videoService,$ionicLoading,$rootScope){
 $scope.videoDetails={};
 $scope.videoid=$stateParams.videoid;
 $scope.videonotavailabel=false;
 $scope.loadVideo=function(){
   if($rootScope.isNetwork()){
     $scope.videonotavailabel=false;
     $ionicLoading.show();
     videoService.loadVideo($scope.videoid).then(function(response){
      $scope.videoDetails=response.data.items[0].snippet;
      $ionicLoading.hide()
    },function(error){
      $ionicLoading.hide();
      $scope.videonotavailabel=true;
      $rootScope.customPopup("Server not responding. Please try again later.");
    })
   }else{
     $scope.videonotavailabel=true;
   }
 }

 $scope.loadVideo();


}])

