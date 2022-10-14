$('#right-button').click(function() {
  event.preventDefault();
  $('#content').animate({
    scrollLeft: "+=100px"
  }, "slow");
});

 $('#left-button').click(function() {
  event.preventDefault();
  $('#content').animate({
    scrollLeft: "-=100px"
  }, "slow");
});

function myFunction() {
  console.log("hiii");
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

document.getElementById("openbutton").addEventListener("click", openNav, false);

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("closebutton").addEventListener("click", closeNav, false);
document.getElementById("mySidenav").addEventListener("click", closeNav, false);