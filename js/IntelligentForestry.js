var app = new Vue({
	el:"#app",
	data:{
		title:"首页/解决方案/智慧林业",
		arr:[{name:"智慧工地",href:"smartSite.html"},{name:"智慧校园",href:"smartCampus.html"},{name:"智慧园区",href:"SmartPark.html"},{name:"智慧林业",href:"IntelligentForestry.html"},{name:"智慧海关",href:"smartCustoms.html"},{name:"数据管理",href:"dataManagement.html"},{name:"数据安全",href:"dataSafe.html"},{name:"数字孪生",href:"dugutalTwins.html"},{name:"5G+",href:"5G.html"},{name:"北斗+",href:"thePlough.html"}],
		img:"./img/smartSite/banner.webp",
		banneTitleOne:"解决方案",
		banneTitleTwo:"用专业的服务，为行业客户持续创造价值",
		productTitle:"︿",
		RightTitle:"智慧林业",
		num: 0,
		RightContent:"方案概述：<p>智慧林业解决方案综合采用云计算、物联网、大数据、人工智能等新一代信息技术以及地理信息、遥感测绘相关技术，打造一个基于林业立体感知、管理协同高效、生态价值凸显、服务内外一体的管控平台，实现林业资源动态监管、造林可视化管理、森林防火应急管理，GIS基础管理等应用场景。 </p><p>平台架构：</p><img src='./img/IntellgentForestry/first.png'><p>主要功能：</p><p><span>林业资源管理：</span>基于遥感和移动采集技术，提供遥感监测、数据变更、逻辑检查、成果制作、统计汇总等功能，实现森林资源数据实时更新，即时提供连续、动态的森林资源监测数据，实现及时出数、年度出数，及时掌握森林资源的动态变化</p><p><span>造林可视化管理：</span>提供造林资源分布、统计信息、预测预报等数据的浏览、查询和展示等，实现授权用户对造林大数据的可视化管理。</p><p><span>灾害预防应急管理：</span><br/>(1)森林火灾预防应急。分析森林火灾历史起火地点、起火原因、气象、树种、帝乡、林火过程、扑救过程等数据，预测森林火灾的发生风险和易发区域，有效预防火灾；预测林浩蔓延趋势并分析扑救方法，提高扑救效率。<br/>(2)有害生物监测防治。采用大数据分析技术，对可能发生病虫害进行预测；综合分析各种有害深恶治理方法、治理成果，评估各种方法的治理成效，为林业有害深恶治理决策提供数据支撑。 </p></p><p><span>GIS基础管理：</span>通过该模块实现图层控制、地图浏览、距离量测、面积量算、数据导入、编辑、检查等功能。</p>"
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
		$(".contents .left dl dd").eq(3).css({"border-right":"#db2e18 1px solid","background-color":"#fbeae7"});
	});
});