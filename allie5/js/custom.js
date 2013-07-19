/************************************************
* Global Variables								*
************************************************/
var DivsLoaded	= 0;
var Recall		= 0;
var roll = 0;
/************************************************
* Initiate Main Scheduler Functions				*
************************************************/
function LoadMainFunctions()
{
	// Check all DIVs content are loaded
	if (DivsLoaded != 4)
	{
		// Divs content not fully loaded
		// Wait 100ms and then re-init function
		setTimeout(function () {

			// Add timer to prevent infinite loop
			Recall++;
			
			if (Recall < 50)
			{
				LoadMainFunctions();
			}
			
		}, 100);
		return;			
	}
	else if (DivsLoaded == 4)
	{
		// All DIVs contents loaded.
		// Load main functions such as Tinyscrollbar and other required plugins 
		
		//Adding classes "vcontent" for vertical scrolling and "hcontent" for horizontal scrolling
		//Note: assuming that the first div children is the movable container
		/*$("#DivA-Container").children('div:first').addClass('hcontent');
		$("#DivB-Container").children('div:first').addClass('vcontent');
		$("#DivC-Container").children('div:first').addClass('vcontent hcontent');	
		$("#DivD-Container").children('div:first').addClass('hcontent');
		
		
			
		//Assigning positions and display to containers
		var doc = $(document);
		var tar = $("#MainScheduleContainer");
		var tar2 = $("#DivB-Container");
		var tar3 = $("#DivA-Container");
		var tar4 = $("#DivC-Container");
		var len = (doc.width()-tar.width())/2;
		$("#vscroller").css({position:"absolute",top:tar2.offset().top,right:5,width:15,height:tar2.height(),display:"block"});
		$("#hscroller").css({position:"absolute",top:tar.offset().top+tar.height()+5,right:20,width:tar3.width(),height:15,display:"block"});
		
		$('.vcontent').height(tar4.children('div:first').height());
		
		//Setting scroller width/height
		$(".viewport", "#vscroller").height(tar2.height());
		$(".viewport", "#hscroller").width(tar3.width());
		
		//Initializing tinyscrollbar plugin
			//Note:target option is for scroll target
		$("#vscroller").tinyscrollbar({target:"DivC-Container"});
		$("#hscroller").tinyscrollbar({axis:"x",scroll:false});
		*/
		//Additional working css for above ids
		$("#DivA-Container, #DivB-Container, #DivC-Container, #DivD-Container").css({position:"relative"});
		var m = $('#MainScheduleContainer');
		m.width($(document).width()-357);
		$('#DivA-Container').width(m.width()-80);
		$('#DivC-Container').width(m.width()-80);
		$('#DivD-Container').width(m.width()-80);

		$(window).resize(function(){
			var m = $('#MainScheduleContainer');
			m.width($(document).width()-357);
			$('#DivA-Container').width(m.width()-80);
			$('#DivC-Container').width(m.width()-80);
			$('#DivD-Container').width(m.width()-80);
		});
		
		// Initialize Qtip
		//InitQtip();
		
		// Disable selection
		DisableDivSelection();
		
		//Initializing Clipboards and Calenders
		$('#tabs').tabs();
		
		//Initializing DragDroper Plugin
		$('.DivBG').dragDroper({target:"target"});
		$('.Qtip').resizable({resize:function(e){
			$(this).closest('.data').css({zIndex:10});
			var value = e.offsetY;
			var height = $(this).height();
			if(height%5==0) {
				var text1 = $(this).children('span').text();
				var val2 = $(this).attr('data-starttime');
				var val3 = parseInt(val2.substr(3,2));
				var val4 = parseInt(val2.substr(0,2));
				var i = text1.indexOf("-");
				var str1 = text1.substr(0,i+1);
				var t1 = Math.floor((val3+height)/60)+val4;
				var t2 = Math.floor((val3+height)%60);
				if(t1<10) t1="0"+t1;
				if(t2<10) t2="0"+t2;
				$(this).children('span').text(' '+str1+t1+':'+t2+')');
			}
		},
		stop:function(){
			$(this).closest('.data').css({zIndex:1});
			
		}});
		window.console.log('custom.js - LoadMainFunctions() -  All Contents Loaded - DivsLoaded: '+DivsLoaded);
	}
	
	return true;		
}
// End InitTinyScroller()

/************************************************
* Initialize Qtip plugin						*
************************************************/
function InitQtip()
{
	$(".Qtip").qtip({
		content: {
			attr: 'alt'
		},
		position: {
			my: 'left center',  // Position my top left...
			at: 'right center' // at the bottom right of...
		},
		style: {
			classes: 'ui-tooltip-dark ui-tooltip-shadow ui-tooltip-rounded'
		}
	});	
}
// End InitQtip()

/************************************************
* Get DIVs Content								*
************************************************/
function GetDIVsContent()
{
	// Load contents for the 4 DIVs
	$('#DivA-Container').load('DivA.php', function() {
  		DivsLoaded	= DivsLoaded + 1;		
		window.console.log('custom.js - GetDIVsContent() - DIV A - DivsLoaded: '+DivsLoaded);
	});
	
	$('#DivB-Container').load('DivB.php', function() {
  		DivsLoaded	= DivsLoaded + 1;
		window.console.log('custom.js - GetDIVsContent() - DIV B - DivsLoaded: '+DivsLoaded);
	});
	
	$('#DivC-Container').load('DivC.php', function() {
  		DivsLoaded	= DivsLoaded + 1;
		window.console.log('custom.js - GetDIVsContent() - DIV C - DivsLoaded: '+DivsLoaded);
	});
	
	$('#DivD-Container').load('DivD.php', function() {
  		DivsLoaded	= DivsLoaded + 1;
		window.console.log('custom.js - GetDIVsContent() - DIV D - DivsLoaded: '+DivsLoaded);
	});
	
	// Load main JS function
	LoadMainFunctions();
	
	return true;
}
// End GetDIVsContent()

/************************************************
* Disable Text Selection						*
************************************************/
function DisableDivSelection()
{
	window.console.log('custom.js - DisableDivSelection() triggered');	
	var TotalDivs	= 0;
	
	// Find all DIV elements
	$("body > div").each(function(){
		var context = $(this);
		context.addClass('unselectable');
		context.attr('unselectable','on');
		
		TotalDivs++;
	});
	// End find all DIVs elements	
	
	window.console.log('custom.js - DisableDivSelection() - Total Divs: '+TotalDivs);	
	
	return true;
}
// End DisableDivSelection()

/************************************************
* Load/Call Required Functions					*
************************************************/
$().ready(function() {
	window.console.log('custom.js loaded.');	

	// Get DIVs contents
	GetDIVsContent();
});