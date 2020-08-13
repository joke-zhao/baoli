var app = new Vue({
	el:"#app",
	data:{
		title:"首页/解决方案/数据安全",
		arr:[{name:"智慧工地",href:"smartSite.html"},{name:"智慧校园",href:"smartCampus.html"},{name:"智慧园区",href:"SmartPark.html"},{name:"智慧林业",href:"IntelligentForestry.html"},{name:"智慧海关",href:"smartCustoms.html"},{name:"数据管理",href:"dataManagement.html"},{name:"数据安全",href:"dataSafe.html"},{name:"数字孪生",href:"dugutalTwins.html"},{name:"5G+",href:"5G.html"},{name:"北斗+",href:"thePlough.html"}],
		img:"./img/smartSite/banner.webp",
		banneTitleOne:"解决方案",
		banneTitleTwo:"用专业的服务，为行业客户持续创造价值",
		productTitle:"︿",
		RightTitle:"数据安全",
		num: 0,
		RightContent:"方案概述：<p>数据是企业的核心资产，如何保护企业的数据，是每个企业管理者都需要面对的问题。宝立科技根据自身多年从事数据管理经验，并整合大量行业客户的实践，提供了一套数据安全解决方案，帮助客户建立数据资产安全管控的能力，赋能客户业务发展。</p><p>方案架构：</p><img src='./img/dataSafe/first.png'><p>方案优势：</p><p><span>领先性：</span>践行主动预防理念，采用先进的数据安全技术框架，确保技术的领先型；</p><p><span>全面性：</span>覆盖企业核心数据生命周期管理，赋能企业核心数据的安全管控能力；</p><p><span>体系性：</span>通过身份认证、权限控制、账号管理、资产保护、操作审计等组合拳打造数据安全管控体系，帮助企业建立数据风险的管控防御能力。</p>"
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
		$(".contents .left dl dd").eq(6).css({"border-right":"#db2e18 1px solid","background-color":"#fbeae7"});
	});
});