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