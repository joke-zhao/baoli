$(document).ready(function(){
	// 轮播开始
	var i = 0, timer;
	var widths = $(".banner ul li").eq(0).width();
	var len = $(".banner ul li").length;
	timer = setInterval(function(){
		i++;
		if((i%len) == 1){
			$(".banner p").animate({"left":"14%"},500);
		}else{
			$(".banner p").animate({"left":"-100%"},500);
		}
		$(".banner ul").animate({"left":-widths*(i%len)},1000);
		if(i%len == (len-1)){
			$(".banner ul").animate({"left":0},0);
			i++;
		}
	},3000);
	$(".banner").hover(function(){
		clearInterval(timer);
		$(".next").css({"opacity":"0.1"});
		$(".prev").css({"opacity":"0.1"});
	},function(){
		timer = setInterval(function(){
			i++;
			if((i%len) == 1){
				$(".banner p").animate({"left":"14%"},500);
			}else{
				$(".banner p").animate({"left":"-100%"},500);
			}
			$(".banner ul").animate({"left":-widths*(i%len)},1000);
			if(i%len == (len-1)){
				$(".banner ul").animate({"left":0},0);
				i++;
			}
		},3000);
		$(".next").css({"opacity":"0"});
		$(".prev").css({"opacity":"0"});
	});
	$("header").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			i++;
			if((i%len) == 1){
				$(".banner p").animate({"left":"14%"},500);
			}else{
				$(".banner p").animate({"left":"-100%"},500);
			}
			$(".banner ul").animate({"left":-widths*(i%len)},1000);
			if(i%len == (len-1)){
				$(".banner ul").animate({"left":0},0);
				i++;
			}
		},3000);
	});
	$(".next").click(function(){
		clearInterval(timer);
		i++;
		if((i%len) == 1){
			$(".banner p").animate({"left":"14%"},500);
		}else{
			$(".banner p").animate({"left":"-100%"},500);
		}
		$(".banner ul").animate({"left":-widths*(i%len)},1000);
		if(i%len == (len-1)){
			$(".banner ul").animate({"left":0},0);
			i++;
		}
	});
	$(".prev").click(function(){
		if((i%len) == 2){
			$(".banner p").animate({"left":"14%"},500);
		}else{
			$(".banner p").animate({"left":"-100%"},500);
		}
		clearInterval(timer);
		i--;
		if(i < 0){
			i = len-1;
			$(".banner ul").animate({"left":-widths*(i%len)},0);
			i--;
		}
		$(".banner ul").animate({"left":-widths*(i%len)},1000);
	});
	// 轮播结束
	var imgFirst = $(".imgFirst");
	var imgs = imgFirst.find("img");
	$(".productFirst").hover(function(){
		// 第一次
			imgs.eq(0).animate({left:"82.5%"}, 500);
			imgs.eq(0).animate({top:"200px"}, 500);
			imgs.eq(1).animate({top:	"20px"}, 500);
			imgs.eq(1).animate({left:"43.5%"}, 500);
			imgs.eq(2).animate({left:"43.5%", top:"380px"}, 500);
			imgs.eq(2).animate({left:"6%", top:"200px"}, 500);
			// 第二次
			imgs.eq(0).animate({left:"43.5%", top:"380px"}, 500);
			imgs.eq(0).animate({left:"6%", top:"200px"}, 500);
			imgs.eq(1).animate({left:"82.5%"}, 500);
			imgs.eq(1).animate({top:"200px"}, 500);
			imgs.eq(2).animate({top:	"20px"}, 500);
			imgs.eq(2).animate({left:"43.5%"}, 500);
	},function(){
		imgs.eq(0).animate({left:"43.5%"}, 500);
		imgs.eq(0).animate({top:"20px"}, 500);
		imgs.eq(1).animate({top:	"200px"}, 500);
		imgs.eq(1).animate({left:"6%"}, 500);
		imgs.eq(2).animate({left:"82.5%",}, 500);
		imgs.eq(2).animate({top:"200px"}, 500);
	});
	
	var index = 0;
	var arrays = ["监测","数据","服务"];
	var timers;
	$(".productTwo").hover(function(){
		timers = setInterval(function(){
			if(index < arrays.length-1){
				index++;
			}else{
				index = 0;
			}
			$(".fonts").html(arrays[index]);
		},1000);
	},function(){
		clearInterval(timers);
		$(".fonts").html(arrays[index]);
	});
	$(".prev").hover(function(){
		$(".prev").css({"opacity":"0.4"});
	},function(){
		$(".prev").css({"opacity":"0.1"});
	});
	$(".next").hover(function(){
		$(".next").css({"opacity":"0.4"});
	},function(){
		$(".next").css({"opacity":"0.1"});
	});
		
	// $(window).scrollTop()   //鼠标滚动的高度
	// console.log($(".banner").css("height"));
	// $(".solution").offset().top  //某个元素的高度
	// console.log($(".solution").offset().top);
	// console.log($(".product").offset().top);
	var scrolls = 0;
	setInterval(function(){
		
		// console.log("窗口高："+$(window).scrollTop())
		// console.log("product高:"+$(".product").offset().top);
		
		// console.log("product文档高:"+$(".product".body)height());
		// console.log(parseInt($(".banner").css("height"))+parseInt($(".product").css("height"))/2);
		scrolls = $(window).scrollTop()
		// console.log(scrolls);
		if(scroll >= parseInt($(".banner").css("height"))+parseInt($(".product").css("height"))/2){
			$(".product .boOne").addClass("outs");
			$(".product .boOne").removeClass("moves");
		}else if( scrolls >= (parseInt($(".banner").css("height")))/2){
			$(".product .boOne").addClass("moves");
			$(".product .boOne").removeClass("outs");
		}
	},1000);
	$(".product .productFirst").click(function(){
		window.location.href = "./trueStart.html";
	});
	$(".product .productTwo").click(function(){
		window.location.href = "./service.html";
	});
	$(".product .productThree").click(function(){
		window.location.href = "./data.html";
	});
});