var navOpen = false;
var positions = ["gfgPos"];
function openCloseNav() {
    if(navOpen==false)
    {
        if(window.innerWidth <= 700)
        {
            for(var i = 0; i<positions.length;i++)
            {
            document.getElementById(positions[i]).style.zIndex = 0;
            }
        }
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        navOpen = true;
    }
    else
    {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        navOpen = false;
        if(window.innerWidth <= 700)
        {
            for(var i = 0; i<positions.length;i++)
            {
            document.getElementById(positions[i]).style.zIndex = 2;
            }
        }
    }
  }