//*主页js
//*@copyright = boz
//*2017-02-12 shenjie

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
		observeParents:true
});


