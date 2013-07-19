<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>JQuery Scheduler Plugin</title>

<!-- Core JQuery, JQuery UI and JQuery UI CSS -->
<script type="text/javascript" src="jquery/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="jquery/jquery-ui-1.8.21.custom.min.js"></script>
<link href="jquery/redmond/jquery-ui-1.8.21.custom.css" rel="stylesheet" type="text/css" />

<!-- JQuery Plugins -->
<script type="text/javascript" src="js/jquery.tinyscrollbar.min.js"></script>
<script type="text/javascript" src="js/jquery.event.drag-1.5.min.js"></script>

<!--Jquery Based DragDroper Plugin-->
<script type="text/javascript" src="js/dragdroper.js"></script>
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
<div id="FixedDiv">
			<div style="position:relative;">
				<div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style=" z-index: 1; display: block; margin-top: 10px; "><div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_1342064563559.datepicker._adjustDate('#datepicker', -1, 'M');" title="Prev"><span class="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_1342064563559.datepicker._adjustDate('#datepicker', +1, 'M');" title="Next"><span class="ui-icon ui-icon-circle-triangle-e">Next</span></a><div class="ui-datepicker-title"><span class="ui-datepicker-month">July</span>&nbsp;<span class="ui-datepicker-year">2012</span></div></div><table class="ui-datepicker-calendar"><thead><tr><th class="ui-datepicker-week-end"><span title="Sunday">Su</span></th><th><span title="Monday">Mo</span></th><th><span title="Tuesday">Tu</span></th><th><span title="Wednesday">We</span></th><th><span title="Thursday">Th</span></th><th><span title="Friday">Fr</span></th><th class="ui-datepicker-week-end"><span title="Saturday">Sa</span></th></tr></thead><tbody><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">1</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">2</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">3</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">4</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">5</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">6</a></td><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">7</a></td></tr><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">8</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">9</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">10</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">11</a></td><td class=" ui-datepicker-days-cell-over  ui-datepicker-today" onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default ui-state-highlight ui-state-hover" href="#">12</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">13</a></td><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">14</a></td></tr><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">15</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">16</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">17</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">18</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">19</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">20</a></td><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">21</a></td></tr><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">22</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">23</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">24</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">25</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">26</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">27</a></td><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">28</a></td></tr><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">29</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">30</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">31</a></td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td></tr></tbody></table></div>
				<div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style=" z-index: 1; display: block;  margin-top: 10px;"><div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_1342064563559.datepicker._adjustDate('#datepicker', -1, 'M');" title="Prev"><span class="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_1342064563559.datepicker._adjustDate('#datepicker', +1, 'M');" title="Next"><span class="ui-icon ui-icon-circle-triangle-e">Next</span></a><div class="ui-datepicker-title"><span class="ui-datepicker-month">August</span>&nbsp;<span class="ui-datepicker-year">2012</span></div></div><table class="ui-datepicker-calendar"><thead><tr><th class="ui-datepicker-week-end"><span title="Sunday">Su</span></th><th><span title="Monday">Mo</span></th><th><span title="Tuesday">Tu</span></th><th><span title="Wednesday">We</span></th><th><span title="Thursday">Th</span></th><th><span title="Friday">Fr</span></th><th class="ui-datepicker-week-end"><span title="Saturday">Sa</span></th></tr></thead><tbody><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">1</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">2</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">3</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">4</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">5</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">6</a></td><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">7</a></td></tr><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">8</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">9</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">10</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">11</a></td><td class=" ui-datepicker-days-cell-over  ui-datepicker-today" onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default ui-state-highlight ui-state-hover" href="#">12</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">13</a></td><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">14</a></td></tr><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">15</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">16</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">17</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">18</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">19</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">20</a></td><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">21</a></td></tr><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">22</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">23</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">24</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">25</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">26</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">27</a></td><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">28</a></td></tr><tr><td class=" ui-datepicker-week-end " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">29</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">30</a></td><td class=" " onclick="DP_jQuery_1342064563559.datepicker._selectDay('#datepicker',6,2012, this);return false;"><a class="ui-state-default" href="#">31</a></td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td></tr></tbody></table></div>
				<div id="tabs">
					<ul>
						<li><a href="#tabs-1">Clipboard</a></li>
						
					</ul>
					<div id="tabs-1">
						
					</div>
				</div>
		</div></div><!--tabs-1-->

<!-- Start Main Container -->
<div id="MainScheduleContainer">

<div id="Top-Spacer"></div>
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