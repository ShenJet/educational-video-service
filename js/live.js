//*index.css
//*@copyright = boz
//*2017-02-16 shenjie

$("div#subjects>a").click(function(){
	$("div#subjects>a").css("background-color","#FFF")
	$("div#subjects>a").css("color","black")
	$(this).css("background-color","#4154E8")
	$(this).css("color","#FFF")
})