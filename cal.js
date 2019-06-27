
		function display(x){
				 if(me){
				 // if (result.value==0) {
				 	show.value+=x;
				 // }else{
					// show.value+=x;
				}
		 	}
		 
			
	function res(){
		if(me){
			result.value=eval(show.value);
		}
	}
	//on and off function
	var me = false;
	var demo;
	 function on(){
	 		document.getElementById('demo').innerHTML="OFF";
	 	if (me == false) {
	 		me=true;
	 			result.value='0';
		 } else {
		 		document.getElementById('demo').innerHTML="ON";
		 	me=false;
			 	result.value=(show.value)= "";
		 }	
	 }
	 //end here on and off function
	  function disap(){
	 	 result.value="0";
	 	 show.value="";
	  }
	 

	 //scientific function
	 function auto(){
	 	if(me){
	 	result.value=Math.sin(show.value * Math.PI/180);
	  }
	}
	 function cols(){
	 	if(me){
	 	result.value=Math.cos(show.value * Math.PI/180);
	 }
	}
	 function tans(){
	 	if(me){
	 	result.value=Math.tan(show.value * Math.PI/180);
	 }
	}
	 function logs(){
	 	if(me){
	 	result.value=Math.log10(show.value);
	 }
	}
	 function sqr(){
	 	if(me){
	 	result.value=Math.sqrt(show.value);
	 }
	}
	 function ToPower(){
	 	if(me){
	 	result.value=Math.pow(show.value,3);
	 }
	}
	 function sol(){
	 	if(me){
	 	result.value=Math.abs(show.value);
	 }
	}
	 //end here
	 function mydelete(){
	 	show.value=show.value.slice(0,-1);
	 } 