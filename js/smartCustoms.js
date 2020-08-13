var app = new Vue({
	el:"#app",
	data:{
		title:"首页/解决方案/智慧海关",
		arr:[{name:"智慧工地",href:"smartSite.html"},{name:"智慧校园",href:"smartCampus.html"},{name:"智慧园区",href:"SmartPark.html"},{name:"智慧林业",href:"IntelligentForestry.html"},{name:"智慧海关",href:"smartCustoms.html"},{name:"数据管理",href:"dataManagement.html"},{name:"数据安全",href:"dataSafe.html"},{name:"数字孪生",href:"dugutalTwins.html"},{name:"5G+",href:"5G.html"},{name:"北斗+",href:"thePlough.html"}],
		img:"./img/smartSite/banner.webp",
		banneTitleOne:"解决方案",
		banneTitleTwo:"用专业的服务，为行业客户持续创造价值",
		productTitle:"︿",
		RightTitle:"智慧海关",
		num: 0,
		RightContent:"方案概述：<p>智慧海关解决方案充分利用云计算、大数据、人工智能、物联网和5G等新技术，打造一个基于大数据的智能监管分析平台，打通了海关各层级、流程及板块的数据，解决数据孤岛问题，构建起针对海关行业的知识图谱。从点到面，建立起一整套业务指标体系，实时触发风险预测与预警，以及梳理贯穿全业务的运行脉动，将工作流程进行数据化再造，以此统一监测管控任务、质量、时效、风险等，构建起高价值的应用场景，打造出全面监测、自动预警、自动处置的智能运控一体化平台，从而实现海关行业的业务重塑，达到降低成本、提高效率的目的。</p><p>方案架构：</p><img src='./img/smartCustoms/first.png'><p>主要功能：</p><p><span>构建指标体系：</span>根据业务指标规划，建立覆盖全业务领域的指标体系，用指标分布来制定监测标准，作为衡量每个部门，每项工作的依据。</p><p><span>数据实时汇聚：</span>对接各个子业务系统，将各个业务版块的数据实时汇聚、维度打通以及数据回填，解决信息孤岛，利用区块链解决数据可信共享。</p><p><span>实现事中管控：</span>通过对业务流程的数据化梳理再造，实时预警流程中的堵点，进行智能处理，实现事中管控，以监督每项工作的时效、质量、风险。</p><p><span>多维自动研判:</span>打通各个业务板块数据，进行多维度视角研判，自动分析预警成因，从而进行智能分拨及处置。</p><p><span>实现智能查验:</span>指挥中心直接管控作业现场，通过实时触发风险预测与预警，自动化分拨处置海量预警，形成全业务线统一运行管控。</p><p><span>统一联动指挥:</span>平台结合现场智能指挥台以及单兵设备，能够贯穿前中后台，实现跨部门统一指挥、上下联动，真正实现从预警、分析、处置、跟踪、反馈的封闭式全过程指挥调度，提升海关现场应急处置能力。</p>"
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
		$(".contents .left dl dd").eq(4).css({"border-right":"#db2e18 1px solid","background-color":"#fbeae7"});
	});
});