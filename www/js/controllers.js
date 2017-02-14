angular.module('Eduport.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('PlaylistsCtrl', ['$scope','videoService','$ionicLoading', function($scope,videoService,$ionicLoading){
 $scope.videos = [];
 $scope.youtubeParams = {
  key: 'AIzaSyCWtY3gUyiBJ9t-xqnIAJjRjBCbjZAuOxs',
  type: 'video',
  maxResults: '20',
  part: 'id,snippet',
  order: 'date',
  channelId: 'UCOhHO2ICt0ti9KAh-QHvttQ',
}
$scope.loadVideoList=function(){
  $ionicLoading.show();
  videoService.loadList($scope.youtubeParams).then(function(response){
    angular.forEach(response.items, function(child){
      $scope.videos.push(child);
    });
    $ionicLoading.hide()
  },function(error){
     $rootScope.customPopup("Server not responding. Please try again later.");
  })
}
$scope.loadVideoList();
}])


.controller('VideoDetailCtrl', ['$scope', function($scope){
  
}])
// .controller('PlaylistsCtrl', function($scope,$http) {

//   $scope.playVideo=function(videoData){
//    $http.get('https://www.googleapis.com/youtube/v3/videos?id='+videoData.id.videoId+'&key=AIzaSyCWtY3gUyiBJ9t-xqnIAJjRjBCbjZAuOxs&part=snippet,contentDetails,statistics,status').success(function(response){
//     console.log (response);
//   });
//  }

// })
