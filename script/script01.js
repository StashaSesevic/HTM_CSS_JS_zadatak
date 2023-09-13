//otvaranje/zatvaranje FAQ pitanja
$(document).ready(function() {
    // Dodaje event listenere na svako pitanje
    $("p[id^='pitanje']").click(function() {
      // Nalazi ID odgovarajućeg odgovora
      var odgovorID = $(this).attr("id").replace("pitanje", "odgovor");

      // Pronalazi odgovarajući odgovor prema ID-ju
      var odgovor = $("#" + odgovorID);

      // Menja stil odgovora - prikazuje/uklanja ga
      if (odgovor.css("display") === "none") {
        odgovor.show();
      } else {
        odgovor.hide();
      }
    });
  });

 
// Funkcija koja izračunava preostalo vreme do otvaranja teretane
function countdownTimer(targetDate) {
    var now = new Date().getTime();
    var timeRemaining = targetDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  // Funkcija koja ažurira prikaz preostalog vremena na stranici
  function updateCountdown() {
    var targetDate = new Date("2023-10-01T12:00:00").getTime();
    var countdownElement = document.getElementById("countdown");
    var countdownData = countdownTimer(targetDate);

    countdownElement.innerHTML = "Preostalo vreme do otvaranja nove NEON teretane na Senjaku:\n" + countdownData.days + " dana, " + countdownData.hours + " sati, " + countdownData.minutes + " minuta, " + countdownData.seconds + " sekundi";
  }

  // Pokreće odbrojavanje svake sekunde
  setInterval(updateCountdown, 1000);

  
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
