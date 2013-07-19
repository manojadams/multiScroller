<?php
 date_default_timezone_set('GMT');
?>
<script>
	$(document).ready(function(){
		setTimeout(updateTime,1000);
	});
	function updateTime(){
		var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("timedate").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://www.robinstevens.co.uk",true);
xmlhttp.send();
}
	}
	
</script>