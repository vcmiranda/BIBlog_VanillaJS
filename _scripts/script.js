var flagNav = true;

function openNav() {
    if (flagNav) {
        document.getElementById("navLinks").style.width = "200px";
        flagNav = false;
    }
}
 function closeNav() {
     if (flagNav === false){
        document.getElementById("navLinks").style.width = "0";
        flagNav = true;
    }
}

window.onload = function(){
    flagNav = false;
    closeNav();
};

window.addEventListener("resize", function(){
    flagNav = false;
    closeNav();
});
