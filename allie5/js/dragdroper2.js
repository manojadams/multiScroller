//dragdroper plugin v 1.0



(function(m){
m.drag=m.drag||{};
m.drag.droper={options:{ctr:"MainScheduleContainer",target:"target",id:1,mode:false}};							
m.fn.dragDroper=function(options,callback){
	
	if(typeof callback=='function') callback.call(this);
	
	var ext=m(this).extend({},m.drag.droper.options,options,callback);
	
	m(this).each(function(){
		var k=m(this);
		k.addClass(ext.target);
		if(k.attr('data-occupied')=="1") {
		
			k.addClass('data');												//starting step1
			k.attr('data-id',ext.id);
			ext.id++;
			k.dblclick(function(e){
				ext.mode=true;
			});
		if(ext.mode){
			if(k.attr('data-occupied')=="1") {
				k.resizable();
			}
		}
		else if(!ext.mode){
			k.bind('dragstart',function(){
				var clone=m(this).clone();
				clone.attr('id','dragmecur');
				clone.css({position:"absolute",dispaly:"none"});
				m(document.body).append(clone);
			
				m("#tabs").mouseup(function(){
					var a = $('<div>').append(k.clone()).remove().html();
				var id=k.attr('data-id');
				var check=$("#tabs-1").find('div [data-id="'+id+'"]').attr('data-id');
				if(check==undefined){
				m("#tabs-1").append('<div class="incopy">'+a+'</div>');
				m("#tabs-1").animate({backgroundColor:"orange"},"fast",function(){
				m(this).css({backgroundColor:"#DDD"});
				});
				}
				else if(id.match(check)) alert('Duplicate Entry');
			});
		}).bind('drag',function(e){
				m("#dragmecur").css({top:e.offsetY+25,left:e.offsetX});
				m("#tabs-1").css('background-color',"#DDD");
							
				
							
				
			
				k.css({backgroundColor:"orange",opacity:0.8});
				
			}).bind('dragend',function(e){
				m('#dragmecur').remove();
				k.css({backgroundColor:"yellow",opacity:1});
				m("#tabs").unbind('mouseup');
				m('#tabs-1').find('.incopy').each(function(){						//starting step2 binding second dragger
					var k2=m(this).children();
					k2.bind('dragstart',function(e){
						var clone2=m(this).clone();
						clone2.attr('id','dragmecur');
						clone2.css({position:"absolute",dispaly:"none"});
						m(document.body).append(clone2);
						
						m("#"+ext.ctr).find("."+ext.target).mouseup(function(){
							var a = m(this).text();
							if(a=="") {
								m(this).addClass('data');
								m(this).html(k2.clone().html());
							}
							else if(!(a=="")) if(confirm('Replace?')){
								m(this).removeClass('nodata');
								m(this).addClass('data');
								m(this).html(k2.clone().html());
							};
							return;
						});
						
						
					}).bind('drag',function(e){
						m("#dragmecur").css({top:e.offsetY+20,left:e.offsetX,display:"block"});
						
						
					}).bind('dragend',function(e){
						m("#dragmecur").unbind('mouseup');
						m("#dragmecur").remove();
						m("."+ext.target).unbind('mouseup');
						
					});
				});
			});
																		
		}
	}	
		//completion for first binding completes here
function reverse_loop(){
		return;
		}
function checkHover(){
	if($.isHovered(k)) alert('hi');
	
}	

		
	})
}
}(jQuery));