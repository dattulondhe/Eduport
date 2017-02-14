angular.module('Eduport.videoService', [])
.factory('videoService', ['$http','$q', function($http,$q){
	var def = "";
	return {
		loadList:function(params){
			def=$q.defer();
			$http.get('https://www.googleapis.com/youtube/v3/search', {params}).success(function(response){
				def.resolve(response);
			},function(){
				def.reject(response);
			});
			return def.promise;
		}
	};
}])