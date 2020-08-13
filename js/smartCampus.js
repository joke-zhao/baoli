var app = new Vue({
	el:"#app",
	data:{
		title:"首页/解决方案/智慧校园",
		arr:[{name:"智慧工地",href:"smartSite.html"},{name:"智慧校园",href:"smartCampus.html"},{name:"智慧园区",href:"SmartPark.html"},{name:"智慧林业",href:"IntelligentForestry.html"},{name:"智慧海关",href:"smartCustoms.html"},{name:"数据管理",href:"dataManagement.html"},{name:"数据安全",href:"dataSafe.html"},{name:"数字孪生",href:"dugutalTwins.html"},{name:"5G+",href:"5G.html"},{name:"北斗+",href:"thePlough.html"}],
		img:"./img/smartSite/banner.webp",
		banneTitleOne:"解决方案",
		banneTitleTwo:"用专业的服务，为行业客户持续创造价值",
		productTitle:"︿",
		RightTitle:"智慧校园",
		num: 0,
		RightContent:"方案概述：<p>智慧校园解决方案是综合运用新一代信息技术对校园内的教学、科研和管理有关的所有信息资源进行整合、集成和全面的数字化，以统一的用户管理、统一的资源管理和统一的权限控制。智慧校园的数字化，整合了教育信息化的应用，人们只需要一次登录就可以处理所有的相关工作；提供多终端（电脑、平板、手机、智能电视等）的应用方式，工作和学习不再局限在固定的地方，例如领导在出差途中，可通过轻便的平板电脑批复文件，提高审批效率；学生回家的途中，通过智能手机浏览网上作业；老师在家里，通过电脑备课，并在课堂上直接使用；家长通过手机查看子女在校情况等等。</p><p>平台架构：</p><img src='./img/smartCampus/first.png'><p>主要功能：</p><p><span>基础信息管理：</span>包括用户中心和认证中心，涵盖用户管理、用户和角色权限设置、学校科室信息管理，年级班级信息管理，学期信息、任课信息及学生信息的管理等。</p><p><span>教务办公管理：</span>由首页、个人区、办公区、设置区四个功能模块构成，实现网络协同办公、个人日常事务管理等，解决学校各部门之间的沟通有效性，实现校园“无纸化，零电话”的高效率办公。</p><p><span>应用平台门户：</span>应用平台门户作为校园信息化应用的统一入口，整合学校所有的应用，用户只需在门户上一次登录，就可使用需要的所有应用，实现单点登录，方便快捷。</p>"
	},
	methods:{
		move:function(){
			if($("#app .contents .left dl dd").css("display") == "block"){
				$("#app .contents .left dl dd").css({"display":"none"});
				app.productTitle = "﹀";
			}else{
				$("#app .contents .left dl dd").css({"display":"block"});
				app.productTitle = "︿";
			}
		},
		dayin:function(){
			$("#app").jqprint();
		},
		big:function(){
			if($("#app .contents .right .fonts span:nth-child(2) font:nth-child(1)").css("font-weight") != 700){
				var nums= app.num +2;
				$("#app .contents .right .content").css({"font-size":nums});
				$("#app .contents .right .fonts span:nth-child(2) font").css({"font-weight":"400"});
				$("#app .contents .right .fonts span:nth-child(2) font:nth-child(1)").css({"font-weight":"bold"});
			}
		},
		middle:function(){
			if($("#app .contents .right .fonts span:nth-child(2) font:nth-child(2)").css("font-weight") != 700){
				$("#app .contents .right .content").css({"font-size":app.num});
				$("#app .contents .right .fonts span:nth-child(2) font").css({"font-weight":"400"});
				$("#app .contents .right .fonts span:nth-child(2) font:nth-child(2)").css({"font-weight":"bold"});
			}
		},
		small:function(){
			if($("#app .contents .right .fonts span:nth-child(2) font:nth-child(3)").css("font-weight") != 700){
				var nums= app.num - 2;
				$("#app .contents .right .content").css({"font-size":nums});
				$("#app .contents .right .fonts span:nth-child(2) font").css({"font-weight":"400"});
				$("#app .contents .right .fonts span:nth-child(2) font:nth-child(3)").css({"font-weight":"bold"});
			}
		}
	}
});
$(document).ready(function(){
	app.num = parseInt($("#app .contents .right .content").css("font-size"));
	$(".contents .left").hover(function(){
		$(".contents .left dl dd").css({"border-right":"none","background-color":"white"});
		$(".contents .left dl dd").hover(function(){
			$(this).css({"border-right":"#db2e18 1px solid","background-color":"#fbeae7"});
		},function(){
			$(".contents .left dl dd").css({"border-right":"none","background-color":"white"});
		});
	},function(){
		$(".contents .left dl dd").eq(1).css({"border-right":"#db2e18 1px solid","background-color":"#fbeae7"});
	});
});