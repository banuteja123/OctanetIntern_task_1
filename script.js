/******************************************
  Get Toggle Icon And Menubar 
*******************************************/
const toggleIcon = document.querySelector(".toggle-icon");
const menuBar = document.querySelector(".menu-bar");

/******************************************
  Function to Show Menubar When Clicked On Toggle Icon 
*******************************************/
toggleIcon.onclick = function () {
    menuBar.classList.toggle("right");
}
