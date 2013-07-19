/************************************************
* Global Variables								*
************************************************/
var DivsLoaded	= 0;
var Recall		= 0;

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
		$("#DivA-Container").children('div:first').addClass('hcontent');
		$("#DivB-Container").children('div:first').addClass('vcontent');
		$("#DivC-Container").children('div:first').addClass('vcontent hcontent');	
		$("#DivD-Container").children('div:first').addClass('hcontent');
		
		//Additional working css for above ids
		$("#DivA-Container, #DivB-Container, #DivC-Container, #DivD-Container").css({position:"relative"});
			
		//Assigning positions and display to containers
		var doc = $(document);
		var tar = $("#MainScheduleContainer");
		var tar2 = $("#DivB-Container");
		var tar3 = $("#DivA-Container");
		var len = (doc.width()-tar.width())/2;
		$("#vscroller").css({position:"absolute",top:tar2.offset().top,right:5,width:15,height:tar2.height(),display:"block"});
		$("#hscroller").css({position:"absolute",top:tar.offset().top+tar.height()+5,right:20,width:tar3.width(),height:15,display:"block"});
		
		//Setting scroller width/height
		$(".viewport", "#vscroller").height(tar2.height());
		$(".viewport", "#hscroller").width(tar3.width());
		
		//Initializing tinyscrollbar plugin
			//Note:target option is for scroll target
		$("#vscroller").tinyscrollbar({target:"DivC-Container"});
		$("#hscroller").tinyscrollbar({axis:"x",scroll:false});
		
		// Initialize Qtip
		InitQtip();
		
		// Disable selection
		DisableDivSelection();
		
		$('.DivBG').dragdroper();
		
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