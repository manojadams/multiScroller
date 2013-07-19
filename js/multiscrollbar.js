(function(m){//Must use the drag plugin for it to work

m.multi=m.multi||{};

m.multi.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,width:200,height:32}};

m.fn.multiscrollbar=function(e){

var c = m.extend({},m.multi.scrollbar.options,e);
$(this).html('');
var r = dataValidation(m(this),c);
if(r){
setProperties(m(this),c);
if(!(r-1)) initDisplay(m(this),c);

bindDrag(m(this),c);
}
else {alert('Data Validation Failed');return false;}
return this
};

function setProperties(a,b){//will be working with two main classes that is containerV and containerH

var tmp=a.html();
a.html('');
	
if(b.axis=="y"){	
	a.append('<div class="containerV">'+tmp+'</div>');				//appending content
	m('.containerV').css({height:a.find('tr').length*b.height});	//setting height--NOTE: for tables only
	
}
if(b.axis=="x"){
	a.append('<div class="containerH">'+tmp+'</div>');				//appending content
	m('.containerH').css({height:a.find('tr:first td').length*b.width});	//setting height--NOTE: for tables only
	
}
}
function initDisplay(a,b){

	a.css({position:"relative",overflow:"hidden"});
	var msg1='No Scroller ids detected, please assign one';
	var msg2='Multiple Scrollers detected, assign only one';
	
	if(b.axis=="y"){
		m('.containerV:first',a).css({position:"absolute",top:0,left:0});
		var str=$(document).find('#vScroller');
		if(str.length==0) alert(msg1+',vScroller');
		if(str.length>1) alert(msg2+',vScroller');
		
		}
	
	if(b.axis=="x"){
		m('.containerH:first',a).css({position:"absolute",top:0,left:0});
		var str=$(document).find('#hScroller');
		if(str.length==0) alert(msg1+',hScroller');
		if(str.length>1) alert(msg2+',hScroller');
	}
}

function dataValidation(a,b){
	
	if(b.axis=="y") if($(document).find('.containerV').length==0) return 1;
	else {//check validity
		var a=$(document).find('.containerv');
		for(i=0;i<=a.length;i++){
			if(a[i].find('tr').length!=a[++i].find('tr').length) 
								return false;	//counting the number of columns Note:Only valid for tables
		}
		
	}
	if(b.axis=="x") if($(document).find('.containerH').length==0) return 1;
	
	else {//check validity
		var a=$(document).find('.containerH');
		for(i=0;i<=a.length;i++){
			if(a[i].find('tr:first td').length!=a[++i].find('tr:first td').length) 
								return false;	//counting the number of columns Note:Only valid for tables
		}
		
	}
	
}
function bindDrag(a,b){
	if(b.axis=="y") {
		$("#vScroller").bind('drag',function(e){
				$(this).css({
                        top: event.offsetY-$(this).height()/2
						
                        });
			
		});
	}
}
}(jQuery));
