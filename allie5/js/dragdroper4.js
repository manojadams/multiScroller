//dragdroper plugin v 1.0
(function(m){
m.drag=m.drag||{};
m.drag.droper={options:{ctr:"MainScheduleContainer",target:"target",id:1,mode:1,curr:0,stat:0,state:0,atr:new Array(),topper:0,tops:new Array(),lefts:new Array()}};							
m.fn.dragDroper=function(options,callback){
	
	if(typeof callback=='function') callback.call(this);
	var o = m(this).extend({},m.drag.droper.options,options,callback);
	
	m(this).each(function(){//initialize settings
		k = m(this);
		k.addClass('target');
		if(k.attr('data-occupied')=="1") {
			k.addClass('data');
			k.attr('data-id',o.id);o.id++;
			var text = k.text();
			k.children('div:first').html('<span>'+text+'</span>');
			bindPropTwo(k,o);
		}
		else if(k.attr('data-occupied')=="0") doExtras(k,o);
	});
	m('.data').each(function(){
		
		var t = m(this).position().top;
		var l = m(this).position().left;
		if(m(this).hasClass('OddBG'))
		m('<div data-date="" data-time="" data-providerid="" data-occupied="0" class="DivBG OddBG target"></div>').insertAfter(this);
		else {m('<div data-date="" data-time="" data-providerid="" data-occupied="0" class="DivBG EvenBG target"></div>').insertAfter(this);}
		m(this).css({top:t,left:l,position:"absolute"});
		ats = parseInt(m(this).attr('data-id'));
		o.tops[ats] = t;
		o.lefts[ats] = l;
		var ht = m(this).children('div:first').html();
		m(this).children('div:first').html('<div class="dhandle"></div>'+ht);
		m(this).children('div:first').css({textAlign:"left"});
	});
	clickdHandle();
	
	m('.incopy:first').bind('dragstart',function(){
		var clone=m(this).clone();
		clone.attr('id','dragmecur');
		clone.css({position:"absolute",dispaly:"none",width:250});
		m(document.body).append(clone);
		m('.target').bind('mouseup',function(){
			var temp = clone.html();
			m(this).replaceWith(temp);
			m('.incopy').children('div').remove();
			m('.copy').remove();
			m('.tar').css({top:m('.tar:first').position().top,left:m('.tar:first').position().left,position:"absolute"});
			bindPropTwo(m('.tar'),o);
			m('.tar').removeClass('tar');
			clickdHandle();
		});
	})
	.bind('drag',function(e){
		m("#dragmecur").css({top:e.pageY+2,left:e.pageX,display:"block"});
	})
	.bind('dragend',function(){
		m("#dragmecur").remove();
		m('.target').unbind('mouseup');
	});
	
};
function clickdHandle(){
	m('.dhandle').unbind().bind('click',function(){
		var a = m(this).closest('.data');
		a.addClass('copy');
		var c = m('<div>').append(a.clone().css({width:250+"px",position:"relative",top:0,left:0})).remove().html();
		var id = m(c).attr('data-id');
		var check = m("#ClipboardContainer").find('.data').length;
		if(check==0){
			m("#ClipboardContainer").children('.incopy').append(c);
			m('.incopy').children('div:first').removeClass('copy').addClass('tar');
			m("#ClipboardContainer").animate({backgroundColor:"orange"},"fast",function(){
//			m(this).css({backgroundColor:"#DDD"});
			m(this).css({backgroundColor:"#FFF"});
			});
			}
		else if(check==1) alert('Clipboard already contain an appointment');
			
	});
}
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
	
	b.topper=m('#DivC-Container').position().top;
	b.lefter=m('#DivC-Container').position().left;
	a.bind('dragstart',function(){
		m(this).css({opacity: 0.6});
		
	})
	.bind('drag',function(e){
		inc = e.pageY-m('#AppointmentContainer').position().top-b.topper;
		var left1 = Math.floor((e.pageX-m('#DivC-Container').position().left)/250)*250;
		if(left1>=0) {
		if(inc%5==0&&inc>=0){
		var le = m('#AppointmentContainer').position().left-b.lefter;
		
		m(this).css({top:inc,left:left1,zIndex:100});
		var text1 = m(this).text();
		var i = text1.indexOf("(");
		var j = text1.indexOf(")");
		var str1 = text1.substr(0,i);
		
		var val = m(this).position().top;
		t3 = val%60;
		t2 = Math.floor(val/60);
		t4 = Math.floor((val+30)/60);
		t5 = (val+30)%60;
		if(t2<10) t2 = "0"+t2;
		if(t3<10) t3 = "0"+t3;
		if(t4<10) t4 = "0"+t4;
		if(t5<10) t5 = "0"+t5;
		time="( "+t2+":"+t3+" - "+t4+":"+t5+" )";
		m(this).closest('.data').attr('data-time',t2+":"+t3);
		m(this).children('.Qtip').attr('data-starttime',t2+':'+t3);
		m(this).children('.Qtip').attr('data-endtime',t4+':'+t5);
		m(this).find('span').text(str1+time);
		}
		else  m(this).css({left:Math.floor((e.pageX-m('#DivC-Container').position().left)/250)*250});
		}
	})
	.bind('dragend',function(){
		var at = parseInt(m(this).attr('data-id'));
		b.tops[at] = m(this).position().top;
		b.lefts[at] = m(this).position().left;
		for(i=1;i<b.tops.length;i++){//compare the values for similarity
			if(i!=at){
			if((m(this).position().left>=b.lefts[i]-10)&&(m(this).position().left<=b.lefts[i]+10)) {//compute left values
				var top1 = b.tops[i];
				var top2 = m('#'+b.ctr).find('div[data-id='+i+']').height()+top1;
				var top3 = m(this).position().top;
				if((top3>=top1)&&(top3<=top2)){
					m(this).css({width:125,left:m(this).position().left+125});
					m(this).children('div:first').width(125);
					var div = m('#'+b.ctr).find('div[data-id='+i+']');
					div.css({width:125});
					div.children('div:first').css({width:125});
					}
			}
			}
		}
		m(this).css({zIndex:1});
		m(this).css({opacity: 1});
		m(this).find('.dhandle').unbind().bind('click',function(){
			var a = m(this).closest('.data');
			var c = m('<div>').append(a.clone().css({width:250+"px",position:"relative",top:0,left:0})).remove().html();
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
		m('#tabs-1').find('.data').unbind().bind('dragstart',function(){
			m(this).clone();
			clone.attr('id','dragmecur');
			clone.css({position:"absolute",dispaly:"none",width:250});
			m(document.body).append(clone);
		})
		.bind('drag',function(e){
			m('#dragmecur').css({top:e.pageY,left:e.pageX,display:"block"});
		})
		.bind('dragend',function(){
			
		});
		
	});
	
	
	
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
}(jQuery));