$(document).ready(function(){
	function loadName() {    
    var srcText = "Akash Kengunte";
    var i = 0;
    var result = srcText[i];
    setInterval(function() {
            i++;            
            if(i < srcText.length){
                result += srcText[i].replace("\n", "<br />");    
            }            
            $(".myName").html(result);
    }, 300); // the period between every character and next one, in milliseonds.
	}
	loadName();
});