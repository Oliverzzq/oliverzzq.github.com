jQuery(document).ready(function($){
	var tabs = $('.cd-tabs');
	
	tabs.each(function(){
		var tab = $(this),
			tabItems = tab.find('ul.cd-tabs-navigation'),
			tabContentWrapper = tab.children('ul.cd-tabs-content'),
			tabNavigation = tab.find('nav');

		tabItems.on('click', 'a', function(event){
			event.preventDefault();
			var selectedItem = $(this);
			if( !selectedItem.hasClass('selected') ) {
				var selectedTab = selectedItem.data('content'),
					selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
					slectedContentHeight = selectedContent.innerHeight();
				
				tabItems.find('a.selected').removeClass('selected');
				selectedItem.addClass('selected');
				selectedContent.addClass('selected').siblings('li').removeClass('selected');
				//animate tabContentWrapper height when content changes 
				tabContentWrapper.animate({
					'height': slectedContentHeight
				}, 200);
			}
		});

		//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
		checkScrolling(tabNavigation);
		tabNavigation.on('scroll', function(){ 
			checkScrolling($(this));
		});
	});
	
	$(window).on('resize', function(){
		tabs.each(function(){
			var tab = $(this);
			checkScrolling(tab.find('nav'));
			tab.find('.cd-tabs-content').css('height', 'auto');
		});
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}
	// var arr=$(".shop-star i");
	// var starnum=2;
	// for (var i = 0; i < arr.length-starnum; i++) {
	// 	var star=$(arr[i]);
	// 	star.css('color','#ffc30c');
	// };
	$(".my-shopping").on('click',function(){
		$(".sidebar-content-head").html("购物车");
		$(".sidebar-content-text1").html("<i class='fa fa-clock-o fa-lg'></i>");
		$(".sidebar-content-text2").html("购物车空空如也");
		$(".sidebar-content-text3").html("快去订餐吧，总有你喜欢的美食");
        $(".sidebar").animate({right:"300px"});
        $(".sidebar-content").animate({right:"0"});
	});
	$(".my-message").on('click',function(){
		$(".sidebar-content-head").html("我的消息");
		$(".sidebar-content-text1").html("<i class='fa fa-envelope-o'></i>")
		$(".sidebar-content-text2").html("您没有新的消息");
		$(".sidebar-content-text3").html("");
        $(".sidebar").animate({right:"300px"});
        $(".sidebar-content").animate({right:"0"});
	});
	$(".history").on('click',function(){
		$(".sidebar-content-head").text("我查看过的商家");
		$(".sidebar-content-text1").html("<i class='fa fa-building'></i>")
		$(".sidebar-content-text2").html("哎呀，你都没有查过附近商家吗");
		$(".sidebar-content-text3").html("赶快开始你的美食探索吧！");
        $(".sidebar").animate({right:"300px"});
        $(".sidebar-content").animate({right:"0"});
	});
	$("#angle-icon").click(function(){
        $(".sidebar").animate({right:"0"});
        $(".sidebar-content").animate({right:"-300px"});
   	});
});