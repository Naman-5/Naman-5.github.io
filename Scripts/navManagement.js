var navOpen = false;
var positions = ["gfgPos"];
function openCloseNav() {
    if(navOpen==false)
    {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        navOpen = true;
    }
    else
    {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        navOpen = false;
    }
  }