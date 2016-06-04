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
});