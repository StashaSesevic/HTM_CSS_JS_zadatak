//za burger meni(burger u x i obrnuto, otvaranje i zatvaranje menija)
function Funkcija1(x) {
    x.classList.toggle("change");
  }
function Funkcija2() {
    var menuItems = document.querySelectorAll(".meni>ul>li");
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].style.display === "" || menuItems[i].style.display === "none") {
            menuItems[i].style.display = "flex";
        } else {
            menuItems[i].style.display = "none";
        }
    }
  }
  