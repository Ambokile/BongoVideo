// JavaScript Document
window.onload = function(){
	  navigator.notification.beep(3);

          setTimeout(grap_info,10);
		   var number_rows = 0;
		setInterval(function update(){
			  
				var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		if(number_rows  ==  xmlhttp.responseText){
			    
			}
		else{
			    grap_info();
			   number_rows =  xmlhttp.responseText;
			   grap_info();
			}
			    
	 } 
			 
			                       };
xmlhttp.open("GET","http://fishpond.site88.net/get_update.php",true);
xmlhttp.send();
			},5);
              }
 
			  
	function grap_info(){
			var device_id = device.uuid;
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		document.querySelector("#info").innerHTML = xmlhttp.responseText;
			    
			
	 } 
			 
			                       };
xmlhttp.open("GET","http://fishpond.site88.net/get_video.php?id="+device_id,true);
xmlhttp.send();
   }
    

