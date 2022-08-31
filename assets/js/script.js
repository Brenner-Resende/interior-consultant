document.querySelector('.menu-mobile') .addEventListener('click', openNav);
document.querySelector('.closebtn') .addEventListener('click', closeNav);

function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "unset";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }