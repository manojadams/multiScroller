$(document).ready(function(){
				var vscroll1 = $("#LeftScrollableDiv");
				var vscroll2 = $("#RightScrollableDiv");
				
				var a = $(document).width()-240;
				if (a>=780)	$("#MainContent").css('width',a+'px');
				
				else return;
			});
			$(function() {
				
				var vcurr = 196; <!--Default Position value for vertical scroll-->
				var hcurr = 0;  <!--Default Position value for horizontal scroll-->
				$( "#tabs" ).tabs();
				$( "#hScroll" ).slider({ 
								orientation: "horizontal",
								animate:"fast",
								min:0,
								max:100,
								step:1,
								value:0,
								slide: function(event, ui){
									var value = hcurr-ui.value;
									hcurr = ui.value;
									var hlimit = parseFloat($("#TopScrollableDiv").css('width'));
									$("#pointer").html(value);
									hAnimThis(value,(hlimit-1002)/100);
								}
								});
				$( "#vScroll" ).slider({ 
								orientation: "vertical",
								animate:1,
								min: 0,
								max:196,
								step:1,
								value:196, 
								slide: function(event, ui) {
									var value = vcurr-ui.value;
									vcurr = ui.value;
									var vlimit = parseInt($("#LeftScrollableDiv").css('height'));
									var vtop = parseInt($("#LeftScrollableDiv").css('top'));
									
									var sliderpos =$(this).find('.ui-slider-handle:first').position(); 
									var slidertop= parseInt(sliderpos.top); 
									$("#pointer").html(vtop);
									vAnimThis(value,(vlimit-504)/196);
									
									
									},
									stop: function(event, ui) { 
										
									}
									});
								
			
			});
			function vAnimThis(value,vlimit){
				
				if(value>0) {
				$("#LeftScrollableDiv").animate({top:"-="+vlimit*value+"px"},"fast");
				$("#RightScrollableDiv").animate({top:"-="+vlimit*value+"px"},"fast");
				}
				if(value<0){
				$("#LeftScrollableDiv").animate({top:"+="+vlimit*value*(-1)+"px"},"fast");
				$("#RightScrollableDiv").animate({top:"+="+vlimit*value*(-1)+"px"},"fast");
				}
			}
			function hAnimThis(value,hlimit){
				if(value<0) {
				$("#TopScrollableDiv").animate({left:"+="+hlimit*value+"px"},"fast");
				$("#RightScrollableDiv").animate({left:"+="+hlimit*value+"px"},"fast");
				$("#BottomScrollableDiv").animate({left:"+="+hlimit*value+"px"},"fast");
				}
				if(value>0) {
				$("#TopScrollableDiv").animate({left:"-="+hlimit*value*(-1)+"px"},"fast");
				$("#RightScrollableDiv").animate({left:"-="+hlimit*value*(-1)+"px"},"fast");
				$("#BottomScrollableDiv").animate({left:"-="+hlimit*value*(-1)+"px"},"fast");
				}
				
			}