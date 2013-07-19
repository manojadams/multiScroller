//dragdropper plugin v 1.0

(function(m){
m.drag=m.drag||{};
m.drag.droper={options:{target:"target"}};//target specifies the target class to drop items to
m.fn.dragDroper=function(options,callback){
	
	if(typeof callback=='function') callback.call(this);
	
	var ext=m(this).extend({},m.drag.droper.options,options,callback);
	m(document.body).append('<img id="dragme" width="15" height="15"></img>');
	m(document.body).append('<form id="editme" width="300" height="300"><textarea></textarea></form>');
	m(this).each(function(){
		var k=m(this);
		if(k.text()=="") k.addClass('nodata');
		else {
		
		k.addClass('data');												//starting step1
		k.dblclick(function(e){
			m(this).resizable();
		});
		k.bind('dragstart',function(){													
			m("#tabs").mouseup(function(){
				var a=k.parent().clone().html();
				var id=k.attr('id');
				var check=$("#tabs-1").find('div [id="'+id+'"]').attr('id');
				if(check==undefined){
				m("#tabs-1").append('<div class="incopy">'+a+'</div>');
				m("#tabs-1").animate({backgroundColor:"orange"},"fast",function(){
					m(this).css({backgroundColor:"#DDD"});
				});
				}
				else if(id.match(check)) alert('Duplicate Entry');
			});
		}).bind('drag',function(e){
				m('#dragme').css({
					top: e.offsetY+20,
					left: e.offsetX,
					display: "block"
				});
				k.css({backgroundColor:"orange",opacity:0.8});
				
			}).bind('dragend',function(e){
				m('#dragme').css({
					display: "none"
				});
				k.css({backgroundColor:"yellow",opacity:1});
				m("#tabs").unbind('mouseup');
				
				m('#tabs-1').find('.appointment').each(function(){						//starting step2 binding second dragger
					var k2=m(this);
					m(this).bind('dragstart',function(e){
						m("."+ext.target).mouseup(function(){
							var a = m(this).text();
							if(a=="") {
								m(this).removeClass('nodata');
								m(this).addClass('data');
								m(this).html(k2.clone().html());
							}
							else if(confirm('Replace?')){
								m(this).removeClass('nodata');
								m(this).addClass('data');
								m(this).html(k2.clone().html());
							};
							return;
						});
					}).bind('drag',function(e){
						m("#dragme").css({
							display:"block",
							top: e.offsetY,
							left: e.offsetX
						});
					}).bind('dragend',function(){
						m("#dragme").css({
							display:"none",
							
						});
						m("."+ext.target).unbind('mouseup');
					});
				});
			});
																		
		}
		
		//completion for first binding completes here
function reverse_loop(){
		return;
		}
		
	});
}
}(jQuery));