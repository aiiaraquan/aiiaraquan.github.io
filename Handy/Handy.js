
function optionOver(tag) {
    var div = document.getElementById(tag);
    div.style.display = "block";
}
    
function optionOut(tag) {
    var div = document.getElementById(tag);
    div.style.display = "none";
}
        
function changeGreen(img) {
    var arr = img.src.split("-");
    img.src = arr[0] + "-" + "green" + "-" + arr[2];
}

function changeBlack(img) {
    var arr = img.src.split("-");
    img.src = arr[0] + "-" + "black" + "-" + arr[2];
}