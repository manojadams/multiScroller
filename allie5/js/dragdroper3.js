//dragdroper plugin v 1.0
(function(m){
m.drag=m.drag||{};
m.drag.droper={options:{ctr:"MainScheduleContainer",target:"target",id:1,mode:1,curr:0,stat:0,state:0,atr:new Array()}};							
m.fn.dragDroper=function(options,callback){
	
	if(typeof callback=='function') callback.call(this);
	var o = m(this).extend({},m.drag.droper.options,options,callback);
	
	m(this).each(function(){//initialize settings
		k = m(this);
		k.addClass('target');
		if(k.attr('data-occupied')=="1") {
			k.addClass('data');
			k.attr('data-id',o.id);o.id++;
			bindPropOne(k,o);
		}
		else if(k.attr('data-occupied')=="0") doExtras(k,o);
	});
	
	m('#ddswitcher').bind('click',function(){//bind ddswitcher to switch between dragdrop and resize functions
		if(o.mode) {//bind resize functions
			m(this).css({background:"orange"});
			m(this).html('Resize');
			m('div').not('#ddswitcher').unbind('dragstart').unbind('drag').unbind('dragend').unbind('mouseup');	//shutdown bindPropOne() events
			cPropTwo(k,o);			//initialize bindPropTwo() events
			o.mode=0;
		}
		else {//bind dragdrop functions
			m(this).css({background:"green",color:"white"});
			m(this).html('Drag');
			m('div').not('#ddswitcher').unbind();	//shutdown bindPropTwo() events
			cPropOne(k,o);			//initialize bindPropOne() events
			o.mode=1;
		}
	});
	
};
function cPropOne(a,o){
	m('.DivBG.data').each(function(){
		k=m(this);
		bindPropOne(k,o);
	});
}
function cPropTwo(a,o){
		
	m('.DivBG.data').each(function(){
		k=m(this);
		bindPropTwo(k,o);
	});
}
function bindPropOne(a,b){
	
	a.off('dragstart').on('dragstart',function(){
		var clone=m(this).clone();
		clone.attr('id','dragmecur');
		clone.css({position:"absolute",dispaly:"none",width:250});
		m(document.body).append(clone);
			
	m("#tabs").mouseup(function(){
		var c = m('<div>').append(a.clone().css({width:250+"px"})).remove().html();
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
		m("#tabs").unbind('mouseup');
		m('#tabs-1').find('.incopy').each(function(){						//starting step2 binding second dragger
		var k2=m(this).children();
		var k3=m(this).children().attr('data-id');
		
		k2.off('dragstart').on('dragstart',function(e){
			var clone2=m(this).clone();
			clone2.attr('id','dragmecur');
			clone2.css({position:"absolute",dispaly:"none"});
			m(document.body).append(clone2);
			m("#"+b.ctr).find("."+b.target).mouseup(function(){
				var d = m(this).text();
				
				if(d=="") {
					var temp = m('<div>').append(k2.clone()).remove().html();
					var bg=m(this).attr('class');
					var attr=k2.attr('data-id');
					b.atr[attr]=attr;
					temp = m(temp).removeAttr('class');
					temp = m(temp).attr('class',bg);
					temp = m(temp).css({width:250+"px"});
					temp = m(temp).addClass('nw'+attr+' data');
					var t=m(this).replaceWith(temp);
					t.unbind();
					b.stat=1;
					bindPropOne(m('#'+b.ctr).find('.nw'+attr),b);
					}
				else if(!(d=="")) return doOverlap(m(this),b,k2);
						
				});
		}).on('drag',function(e){
					m("#dragmecur").css({top:e.offsetY+20,left:e.offsetX,display:"block"});
					})
		.on('dragend',function(e){
					m("#dragmecur").unbind('mouseup').remove();
					
					m("."+b.target).unbind('mouseup');
					if(b.stat==1) {
						k2.parent().unbind().remove();
						var atr=m(this).attr('data-id');
						var r = m('div[data-id='+b.atr[atr]+']').not('.nw'+b.atr[atr]);
						r.removeClass('data');
						var t=r.replaceWith('<div data-date="" data-time="" data-providerid="1" data-occupied="0" class="'+r.attr('class')+'"></div>');
						t.unbind();
						m('.nw'+b.atr[atr]).removeClass('nw'+b.atr[atr]);
						b.stat=0;
						m('.target').not('#'+b.ctr+' .target').not('#tabs .target').unbind().remove();
						}
					else if(b.stat==2){
						k2.parent().unbind().remove();
						var atr=m(this).attr('data-id');
						var r = m('div[data-id='+b.atr[atr]+']').not('.nw'+b.atr[atr]);
						r.removeClass('data');
						var t=r.replaceWith('<div data-date="" data-time="" data-providerid="1" data-occupied="0" class="'+r.attr('class')+'"></div>');
						t.unbind();
						m('.nw'+b.atr[atr]).removeClass('nw'+b.atr[atr]);
						b.stat=0;
					}
					});
				});
	});
};
function bindPropTwo(a,b){
	a.children('div').resizable({
		resize:function(e,ui){
			
		}
	});
	a.bind('dragstart',function(){
		
		m('.'+b.target).bind('mouseenter',function(){
			if(m(this).text()==""){
				m(this).html(m('<div>').append(a.clone()).remove().html());
				m(this).children('div:first').addClass('enter');
				b.state=0;
				var t = m(this).text();
				var i = t.indexOf("(");
				var j = t.indexOf(")");
				var s = t.substr(i,j-i);
				var rest=t.substr(0,i);
				var t1 = m(this).position().top/25;
				if(t1==0) var a1=0;
				else if(t1%2==0) {a1=t1/2;b1=0;}
				else if(t1%2==1) {a1=(t1-1)/2;b1=30;}
				if(b1==30) {var c=a1+1;var d1=0;}
				else if(b1==0) {c=a1;d1=30;}
				var time = "("+a1+":"+b1+" - "+c+":"+d1+")";
				m(this).children('div:first').children('div:first').text(rest+time);
				
			}
			else {
				//m(this).width(125);
				//m(m('<div>').append(a.clone()).remove().html()).insertAfter(this);
				//alert(m(this).html());
				b.state=1;
			}
		});
		m('.'+b.target).bind('mouseleave',function(){
			if(!b.state){
				m('.enter').remove();
				m(this).removeClass('enter');
			}
		});
		
	})
	.bind('drag',function(){
		
	})
	.bind('dragend',function(){
		m('.'+b.target).unbind('mouseenter').unbind('mouseleave');
		m('div [data-id='+a.attr('data-id')+']').not('.enter').remove();
		m('.enter').removeClass('enter');
		
	});
	
	
	
};
function bindUpdate(a,b){//renew the bindings
	bindPropOne(a,b);
};
function doOverlap(a,b,c){//for overlapping appointments
	if(c.attr('data-id')==a.attr('data-id')) {alert("Same Appointment");return;}
	
	if(a.parent(':[class*="onethird"]').html()==null){
	if((a.closest('.onehalf').children().length==1)||(a.closest('.onehalf').children().length==0)){
		var temp = m('<div>').append(c.clone()).remove().html();
		var temp1=m('<div>').append(a.clone()).remove().html();
		var attr=c.attr('data-id');
		b.atr[attr]=attr;
		temp=m(temp).addClass('nw'+attr+' data');
		var temp2=m('<div data-occupied="1" class="DivBG EvenBG data onehalf">').append(temp).append(temp1);
		a.replaceWith(temp2);
		m('.onehalf').children('.data').css({width:124+"px",overflow:"hidden"});
		b.stat=2;
		bindPropOne(m('#'+b.ctr).find('.nw'+attr),b);
	}
	else if(a.closest('.onehalf').children().length==2){
		var temp = m('<div>').append(c.clone()).remove().html();
		var temp1=a.closest('.onehalf').html();
		var attr=c.attr('data-id');
		b.atr[attr]=attr;
		temp=m(temp).addClass('nw'+attr+' data');
		var temp2=m('<div data-occupied="1" class="DivBG EvenBG data onethird">').append(temp).append(temp1);
		a.closest('.onehalf').replaceWith(temp2);
		m('.onethird').children('.data').css({width:82+"px",overflow:"hidden"});
		b.stat=2;
		bindPropOne(m('#'+b.ctr).find('.nw'+attr),b);
		}
	}
	else if(a.parent(':[class*="onethird"]').html()!=null)
		if(a.closest('.onethird').children().length==3){alert('More than 3 appointments at a time not allowed');}
	return;
}
function doExtras(a,b){
	return;
}
function switchIt(a){
	
}
}(jQuery));