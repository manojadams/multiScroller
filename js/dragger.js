$(document).ready(function(){
				$( "#tabs" ).tabs();
				var ele=document.createElement('div');
				ele.id="copierappointment";
				document.body.appendChild(ele);
				$("#copierappointment").css({width:"100px",height:"15px",position:"absolute",top:0,left:0,display:"none",background:"white",opacity:0.5});
				$("#RightScrollableDiv tr:nth-child(5) td:nth-child(5)").html('').append('<a id="appointment">Gary Kasparov</a>');
				$("#RightScrollableDiv tr:nth-child(3) td:nth-child(5)").html('').append('<a id="appointment2">Maria</a>');
				$("#appointment").parent().css({position:"relative",overflow:"visible"});
				$("#appointment2").parent().css({position:"relative",overflow:"visible"});
				$("#appointment").bind('dragstart',function(){
					
					$("#tabs-1").mouseup( function(){
							var a=$("#appointment").clone();
							a.addClass('copy');
							$(this).append(a);
							
					})
				}).bind('drag',function(event){
						
						var k=$("#copierappointment");
								
					k.css({
						top:event.offsetY,
						left:event.offsetX,
						display:"block"
					});
					
				})
				.bind('dragend',function( event ){
					$("#copierappointment").css({display:"none"});
					$("#tabs-1").unbind('mouseup');
					$("#tabs-1 .copy").each(function(){
							
						});
                });
				var a=document.getElementById('RightScrollableDiv');
				if(window.addEventListener) {
				a.addEventListener("DOMMouseScroll",x,false)||a.addEventListener("mousewheel",x,false);
				
				}
				
				var r=0;
				var h1=$('.container2').height();
				var h2=$('#RightScrollableDiv').height();
				function x(e){
					e.preventDefault();
					var a=e||window.event;
					var k=$('.container2');
					z=a.wheelDelta?a.wheelDelta/120:-a.detail/3;
					r+=z*40;
					$("#tabs-1").html(r);
					if((r>=h2-h1)&&(r<=0))
					k.css({top:r});
					else if(r>0) {k.css({top:0});r-=z*40;}
					else if(r<h2-h1) {k.css({top:h2-h1});r-=z*40}
					return r;
				}
		
				var r2=-200;
				var k =$("#copierappointment");
				$('.sheet').each(
					function(){
						$(this).css({left:r2+=200,height:h1});
						$(this).append('<div class="appointment"></div');
						
					});
				
				$('.sheet').parent().find('div:nth-child(3)').append('<div class="item"></div>');
				$('.item').bind('drag',function(event){
						$(this).css({
						top:event.offsetY-$(this).height()/2,
						
						});
						k.css({
						top:event.offsetY,
						left:event.offsetX,
						display:"block"
					});
					}).bind('dragend',function(){
					k.css({
						display:"none"
						});
					$('.s').bind
					});
				
				});
				