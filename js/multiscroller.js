/**Notes:
	Need to initialize vmultiscroller/hmultiscroller first 
	Need to specify ids for vmultiscroller/hmultiscroller first
	vcontent initially takes the height of first children of whomever initialized it
	vscroller takes the height as set in css and calculate height from there...
	
**/
 
 (function (m){
 
 m.multi=m.multi||{};
 m.multi.scroller={options:{axis:"y",scroll:true,height:0,wheel:40,vs:0,hs:0,vc:0,dheight:0,dwidth:0,h:0,w:0,ratio:0,ratio2:0,wd:0}};
 
 m.fn.vmultiscroller=function(){//for initializing vscroller
	
		if(!(m.multi.scroller.options.vs)){
		m(this).html('<div id="vscrollbar"><div id="vthumb"></div></div>');
		
		m.multi.scroller.options.vs=1;
	}
 }
m.fn.hmultiscroller=function(){//for initializing hscroller
	
		if(!(m.multi.scroller.options.hs)){
		m(this).html('<div id="hscrollbar"><div id="hthumb"></div></div>');
		
		m.multi.scroller.options.hs=1;
		}
 }

  
 m.fn.multiscroller=function(a){//core plugin function
 
var e = m(this).extend({},m.multi.scroller.options,a);
if(e.axis=="y") {
	if(e.vs) {//checking if vmultiscroller initialized
				
				var ct=m(this).html();
				m(this).html('<div class="vcontent">'+ct+'</div>');
				if(!e.vc){//if vcontent height not set then set it
						var h=m(this).children().height();
						e.h=h;
						m('.vcontent').height();
						e.vc=1;
						e.dheight=m(this).height();
						ratio1=$('.vcontent').height()/$('#vscrollbar').height();
						e.ratio=ratio1;
						initBind(m(this),e);
						initScroll(m(this),e);
				}
				
	}
	else {alert('vmultiscroller not initialized');return }
}
if(e.axis=="x") {
	if(e.hs) {//checking if hmultiscroller initialized
				
				var ct=m(this).html();
				m(this).html('<div class="hcontent">'+ct+'</div>');
				if(!e.vc){//if hcontent height not set then set it
						var w=m(this).children().width();
						e.wd=w;
						m('.hcontent').width();
						e.hc=1;
						e.dwidth=m(this).width();
						ratio=$('.hcontent').width()/$('#hscrollbar').width();
						e.ratio2=ratio;
						initBind(m(this),e);
						
				}
				
	}
	else {alert('hmultiscroller not initialized');return }
}

function initBind(a,b){
if(b.axis=="y"){

		var h1 = m.multi.scroller.options.h=b.h;
		var h2 = m.multi.scroller.options.dheight=b.dheight;
		$("#vthumb").bind('drag',function(e){		
		var t= e.offsetY;
		moveIt(t,ratio,h2-h1,0);
		});
		$('#vthumb').parent().bind('click',function(e){
			var t = e.offsetY;
			moveIt(t,b.ratio1,h2-h1,0);
		});
	}
else if(b.axis=="x"){

		var w1 = m.multi.scroller.options.wd=b.wd;
		var w2 = m.multi.scroller.options.dheight=b.dwidth;
		if((w2-w1)==0) return;
		else {
		$("#hthumb").bind('drag',function(e){
			
			moveIt(e.offsetX,b.ratio2,w2-w1,1);
		});
		}

	}
	
}
function initScroll(a,e){
	if((e.scroll)&&(window.addEventListener)) {
				a[0].addEventListener("DOMMouseScroll",x,false)||a[0].addEventListener("mousewheel",x,false);
				}
	else{
				if(a.scroll){
				a[0].onmousewheel=x}
			}	
}
function x(e){

		e.preventDefault();
		var a=e||window.event;
		var k=$('.vcontent');
		z=a.wheelDelta?a.wheelDelta/120:-a.detail/3;
		var r=m.multi.scroller.options;
		r.w+=z*40;
		
		if((k.position().top>=r.dheight-r.h)&&(k.position().top<=0)){
			k.css({top:r.w});
			$("#vthumb").css({top:-r.w/r.ratio});
		}	
		else if(r.w>0||k.position().top>0) {k.css({top:0});r.w-=z*40;}
		else if(r.w<r.dheight-r.h) {k.css({top:r.dheight-r.h});r.w-=z*40;}
		return r.w;	
		
} 
function moveIt(t,r,h,s){
		var k = $(".vcontent");
		var k3 = $(".hcontent");
		var k1=k.position().top;
		var k2=k3.position().left;
		var r1=m.multi.scroller.options;
		if(!s){
	if((k1<=0)&&(k1>=h)){
	
		$("#vthumb").css({
			top:t
			
		});
		
		k.css({
			top:t*(-r)
			
		});
		r1.w+=40;
	}
	else if(k1>0) {k.css({top:0});$("#vthumb").css({top:0});r1.w-=40;}
	else if(k1<h) {k.css({top:h});$("#vthumb").css({top:-h/r});r1.w-=40;}
	}
	if(s==1) {
		
		if((k2<=0)&&(k2>=h)){
		
		$("#hthumb").css({
			left:t
			
		});
		
		k3.css({
			left:t*(-r)
			
		});
		
	}
	else if(k2>0) {k3.css({left:0});$("#hthumb").css({left:0});}
	else if(k2<h) {k3.css({left:h});$("#hthumb").css({left:-h/r});}
	}
}

 };
 }(jQuery));
 