var slideIndex = 0;
function slide() {
    var tag = document.getElementById("slide-pic");
    tag.style.transform = "translateX(-" + slideIndex + "px)";
    slideIndex += 960;
    if (slideIndex == 4800)
        slideIndex = 0;
    setTimeout("slide()", 5000);
}