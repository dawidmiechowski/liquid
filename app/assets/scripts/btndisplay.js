function printSelectedItem() {
    var e = document.getElementById("zones");
    var selectedItem = e.options[e.selectedIndex].value;
    alert(selectedItem);
}


document.getElementById("toggleVisibilityButton").addEventListener("click", function(button) {    
if (document.getElementById("displaytable").style.display === "none") document.getElementById("displaytable").style.display = "block";
else document.getElementById("displaytable").style.display = "none";});