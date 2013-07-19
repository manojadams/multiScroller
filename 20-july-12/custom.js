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
	if (DivsLoaded == 4)
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
		
		//Initializing containers for vertical scroller and horizontal scroller
		//Note: it is best if this containers are present by default
		$(document.body).append('<div id="vscroller"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview"></div></div></div>');
		$(document.body).append('<div id="hscroller"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview"></div></div></div>');
		
		//Assigning positions and display to containers
		var doc = $(document);
		var tar = $("#MainScheduleContainer");
		var tar2 = $("#DivB-Container");
		var tar3 = $("#DivA-Container");
		var len = (doc.width()-tar.width())/2;
		$("#vscroller").css({position:"absolute",top:tar2.offset().top,left:tar.width()+(doc.width()-tar.width())/2,width:15,height:tar2.height(),display:"block"});
		$("#hscroller").css({position:"absolute",top:tar.offset().top+tar.height()+5,left:len+tar2.width(),width:tar3.width(),height:15,display:"block"});
		
		//Setting scroller width/height
		$(".viewport", "#vscroller").height(tar2.height());
		$(".viewport", "#hscroller").width(tar3.width());
		
		//Initializing tinyscrollbar plugin
			//Note:target option is for scroll target
		$("#vscroller").tinyscrollbar({target:"DivC-Container"});
		$("#hscroller").tinyscrollbar({axis:"x",scroll:false});
		
		window.console.log('custom.js - LoadMainFunctions() -  All Contents Loaded - DivsLoaded: '+DivsLoaded);






	}
	
	return true;		
}
// End InitTinyScroller()

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
* Load/Call Required Functions					*
************************************************/
$().ready(function() {
	window.console.log('custom.js loaded.');	

	// Get DIVs contents
	GetDIVsContent();
});