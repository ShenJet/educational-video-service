//*login.js
//*@copyright = boz
//*2017-02-12 shenjie

require.config({
    baseUrl: "./js",
    paths: {
        "jquery": "jquery-3.1.1.min",
        "angular":"angular.min"
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});
require(['jquery','angular'], function ($,ng){
	
	var loginApp = angular.module("loginApp",[])
	loginApp.controller('myCtrl',function($scope){
		$scope.login=function(){
			$.ajax({
				type:"post",
				url:"http://yun.txhlwxx.com/user/main/login",
				async:true,
				dataType:"jsonp",
				data:{
					"user_name": "demo",
					"user_password": "123456"
				},
				success:function(data){
					console.log(data.data.token)
					if(data.code==1){
						window.location = "index.html"
					}
				}
			})
		}
	})
})
		
		
