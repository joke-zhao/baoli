var app = new Vue({
	el:"#app",
	data:{
		title:"首页/解决方案/智慧园区",
		arr:[{name:"智慧工地",href:"smartSite.html"},{name:"智慧校园",href:"smartCampus.html"},{name:"智慧园区",href:"SmartPark.html"},{name:"智慧林业",href:"IntelligentForestry.html"},{name:"智慧海关",href:"smartCustoms.html"},{name:"数据管理",href:"dataManagement.html"},{name:"数据安全",href:"dataSafe.html"},{name:"数字孪生",href:"dugutalTwins.html"},{name:"5G+",href:"5G.html"},{name:"北斗+",href:"thePlough.html"}],
		img:"./img/smartSite/banner.webp",
		banneTitleOne:"解决方案",
		banneTitleTwo:"用专业的服务，为行业客户持续创造价值",
		productTitle:"︿",
		RightTitle:"智慧园区",
		num: 0,
		RightContent:"方案概述：<p>智慧园区解决方案是基于园区应用场景的需求打造的一个贯穿园区规划运营与物业管理、园区基础设施运行管理与监控、园区能源集中管控与优化以及园区智能报警与安全应急处理的管控一体化平台。通过数据自动采集、信息实时传递、高度集中管控、智能事务处理及随时随地服务，为园区内企业提供更好的发展平台和服务能力，提高园区的产业集聚能力和资源整合能力，提升整个产业的经济效益。</p><p>平台架构：</p><img src='./img/smartPark/first.jpg'><p>主要功能：</p><p><span>应用门户平台：</span>作为园区应用的统一入口，为园区用户基础服务赋能，包括政府服务窗口、教育培训、智能物业服务、智能客服等，助力园区吸引优质企业和商家入驻的同时，协助园区的智能化服务和管理</p><p><span>招商管理系统：</span>覆盖招商项目的全过程追踪管理、招商线索的分类和筛选、重点潜在客户和项目的管理及服务、园区签约项目促建等。</p><p><span>资源管理系统：</span>为园区各种资源建立生动逼真的可视化展现，实现了园区资源的实时盘点和可视化管理 。</p><p><span>协同办公系统：</span>实现了用户的权限控制及认证管理、文档管理、会议管理、公文管理等。</p><p><span>综合管理平台：</span>实现了门禁系统、视频监控系统、智能报警系统、智能巡检系统、电梯控制系统、停车管理系统、地下管网系统、安防系统等的集中监控；在园区出现应急事件时，实现安防综合系统的联动报警及协同处理；对应急事件进行方案分析、影响评估、调度指挥、救援处理，并在事后进行应急事件的总结、分析。</p>"
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
		$(".contents .left dl dd").eq(2).css({"border-right":"#db2e18 1px solid","background-color":"#fbeae7"});
	});
});