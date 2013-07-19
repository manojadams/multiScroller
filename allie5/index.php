<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>JQuery Scheduler Plugin</title>

<!-- Core JQuery, JQuery UI and JQuery UI CSS -->
<script type="text/javascript" src="jquery/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="jquery/jquery-ui-1.8.21.custom.min.js"></script>
<link href="jquery/redmond/jquery-ui-1.8.21.custom.css" rel="stylesheet" type="text/css" />

<!-- JQuery Plugins 
<script type="text/javascript" src="js/jquery.tinyscrollbar.min.js"></script>
-->
<script type="text/javascript" src="js/jquery.event.drag-1.5.min.js"></script>
<!--Jquery Based DragDroper Plugin-->
<script type="text/javascript" src="js/dragdroper4.js"></script>
<link href="css/custom.css" rel="stylesheet" type="text/css" />

<!-- JQuery Qtip Plugin -->
<link href="js/qtip/jquery.qtip.min.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/qtip/jquery.qtip.min.js"></script>

<!-- Custom JS File -->
<script type="text/javascript" src="js/custom.js"></script>

<!--Custom Css File -->
<link href="css/tinyscrollbar.css" rel="stylesheet" type="text/css" />

<!-- CSS Files -->
<link href="css/style.css" rel="stylesheet" type="text/css" />

</head>
<body>


<!--Start Calender and Clipboard Container-->


<!-- Start Clipboard Container -->
<div id="ClipboardContainer">
<div style="text-align:center; font-weight:bold; color:#039;">Clipboard</div>
<hr class="grey" />
<div class="incopy"></div>
</div>
<!-- End Clipboard Container -->

<!-- Start Main Container -->
<div id="MainScheduleContainer">

<div id="Top-Spacer">
</div>
<div id="DivA-Container"></div>
<br />
<div id="DivB-Container"></div>
<div id="DivC-Container"></div>
<br />
<div id="Bottom-Spacer">
<div class="DivDTitles">Total Clients</div>
<div class="DivDTitles-Middle">New Clients</div>
<div class="DivDTitles">Percentage</div>
</div>
<div id="DivD-Container"></div>

<br />
</div>
<!-- End Main Container -->

<!-- Start Vertical Scroller Containers -->
<div id="vscroller">
	<div class="scrollbar">
		<div class="track">
			<div class="thumb">
				<div class="end"></div>
			</div>
        </div>
    </div>
	<div class="viewport">
    	<div class="overview"></div>
	</div>
</div>
<!-- End Vertical Scroller Containers -->
<!-- Start Horizontal Scroller Containers -->
<div id="hscroller">
	<div class="scrollbar">
    	<div class="track">
        	<div class="thumb">
            	<div class="end"></div>
            </div>
        </div>
    </div>
 	<div class="viewport">
    	<div class="overview"></div>
    </div>
</div>
<!-- End Horizontal Scroller Containers -->

</body>
</html>