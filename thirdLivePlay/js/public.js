	//个人资料页
	function toInfo(){
		window.location = "info.html"
	}
	
	function about(){
		$.ajax({
			type:"get",
			url:"http://yun.txhlwxx.com/content/info/detail/1",
			async:true,
			success:function(res){
				console.log(res)
				$(".content").html(res.data.content)
				$(".alert").css("display","block")
			}
		});
	}
	function contact(){
		$.ajax({
			type:"get",
			url:"http://yun.txhlwxx.com/content/info/detail/2",
			async:true,
			success:function(res){
				console.log(res)
				$(".content").html(res.data.content)
				$(".alert").css("display","block")
				
			}
		});
	}
	
	window.onkeydown = function(e){
		var e = e || window.event;
		if(e && e.keyCode==27){ // 按 Esc 
			$(".alert").css('display','none')
		}
	}
		
