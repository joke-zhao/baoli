var app = new Vue({
	el:"#app",
	data:{
		title:"首页/解决方案/智慧工地",
		arr:[{name:"智慧工地",href:"smartSite.html"},{name:"智慧校园",href:"smartCampus.html"},{name:"智慧园区",href:"SmartPark.html"},{name:"智慧林业",href:"IntelligentForestry.html"},{name:"智慧海关",href:"smartCustoms.html"},{name:"数据管理",href:"dataManagement.html"},{name:"数据安全",href:"dataSafe.html"},{name:"数字孪生",href:"dugutalTwins.html"},{name:"5G+",href:"5G.html"},{name:"北斗+",href:"thePlough.html"}],
		img:"./img/smartSite/banner.webp",
		banneTitleOne:"解决方案",
		banneTitleTwo:"用专业的服务，为行业客户持续创造价值",
		productTitle:"︿",
		RightTitle:"智慧工地",
		num: 0,
		RightContent:"方案概述：<p>智慧工地解决方案是运用云计算、物联网、大数据、人工智能等新一代信息技术，彻底改变传统建筑施工现场参建各方现场管理的交互方式、工作方式和管理模式，实现对生产工地的全方位实时监控，变被动“监督”为主动“监控”，为参建各方提供一揽子工地现场管理信息化解决方案。</p><br><img src='./img/smartSite/case1.png'><br/><br/><br/><p>平台架构：</p><img src='./img/smartSite/case2.png'><p>主要功能：</p><p><span>人员管理：</span>档案管理 、考勤管理 、实名认证 、工资管理 </p><p><span>设备管理：</span>深基坑、高支模&脚手架监测、塔吊/龙门吊设备监测监测、升降机监测 、混凝土测温&养护 </p><p><span>现场管理：</span>视频监控 、工地综合环境监控（温湿度、噪音、PM值等） 、烟雾气体报警（消防） 、降尘淋喷智能控制 、物联网能耗监测（水电能耗监测） 、智能配电综合管理（电力设备安全及用电监控） </p><p><span>管控分析：</span>物联网设备管理后台 、视频流媒体后台 、大数据汇聚与分析 、告警管理 、安全管理 </p><p><span>视频AI：</span>安全帽智能检测 、电子周界智能检测 、车辆智能识别 、人脸智能识别 、特种设备驾驶员智能识别 </p>"
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
		$(".contents .left dl dd").eq(0).css({"border-right":"#db2e18 1px solid","background-color":"#fbeae7"});
	});
});