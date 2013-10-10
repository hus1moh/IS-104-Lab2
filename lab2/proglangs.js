var textBlocks = new Array( 
'Select from the list to change this box', 
'Du har selektert AppleScript.', 
'Du har selektert Asp.','Du har selektert Basic.','Du har selektert C.','Du har selektert C++.','Du har selektert Clojure.',
'Du har selektert Cobol.','Du har selektert ColdFusion.','Du har selektert Erlang.','Du har selektert Fortrean.','Du har selektert Haskell.',
'Du har selektert Java.','Du har selektert Javascript.','Du har selektert Lisp.','Du har selektert Perl.','Du har selektert Python.',
'Du har selektert Ruby.');
function changeText(elemid) { 
var ind = document.getElementById(elemid).selectedIndex; 
document.getElementById("display").innerHTML=textBlocks[ind]; 
} 

function AlertIt() {
var answer = confirm ("Kronologisk side er under bygning.")
if (answer)
window.location="proglangs.html";
}

function AlertIt1() {
var answer = confirm ("Hierarkisk side er under bygning.")
if (answer)
window.location="proglangs.html";
}

function AlertIt2() {
var answer = confirm ("Alphapetisk side er under bygning.")
if (answer)
window.location="proglangs.html";
}

