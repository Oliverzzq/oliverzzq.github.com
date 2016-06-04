$(document).ready(function(){
	var images=['img/captcha_pic1.png','img/captcha_pic2.png','img/captcha_pic3.png',
	'img/captcha_pic4.png','img/captcha_pic5.png','img/captcha_pic6.png'];
	var visited=new Array();
		for(var i=0;i<images.length;i++)
		{
			visited[i]=0;
		}
	$(".mobile_way").hide();
	$(".mail_way").show();
	$(".mail").click(function(){
		$(".mobile_way").hide();
		$(".mail_way").fadeIn();
		$(".mail").css("background","#08c");
		$(".mail").css("color","white");
		$(".mobile").css("background","white");
		$(".mobile").css("color","black");


	});
	$(".mobile").click(function(){
		$(".mobile_way").fadeIn();
		$(".mail_way").hide();
		$(".mobile").css("background","#08c");
		$(".mobile").css("color","white");
		$(".mail").css("background","white");
		$(".mail").css("color","black");
	});
	$(".captcha_font").click(function(){
		var ran;
		do
		{
			ran=Math.floor(Math.random()*images.length);
		}while(visited[ran]==1);
		var url=images[ran];
		visited[ran]=1;
		$(this).prev("img").attr("src",url);
	});


});