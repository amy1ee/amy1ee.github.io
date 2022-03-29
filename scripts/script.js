/* 
    Author: Amy Lee
    Date: 03/11/2022
    File Name: script.js
*/

document.getElementById("searchInput").addEventListener("search", myFunction);

function myFunction() {
    var x = document.getElementById("searchInput");
    x.search("");   
}