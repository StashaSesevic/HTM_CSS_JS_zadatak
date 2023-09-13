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

  /*
$("#" + odgovorID) je selektor koji koristi jQuery da pronađe HTML element koji ima ID
  koji odgovara vrednosti promenljive odgovorID. Ovde se koristi znak # da bi se označilo da
  tražimo element po ID-ju.Na primer, ako je odgovorID postavljen na "odgovor2",
  onda će $("#" + odgovorID) pronaći HTML element sa ID-om "odgovor2",
  ukoliko takav postoji na stranici. Ovaj kod će vratiti referencu na taj element,
  koju možemo koristiti da manipulišemo njegovim stilovima, sadržajem ili drugim svojstvima.


$("p[id^='pitanje']") je selektor jQuery koji bira sve paragrafe (<p>) koji
    imaju ID koji počinje sa "pitanje".
    Simbol ^ označava "počinje sa". Dakle, ovaj selektor će odabrati sve
    paragrafe čiji ID počinje sa "pitanje".

Funkcija unutar click() metode će se izvršiti kada se klikne na element
     koji je odabran selektorom $("p[id^='pitanje']").

     Unutar ove funkcije, prvo se nalazi ID odgovarajućeg odgovora tako što se
     uzima vrednost atributa "id" paragrafa koji je kliknut ($(this).attr("id")).
     Zatim se u ovom ID-ju zamenjuje početak "pitanje" sa "odgovor" kako bi se dobio ID odgovarajućeg odgovora.

Na primer, ako je kliknuto na paragraf sa ID-om "pitanje1",
odgovorID će postati "odgovor1". Ako je kliknuto na paragraf sa ID-om "pitanje2",
odgovorID će postati "odgovor2", i tako dalje.

*/

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

  /*Evo šta ovaj kod radi korak po korak:

Definiše funkciju countdownTimer(targetDate) koja prima ciljani datum kao argument. Unutar ove funkcije, izračunava preostalo vreme između trenutnog vremena i ciljanog datuma u milisekundama.

Izračunava preostalo vreme u danima, satima, minutima i sekundama.

Funkcija updateCountdown() postavlja ciljni datum na "2023-10-01T12:00:00" (1. okt 2023. godine u 12:00 sati) i ažurira prikaz preostalog vremena na stranici.

Koristi setInterval() funkciju koja poziva funkciju updateCountdown() svake sekunde kako bi ažurirala prikaz preostalog vremena. Ovo omogućava da se preostalo vreme prikazuje u realnom vremenu i automatski se ažurira svake sekunde.*/

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
