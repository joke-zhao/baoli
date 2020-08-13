$(document).ready(function(){
	$(".content .left ul li:nth-child(1)").click(function(){
		$(".kehu ul li").animate({"opacity":"0"},400);
		$(".kehu ul li:nth-child(1)").animate({"opacity":"1"},200);
		$(".content .left ul li").css({"border-right-color":"#ffffff"});
		$(".content .left ul li span").css({"color":"#000000"});
		$(this).css({"border-right-color":"#d71f19"});
		$(this).find("span").css({"color":"#d71f19"});
		$(".content .right ul li").animate({"opacity":"0"},400);
		$(".content .right ul li:nth-child(1)").animate({"opacity":"1"},200);
	});
	$(".content .left ul li:nth-child(2)").click(function(){
		$(".content .left ul li").css({"border-right-color":"#ffffff"});
		$(".content .left ul li span").css({"color":"#000000"});
		$(this).css({"border-right-color":" #d71f19"});
		$(this).find("span").css({"color":"#d71f19"});
		$(".content .right ul li").animate({"opacity":"0"},400);
		$(".content .right ul li:nth-child(2)").animate({"opacity":"1"},200);
		$(".kehu ul li").animate({"opacity":"0"},400);
		$(".kehu ul li:nth-child(2)").animate({"opacity":"1"},200);
	});
	$(".content .left ul li:nth-child(3)").click(function(){
		$(".content .left ul li").css({"border-right-color":"#ffffff"});
		$(".content .left ul li span").css({"color":"#000000"});
		$(this).css({"border-right-color":"#d71f19"});
		$(this).find("span").css({"color":"#d71f19"});
		$(".content .right ul li").animate({"opacity":"0"},400);
		$(".content .right ul li:nth-child(3)").animate({"opacity":"1"},200);
		$(".kehu ul li").animate({"opacity":"0"},400);
		$(".kehu ul li:nth-child(3)").animate({"opacity":"1"},200);
	});
	$(".content .left ul li:nth-child(4)").click(function(){
		$(".content .left ul li").css({"border-right-color":"#ffffff"});
		$(".content .left ul li span").css({"color":"#000000"});
		$(this).css({"border-right-color":"#d71f19"});
		$(this).find("span").css({"color":"#d71f19"});
		$(".content .right ul li").animate({"opacity":"0"},400);
		$(".content .right ul li:nth-child(4)").animate({"opacity":"1"},200);
		$(".kehu ul li").animate({"opacity":"0"},400);
		$(".kehu ul li:nth-child(4)").animate({"opacity":"1"},200);
	});
	$(".content .left ul li:nth-child(5)").click(function(){
		$(".content .left ul li").css({"border-right-color":"#ffffff"});
		$(".content .left ul li span").css({"color":"#000000"});
		$(this).css({"border-right-color":"#d71f19"});
		$(this).find("span").css({"color":"#d71f19"});
		$(".content .right ul li").animate({"opacity":"0"},400);
		$(".content .right ul li:nth-child(5)").animate({"opacity":"1"},200);
		$(".kehu ul li").animate({"opacity":"0"},400);
		$(".kehu ul li:nth-child(5)").animate({"opacity":"1"},200);
	});
});