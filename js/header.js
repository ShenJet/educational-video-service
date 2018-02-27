

	var headerApp = angular.module("headerApp",[])
	app.factory('header', function(){
    		return {};
	});
	headerApp.controller("headerCtrl",function($scope,$http){
		
		
		//get session storage
		if(sessionStorage.getItem('username',$scope.username)){
			$scope.userinfo = {
			username:sessionStorage.getItem('username'),
			token:sessionStorage.getItem('token'),
			user_id:sessionStorage.getItem('user_id'),
			user_phone:sessionStorage.getItem('user_phone'),
			user_role_id:sessionStorage.getItem('user_role_id'),
			ischeck:sessionStorage.getItem('ischeck'),
			create_dateline:sessionStorage.getItem('create_dateline'),
			modify_dateline:sessionStorage.getItem('modify_dateline'),
			avatar:sessionStorage.getItem('user_avatar')
		}
			console.log($scope.userinfo)
		}else{
			$scope.userinfo = {
				username:'用户未登录',
				avatar:'img/login/default_avatar.png'
			}
		}	
			
			
			
			
			
			
			
			
			
			
			
	})