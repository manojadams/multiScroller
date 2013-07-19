$(document).ready(function(){
				
				var l=$("#LeftScrollableDiv");
				var r=$("#RightScrollableDiv");
				var t=$("#TopScrollableDiv");
				var b=$("#BottomScrollableDiv");
				
				init(l,1);
				init(r,1);
				init(r,2);
				init(t,0);
				init(b,0);
				
				function init(ele,dir){
				var content=ele.html();
				ele.html('');
				if(dir==1)
				ele.append('<div class="container2">'+content+'</div>');
				else if(dir==0) ele.append('<div class="container1">'+content+'</div>');
				else if(dir==2) {ele.html(content);ele.find('.container2').addClass('container1');}
				}
				function reset(){
					w = $("#TopScrollableDiv tr:first td").length*200;
					h = $("#LeftScrollableDiv tr").length*30;
					$('.container1').width(w);
					$('.container2').height(h);
					var h1 = $("#LeftScrollabldeDiv").height();
					var w1 = $("#TopScrollableDiv").width();
					$("#vscroller").parent().height(h1);
					$("#vscroller").height(50);
					$("#hscroller").parent().width(w1);
					$("#hscroller").width(500);
					
				}
				function validate(){
					if(l.height()==r.height())
						bindEvents(1,0);
					if((t.width()==b.width())&&(b.width()==r.width()))  bindEvents(0,1);
						
				}
				function bindEvents(a,b){
                                        var ele=$('.container2');
					if(a)
					   $('#vscroller').bind('drag',function( event ){
						var k=$(this);
					    var limitY = l.height();
                                            var val=limitY-ele.height();
						if((event.offsetY<limitY)&&(event.offsetY>0)){
						$( this ).css({
                                                   top: event.offsetY-$(this).height()/2
						
                        });
						var a=parseFloat($(this).css('top'));
						$(".container2").css({top:-(a*$('.container2').height()/k.parent().height())+"px"});
						}
					});
					if(b)
					$('#hscroller').bind('drag',function( event ){
						var k=$(this);
						var limitX = t.width();
						
						if((event.offsetX>=k.width()/2)&&(event.offsetX<=(limitX-k.width()/2)))
						
						{
							$( this ).css({
							left: event.offsetX-$(this).width()/2             
							});
							var a=parseFloat($(this).css('left'));
							
							$(".container1").css({left:-(a*$('.container1').width()/k.parent().width())+"px"});
						}
						
					});
				}
				var p1 = $("#vscroller").parent();
				p1.click(function(e){
					 var y = e.pageY - this.offsetTop;
					 y = y-$("#vscroller").height();
					 var diff = $(this).height()-$("#vscroller").height()
					 if(y>diff) 
						{
							$("#vscroller").css({top:diff+"px"});
							$(".container2").css({top:-(diff*$(".container2").height()/$(this).height())+"px"});
						}
					 else {
						$("#vscroller").css({top:y+"px"});
						$(".container2").css({top:-(y*$(".container2").height()/$(this).height())+"px"});
					 }
					 
				})
				
				
				validate(rat=reset());
				
			
				
				
			});	