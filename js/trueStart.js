$(document).ready(function(){
	var num = parseInt($(".content .contentBottom li").css("border-width"));
	var top = parseInt($(".content .contentBottom li").css("margin-top"));
	var right = parseInt($(".content .contentBottom li").css("margin-right"));
	var bottom = parseInt($(".content .contentBottom li").css("margin-bottom"));
	var left = parseInt($(".content .contentBottom li").css("margin-left"));
	var sum = num + 3;
	var heights = parseFloat($(".content .contentBottom li").css("height"));
	$(".content .contentBottom li").hover(function(){
		$(this).css({"border-width": sum,"margin-left":(left-3),"margin-bottom":(bottom-3),"margin-right":(right-3),"margin-top":(top-3)});
	},function(){
		$(this).css({"border-width": num,"margin-left":left,"margin-bottom":bottom,"margin-right":right,"margin-top":top});
	});
	$(".center .contentMiddle #yinjian").click(function(){
		$(this).css({"color":"#BD3336"});
		$(".center .contentMiddle #ruanjian").css({"color":"#000000"});
		$(".content .center .contentBottom").eq(0).css({"display":"block","opacity":"1"});
		$(".content .center .contentBottom").eq(1).css({"display":"none","opacity":"0"});
		$(".content").css({"height":heights*1.5});
	});
	$(".center .contentMiddle #ruanjian").click(function(){
		$(this).css({"color":"#BD3336"});
		$(".center .contentMiddle #yinjian").css({"color":"#000000"});
		$(".content .center .contentBottom").eq(1).css({"display":"block","opacity":"1"});
		$(".content .center .contentBottom").eq(0).css({"display":"none","opacity":"0"});
		$(".content").css({"height":(heights*2.6)});
	});
	$(".content").css({"height":heights*1.5});
	$(".content .center .contentTop li").eq(0).click(function(){
		// $(".content .center .contentMiddle").animate({"transform":"translateY(-50px)"});
	});
});