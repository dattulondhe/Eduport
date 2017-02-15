
angular.module('Eduport', ['ionic', 'Eduport.controllers','Eduport.config','Eduport.videoService','ngCordova','youtube-embed'])

.run(function($ionicPlatform,$ionicPopup,$rootScope,$cordovaNetwork,$ionicLoading) {
  $ionicPlatform.ready(function() {
   setTimeout(function() {
    navigator.splashscreen.hide();
  }, 300);
   if (window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);
  }

  if (window.StatusBar) {
    StatusBar.styleDefault();
  }

  $rootScope.customPopup= function(content){
    var alertpopup= $ionicPopup.alert({
     title: '<b>Alert</b>',
     template: '<center>'+content+'</center>'
   });
    return alertpopup;
  }

  $rootScope.isNetwork = function(){
   if(!$cordovaNetwork.isOnline()){
     $ionicLoading.hide();
     $rootScope.customPopup("Please check your network connection and try again.");
     return false;
   }
   else{
    return true;
  }
}

});

  


})

