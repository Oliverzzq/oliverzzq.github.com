$(document).ready(function(){
	var images=['img/captcha_pic1.png','img/captcha_pic2.png','img/captcha_pic3.png',
	'img/captcha_pic4.png','img/captcha_pic5.png','img/captcha_pic6.png'];
	var visited=new Array();
		for(var i=0;i<images.length;i++)
		{
			visited[i]=0;
		}
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