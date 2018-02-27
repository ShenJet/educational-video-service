function nav_tabClick0(){
	$("li.nav-tabs").eq(1).removeClass("active")
	$("li.nav-tabs").eq(0).addClass("active")
	$("div#work").css("display","block")
	$("ul#comment").css("display","none")
}

function nav_tabClick1(){
	$("li.nav-tabs").eq(0).removeClass("active")
	$("li.nav-tabs").eq(1).addClass("active")
	$("div#work").css("display","none")
	$("ul#comment").css("display","block")
	
}