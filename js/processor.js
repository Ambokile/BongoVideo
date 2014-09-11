// JavaScript Document
window.onload = function(){
          setTimeout(grap_info,10);
              }
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
		
		document.querySelector("#info").innerHTML = xmlhttp.responseText;
			    
			
	 } 
			 
			                       };
xmlhttp.open("GET","http://fishpond.site88.net/get_video.php?id="+device_id,true);
xmlhttp.send();
   }
    

function onDeviceReady(){
 
             setTimeout(grap_info,10);
			 
          }
       
function contact(){
	   
	      var ref =  window.open('#info', '_blank', 'location=no'); 
	}	
   

function groups(){
	
	       var ref =  window.open('#groups', '_blank', 'location=no');
		
	}

function set(){
	
	       var ref =  window.open('#set', '_blank', 'location=no');
		
	}

function friend(){
	    
		  var ref =  window.open('#friend', '_blank', 'location=no');
		  
	}

      
 
		

