var app = new Vue({
	el:"#app",
	data:{
		title:"首页/解决方案/数字孪生",
		arr:[{name:"智慧工地",href:"smartSite.html"},{name:"智慧校园",href:"smartCampus.html"},{name:"智慧园区",href:"SmartPark.html"},{name:"智慧林业",href:"IntelligentForestry.html"},{name:"智慧海关",href:"smartCustoms.html"},{name:"数据管理",href:"dataManagement.html"},{name:"数据安全",href:"dataSafe.html"},{name:"数字孪生",href:"dugutalTwins.html"},{name:"5G+",href:"5G.html"},{name:"北斗+",href:"thePlough.html"}],
		img:"./img/smartSite/banner.webp",
		banneTitleOne:"解决方案",
		banneTitleTwo:"用专业的服务，为行业客户持续创造价值",
		productTitle:"︿",
		RightTitle:"数字孪生",
		num: 0,
		RightContent:"方案概述：<p>数字孪生城市解决方案是应用数字孪生技术在计算机世界再造一个与之匹配对应的孪生城市，实现城市的全要素数字化和语义化、全状态的实时化和可视化、管理决策协同化和智能化。</p><p>技术架构：</p><img src='./img/dugutalTwins/first.png'><p>主要功能：</p><p>1、融合海量数据汇聚。利用此技术实现万物一体化感知监测，海量数据高效对接，实时联动跟踪分析。</p><p>2、实现实景三维感知。通过加载全域全量的数据资源构建城市多维度数据空间，利用GIS实现城市从地下到地上的地理信息的数字化，利用BIM和CIM模型构建城市的三维空间画像；同时整合北斗导航，地理测绘、智能建筑和城市遥感等城市空间数据，在数据空间模拟匹配虚实映射的数字孪生城市。</p><p>3、进行云边协同计算。运用数字孪生解决方案，城市将实现高度数字化，同时产生海量数据资源，需要运用强大的云计算和边缘计算设施，为孪生城市的高效运用提供运行决策的算力支撑。</p><p>4、智能化联动操作。方案通过城市大脑实现全域设施的智能化控制，使智能交通设施、行业设施、市政设施、无人机等前端设备达到扁平化的远程设备控制效果。同时应用虚实结合的应用场景，实现智能化联动操作，达到城市资源的最优配置和城市治理的智能化运行。</p>"
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
		$(".contents .left dl dd").eq(7).css({"border-right":"#db2e18 1px solid","background-color":"#fbeae7"});
	});
});