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
		
		document.querySelector("#info").innerHTML ="<ion-slide-box><ion-slide>" + xmlhttp.responseText + "<ion-slide><ion-slide-box><ion-slide>Ambokile</ion-slide>";
	 } 
			 
			                       };
xmlhttp.open("GET","http://fishpond.site88.net/get_video.php?id="+device_id,true);
xmlhttp.send();
   }
    

function onDeviceReady(){
     pictureSource=navigator.camera.PictureSourceType;
     destinationType=navigator.camera.DestinationType;
         
             setTimeout(grap_info,10);
			 
          }
       
	
   
	

      
 
		

