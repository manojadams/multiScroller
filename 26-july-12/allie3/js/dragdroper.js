//dragdroper plugin v 1.0
(function(m){
m.drag=m.drag||{};
m.drag.droper={options:{ctr:"MainScheduleContainer",target:0,id:1,mode:false,curr:0,stat:0,atr:new Array()}};							
m.fn.dragDroper=function(options,callback){
	
	if(typeof callback=='function') callback.call(this);
	var o = m(this).extend({},m.drag.droper.options,options,callback);
	
	m(this).each(function(){
		k = m(this);
		k.addClass('target');
		if(k.attr('data-occupied')=="1") {
			k.addClass('data');
			k.attr('data-id',o.id);o.id++;
			k.bind('dblclick',function(){
				if(o.curr) {//if curr is not zero(default)
				
					if(o.curr==k.attr('data-id')) 
						{
						k.unbind('dragstart').unbind('drag').unbind('dragend');
						bindPropOne(k,o);
						curr=0;
						}
					else alert('Release double click first');
					}
				else {//if curr is zero
					o.curr==k.attr('data-id');
					k.unbind('dragstart').unbind('drag').unbind('dragend');
					bindPropTwo(k,o);
				}
		
		
			});
			bindPropOne(k,o);
		}
		else if(k.attr('data-occupied')=="0") doExtras(k,o);
	});
};
function bindPropOne(a,b){
	
	a.on('dragstart',function(){
		var clone=m(this).clone();
		clone.attr('id','dragmecur');
		clone.css({position:"absolute",dispaly:"none"});
		m(document.body).append(clone);
			
	m("#tabs").mouseup(function(){
		var c = m('<div>').append(a.clone()).remove().html();
		var id = m(c).attr('data-id');
		var check = m("#tabs-1").find('div [data-id="'+id+'"]').attr('data-id');
		if(check==undefined){
			m("#tabs-1").append('<div class="incopy">'+c+'</div>');
			m("#tabs-1").animate({backgroundColor:"orange"},"fast",function(){
			m(this).css({backgroundColor:"#DDD"});
			});
			}
		else if(id.match(check)) alert('Duplicate Entry');
			});
		})
	.on('drag',function(e){
		m("#dragmecur").css({top:e.offsetY+25,left:e.offsetX});
		m("#tabs-1").css('background-color',"#DDD");
		a.css({opacity:0.8});
	})
	.on('dragend',function(){
		m('#dragmecur').remove();
		k.css({backgroundColor:"yellow",opacity:1});
		m("#tabs").unbind('mouseup');
		m('#tabs-1').find('.incopy').each(function(){						//starting step2 binding second dragger
		var k2=m(this).children();
		var k3=m(this).children().attr('data-id');
		
		k2.on('dragstart',function(e){
			var clone2=m(this).clone();
			clone2.attr('id','dragmecur');
			clone2.css({position:"absolute",dispaly:"none"});
			m(document.body).append(clone2);
			
			m("#"+b.ctr).find("."+b.target).mouseup(function(){
				var d = m(this).text();
				if(d=="") {
					var temp = m('<div>').append(k2.clone()).remove().html();
					
					var attr=k2.attr('data-id');
					b.atr[attr]=attr;
					temp = m(temp).addClass('nw'+attr);
					m(this).replaceWith(temp);
					b.stat=1;
					bindPropOne(m('#'+b.ctr).find('.nw'+attr),b);
					
					}
				else if(!(d=="")) doOverlap(m(this),b,k2);
						
				});
		}).on('drag',function(e){
					m("#dragmecur").css({top:e.offsetY+20,left:e.offsetX,display:"block"});
						})
		.on('dragend',function(e){
					m("#dragmecur").unbind('mouseup');
					m("#dragmecur").remove();
					m("."+b.target).unbind('mouseup');
					if(b.stat==1) {
						k2.parent().remove();
						var atr=m(this).attr('data-id');
						
						m('div[data-id='+b.atr[atr]+']').not('.nw'+b.atr[atr]).replaceWith('<div data-date="" data-time="" data-providerid="1" data-occupied="0" class="DivBG OddBG target"></div>');
						m('.nw'+b.atr[atr]).removeClass('nw'+b.atr[atr]);
						b.stat=0;
						m('.target').not('#'+b.ctr+' .target').not('#tabs .target').remove();
						}	
					
					});
				});
	});
};
function bindPropTwo(a,b){
	alert('doubleclicked on this id'+a.attr('data-id'));
};
function bindUpdate(a,b){//renew the bindings
	bindPropOne(a,b);
};
function doOverlap(a,b,c){//for overlapping appointments
	
	if((a.closest('.onehalf').children().length==1)||(a.closest('.onehalf').children().length==0)){
		var temp = m('<div>').append(c.clone()).remove().html();
		var temp1=m('<div>').append(a.clone()).remove().html();
		var temp2=m('<div data-occupied="1" class="DivBG EvenBG data onehalf">').append(temp).append(temp1);
		a.replaceWith(temp2);
		m('.onehalf').children('.data').css({width:124+"px",overflow:"hidden"});
		
		
	}
	if(a.closest('.onehalf').children().length==2){
		var temp = m('<div>').append(c.clone()).remove().html();
		var temp1=a.closest('.onehalf').html();
		
		var temp2=m('<div data-occupied="1" class="DivBG EvenBG data onehalf">').append(temp).append(temp1);
		alert(temp2.html());
		a.replaceWith(temp2);
		m('.onehalf').children('.data').css({width:82+"px",overflow:"hidden"});
		}
	if(a.closest('.onehalf').children().length==3){alert('hi3');}
	
	
}
function doExtras(a,b){
	return;
}
}(jQuery));