// JavaScript Document
 document.addEventListener("deviceready",onDeviceReady,false);
	function grap_info(){
			var device_id = device.uuid;
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		alert(xmlhttp.responseText);
		document.querySelector("#info").innerHTML = xmlhttp.responseText;
			    if( xmlhttp.responseText !=""){
					     setTimeout(
    function slider(){
		  $("#info #1").show("fade",500);
		  $("#info #1").delay(5500).hide("slide",{direction:"left"},500);
		  
		  var sc = $("#info img").size();
		  var count = 2;
		  
		  setInterval(function(){
			       $("#info #"+count).show("slide",{direction:"right"},500);
				   $("#info #"+count).delay(5500).hide("slide",{direction:"left"},500);
				   
				   if(count == sc){
					       count = 1;
					   }
				   else{
					      count = count +1;
					   }
			  },6500)
		},5)
					}
			
	 } 
			 
			                       };
xmlhttp.open("GET","http://fishpond.site88.net/get_video.php?id="+device_id,true);
xmlhttp.send();
   }
    

function onDeviceReady(){
 
             setTimeout(grap_info,10);
			 
          }
       
	
   
	

      
 
		

