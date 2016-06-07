$(document).ready(function() {
	$(".sidetools").children('div.icon-qrcode').hover(function() {
		$("img.sidetools-qrcode").show();
	},function(){
		$("img.sidetools-qrcode").hide();
	});
	$(".sidetools ").children('a.sidetools-item').hover(function() {
		var tooltip="<div class='tooltip tooltip-placeleft'><div class='tooltip-arrow'></div><div class='tooltip-content'></div></div>"
		$(".sidetools").append(tooltip);
		var coordinate=$(this).offset();
		coordinate.left-=80;
		$(".tooltip").offset(coordinate);
		$(".tooltip-content").text($(this).attr('tooltip'));
	}, function() {
		$(".sidetools").children('.tooltip').remove();
	});
	$(".sidetools ").children('.sidetools-item').hover(function() {
		$(this).css("color","red");
	}, function() {
		$(this).css("color","#888");
	});
	$(".shopmenu-nav").children('a').click(function() {
		if(!$(this).hasClass('active')){
			$(".shopmenu-nav").find('a.active').removeClass('active');
			$(this).addClass('active');
		}
	});
	$(".shopmenu-food-zoomin").css({
	        left: ($(".style").width() - $(".shopmenu-food-zoomin").width()) / 2,
	        top: ($(".style").height() - $(".shopmenu-food-zoomin").height()) / 2
	    });
	window.onresize=function(){
	    $(".shopmenu-food-zoomin").css({
	        left: ($(".style").width() - $(".shopmenu-food-zoomin").width()) / 2,
	        top: ($(".style").height() - $(".shopmenu-food-zoomin").height()) / 2
	    });
    }
    var ratecount,pagenum;
    var rate="<li class='rate'><div class='starrating icon-star'><span class='icon-star' style='width: 100%;''></span></div><img src='http://fuss10.elemecdn.com?imageMogr2/thumbnail/25x25/format/webp/quality/85'></li>"
	$(".shopmenu-food").find('img').click(function() {
		$(".zoomin-food-img").attr('src',$(this).attr('src'));
		$(".zoomin-food-name").text($(this).parents(".shopmenu-food").find('.shopmenu-food-name').text());
		$(".zoomin-food-price").text($(this).parents(".shopmenu-food").find('.shopmenu-food-price').text());
		$(".ratingcount").children('span').text($(this).parents(".shopmenu-food").find('.shopmenu-ratingcount').text());
		ratecount=parseInt($(this).parents(".shopmenu-food").find('.shopmenu-ratingcount').text().replace("(","").replace(")",""));
		for(var i=0;i<(3>ratecount?ratecount:3);i++){
			$(".shopmenu-food-zoomin").find("ul.rategroup").append(rate);
			$(".shopmenu-food-zoomin").find("li.rate:last").find('span').css("width",Math.floor((Math.random()*100)+1)+"%");
		}
		pagenum=Math.ceil(ratecount/3);
		var prevbtn="<li class='prev-btn'></li>",nextbtn="<li class='next-btn'></li>";
		if(pagenum<=5){
			for(var j=1;j<pagenum;j++){
				$('.pagination').children('ul').append('<li></li>');
				$('.pagination').find('li:last').text(String(j));
			}
			$('.pagination').find('li:first').addClass('current');
		}
		if(pagenum>5){
			
			for(var j=1;j<4;j++){
				$('.pagination').children('ul').append('<li></li>');
				$('.pagination').find('li:last').text(String(j));
			}
			$('.pagination').find('li:first').addClass('current');
			$('.pagination').find('li:last').after("<li class='more'></li>")
			$('.pagination').find('li:last').text('...');
			$('.pagination').find('li:last').after('<li></li>');
			$('.pagination').find('li:last').text(String(pagenum));
			$('.pagination').find('li:first').before(prevbtn);
			$('.pagination').find('li:last').after(nextbtn);
		}
		$(".shopmenu-food-zoomin").show();
		$(".style").show();
	});
	
	$(".shopmenu-food-zoomin").children('.zoomin-close').click(function() {
		$(".shopmenu-food-zoomin").find('li').each(function() {
			$(this).remove();
		});
		$(".shopmenu-food-zoomin").hide();
		$(".style").hide();
	});
	var x=0;
	$(".shopguide-favor").find('i').click(function() {
		if(x==0){
			$(this).css('color',"red");
			x=1;
		}
		else{
			$(this).css('color',"grey");
			x=0;
		}
	});
});