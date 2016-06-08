$(document).ready(function(){
	$("i").click(function(){
		if($("#place-frame").css("display")=='none'){
	        $("#triangle").css("display","inline");
		    $("#place-frame").css("display","inline");
		}
		else{
	        $("#triangle").css("display","none");
		    $("#place-frame").css("display","none");    
		}

	});
	$(".name").click(function(){
		var text=$(this).html();
		$("#place").html(text);
	    $("#triangle").css("display","none");
		$("#place-frame").css("display","none");
	});
	$("#guess-text2").click(function(){
		var text=$(this).html();
		$("#place").html(text);
	    $("#triangle").css("display","none");
		$("#place-frame").css("display","none");
	});
});
