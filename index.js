var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
   

var text1 = 
' standard dummy text ever since the 1500s , when an unknown printer took a '
;
var text2 = 
' standard dummy text ever since the 1500s , when an unknown printer took a '
;
var text3 = 
' standard dummy text ever since the 1500s , when an unknown printer took a '
;
ctx.font = "10pt Verdana";
ctx.textAlign = "center";
ctx.textBaseline = "top";
var textPxLength = ctx.measureText(text1,text2,text3);
ctx.fillStyle = "darkgreen";
ctx.fillText(text1,280,100);
ctx.fillText(text2,280,115);
ctx.fillText(text3,280,130);