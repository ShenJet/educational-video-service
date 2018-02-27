function nav_tabClick0(){
	$("li.nav-tabs").removeClass("active")
	$("li.nav-tabs").eq(0).addClass("active")
	$("div#work").css("display","block")
	$("ul#comment").css("display","none")
	$("div#chatRoom").css("display","none")
}

function nav_tabClick1(){
	$("li.nav-tabs").removeClass("active")
	$("li.nav-tabs").eq(1).addClass("active")
	$("div#work").css("display","none")
	$("ul#comment").css("display","block")
	$("div#chatRoom").css("display","none")
}

function nav_tabClick2(){
	$("li.nav-tabs").removeClass("active")
	$("li.nav-tabs").eq(2).addClass("active")
	$("div#work").css("display","none")
	$("ul#comment").css("display","none")
	$("div#chatRoom").css("display","block")
}