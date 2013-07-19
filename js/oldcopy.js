(function(a){
a.mod=a.mod|{};
a.mod.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,size:"auto",sizethumb:"auto",link:0}};

a.fn.modscrollbar=function(d){
	
	var c=a.extend({},a.mod.scrollbar.options,d);
	var str = a(this).html();
	var width = a(this).width();
	a(this).html('');
	a(this).addClass('scroll-selection');
	a(this).append('<div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview"></div></div>');												//append classes dynamically
	a(this).find('.overview').html(str);
	a(this).find('.overview').css('width',width+"px");
	
	if(c.axis=="x") a(this).addClass('hscroll');
	if(c.link) {
				a(this).addClass('vscroll'+c.link);												//Initialising Css Settings
				a(this).find('.scrollbar').css({position:'absolute',left:'-1500px'});
				a(this).find('.viewport').css('height',a(this).height()+'px');
				a(this).find('.overview').css('width',a(this+"tr:first td").length*200+"px");
				var nam1 = "vscroll"+c.link;
				var linker = $(document).find('.linkscroll'+c.link).addClass(nam1);
				var linker = $(document).find('.linkscroll'+c.link).html();
				if(linker) {
							var nam2 = ".linkscroll"+c.link;
							$(document).find(nam2).html('');
						}
				$(document).find('.linkscroll'+c.link).append('<div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>');
				}
	this.each(function(){
				a(this).data("tsb",new b(a(this),c))
				});
	return this
	};
	
a.fn.modscrollbar_update=function(c)
	{
	return a(this).data("tsb").update(c)
	};

	function b(q,g){                                 //start of main function b
		var k=this,	t=q;
			if(!g.link) {
				j={
					obj:a(".viewport",q)				//getting object with class "viewport"
				},
				h={
					obj:a(".overview",q)			//getting object with class "overview"
				}
				}
			else {
				var nam3=".vscroll"+g.link;
				var linker=$(document).find(nam3);
				j={
					obj:a(".viewport",linker)				//getting object with class "viewport"
				},
				h={
					obj:a(".overview",linker)			//getting object with class "overview"
				}
			}
				
			if(!g.link){							//executes generally when link is 0
				var d={
					obj:a(".scrollbar",q)			//getting object with class "scrollbar"
				},
				m={
					obj:a(".track",d.obj)			//getting object with class "track"
				},
				p={
					obj:a(".thumb",d.obj)		    //getting object with class "thumb"
				}
			}
				 									//WORK WITH THE LINKING OF CURSOR POINTERS
				else {
					var nam4=".vscroll"+g.link;
					$(document).find("#tabs-1").html(nam4);
					var linker=$(document).find(nam4);
					d={
					obj:a(".scrollbar",linker)			//getting object with class "scrollbar"
				},
				m={
					obj:a(".track",d.obj)			//getting object with class "track"
				},
				p={
					obj:a(".thumb",d.obj)		    //getting object with class "thumb"
				}
				
				}
				
				var l=g.axis==="x",
				n=l?"left":"top",
				v=l?"Width":"Height",
				r=0,
				y={start:0,now:0},
				o={},
				e=("ontouchstart" in document.documentElement)?true:false;
				
				function c(){						//first child function of b
							k.update();
							s();
							return k
							}
							
				this.update=function(z){
							j[g.axis]=j.obj[0]["offset"+v];
							h[g.axis]=h.obj[0]["scroll"+v];
							h.ratio=j[g.axis]/h[g.axis];
							
							d.obj.toggleClass("disable",h.ratio>=1);
							m[g.axis]=g.size==="auto"?j[g.axis]:g.size;
							p[g.axis]=Math.min(m[g.axis],Math.max(0,(g.sizethumb==="auto"?(m[g.axis]*h.ratio):g.sizethumb)));
							
							d.ratio=g.sizethumb==="auto"?(h[g.axis]/m[g.axis]):(h[g.axis]-j[g.axis])/(m[g.axis]-p[g.axis]);
							r=(z==="relative"&&h.ratio<=1)?Math.min((h[g.axis]-j[g.axis]),Math.max(0,r)):0;
							r=(z==="bottom"&&h.ratio<=1)?(h[g.axis]-j[g.axis]):isNaN(parseInt(z,10))?r:parseInt(z,10);
							w()
							};
							
				function w()						//second child function of b
							{
								var z=v.toLowerCase();
								p.obj.css(n,r/d.ratio);
								h.obj.css(n,-r);
								o.start=p.obj.offset()[n];
								d.obj.css(z,m[g.axis]);
								m.obj.css(z,m[g.axis]);
								p.obj.css(z,p[g.axis])
							}
				function s(){						//third child function of c
							if(!e){
								p.obj.bind("mousedown",i);
								m.obj.bind("mouseup",u)
								}
							else{
							j.obj[0].ontouchstart=function(z)
													{if(1===z.touches.length){
																			i(z.touches[0]);z.stopPropagation()
																			}
													}
								}
							if(g.scroll&&window.addEventListener){
													t[0].addEventListener("DOMMouseScroll",x,false);
													t[0].addEventListener("mousewheel",x,false)
													}
							else{
								if(g.scroll){
											t[0].onmousewheel=x}
											}
							}
				function i(A){       				//fourth child function of b
							var z=parseInt(p.obj.css(n),10);
							o.start=l?A.pageX:A.pageY;
							y.start=z=="auto"?0:z;
							if(!e){
									a(document).bind("mousemove",u);
									a(document).bind("mouseup",f);
									p.obj.bind("mouseup",f)
								}
							else{
									document.ontouchmove=function(B){
																	B.preventDefault();
																	u(B.touches[0])};
																	document.ontouchend=f
										}
									}
				function x(B){						//fifth child function of b
							if(h.ratio<1){
							var A=B||window.event,
							z=A.wheelDelta?A.wheelDelta/120:-A.detail/3;
							r-=z*g.wheel;
							r=Math.min((h[g.axis]-j[g.axis]),Math.max(0,r));
							p.obj.css(n,r/d.ratio);
							h.obj.css(n,-r);
							if(g.lockscroll||(r!==(h[g.axis]-j[g.axis])&&r!==0)){
																		A=a.event.fix(A);A.preventDefault()
																			}
												}
							}
				
				function u(z){						//sixth child function of b
									if(h.ratio<1){
										if(!e){
											y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+((l?z.pageX:z.pageY)-o.start))))
											}
										else{
											y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+(o.start-(l?z.pageX:z.pageY)))))
											}
										r=y.now*d.ratio;
										h.obj.css(n,-r);
										p.obj.css(n,y.now)}
								}
				function f(){						//seventh child function of b
									a(document).unbind("mousemove",u);
									a(document).unbind("mouseup",f);
									p.obj.unbind("mouseup",f);
									document.ontouchmove=document.ontouchend=null
							}
									
				return c();															//end of function b
				}
						}(jQuery));