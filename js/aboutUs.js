$(document).ready(function(){
	var heights;
	setInterval(function(){
		heights = $(window).scrollTop();
		if(heights >= $(".honour").offset().top){
			$(".content p:nth-child(1)").css({"animation":"shows 2s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(2)").css({"animation":"shows 3s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(9)").css({"animation":"shows 3s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(3)").css({"animation":"shows 4s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(10)").css({"animation":"shows 4s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(4)").css({"animation":"shows 5s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(11)").css({"animation":"shows 5s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(5)").css({"animation":"shows 6s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(12)").css({"animation":"shows 6s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(6)").css({"animation":"shows 7s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(13)").css({"animation":"shows 7s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(7)").css({"animation":"shows 8s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(14)").css({"animation":"shows 8s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(8)").css({"animation":"shows 9s","animation-fill-mode":"forwards"});
			$(".content p:nth-child(15)").css({"animation":"shows 9s","animation-fill-mode":"forwards"});
			$(".content img").css({"animation":"shows 10s","animation-fill-mode":"forwards"});
		}
	},500);
});
