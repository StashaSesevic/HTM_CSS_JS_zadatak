//kad kliknes na neko polje u formi ono dobije ljubicasti okvir, a kad se odfokusira onda sivi tanji; polje:focus ovo focus smo stavili da bi se efekat primenio samo na to jedno polje 
//a ne na sva; this stavljamo iz istog razloga
$(".polje").on("focus blur",function(event){
    $(".polje:focus").css("border","4px solid purple");
});
$(".polje").on("blur",function(){
    $(this).css("border","1px solid gray");
});

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
  
//validacija i pop up prozor
$(document).ready(function() {
    $('#forma01').submit(function(event) {
        event.preventDefault(); // Zaustavlja podrazumevano ponašanje forme (slanje na server). Na taj način možeš da izvršiš validaciju polja i prikaz poruka upozorenja pre nego što odlučiš da li će se forma zaista poslati na server ili ne
        
        // Validacija forme - provera da li su obavezna polja popunjena
        var ime = $('#imePoruka').val();
        var mejl = $('#mejlPoruka').val();
        var telefon = $('#telefonPoruka').val();
        var komentar = $('#komentar').val(); 
        
        if (ime === '' || mejl === '' || telefon === ''|| komentar === '') {
            alert('Molimo popunite sva polja.');
            return;
        }
        
        // Provera da li mejlPoruka sadrži simbol '@'
        if (mejl.indexOf('@') === -1) {
            alert('E-mail adresa nije validna. Molimo unesite validnu e-mail adresu.');
            return;
        }
        
        // Provera da li telefonPoruka sadrži samo cifre
        if (!/^\d+$/.test(telefon)) {
            alert('Broj mobilnog telefona može sadržati samo cifre.');
            return;
        }
        // Provera da li komentar sadrži najmanje 3 reči
        var brojReci = komentar.split(/\s+/).filter(function(word) {
            return word.length > 0;
        }).length;
        
        if (brojReci < 3) {
            alert('Komentar mora sadržati najmanje 3 reči.');
            return;
        }
        
        // Prikaz podataka u pop-up prozoru
        var podaci = 'Vaše ime i prezime: ' + ime +
                     '\nVaša e-mail adresa: ' + mejl +
                     '\nVaš broj mobilnog telefona: ' + telefon +
                     '\nKomentar: ' + $('#komentar').val() +
                     '\nŽelim: ' + $('input[name="vrstaPoruke"]:checked').val() +
                     '\nObjekat: ' + $('#objekat').val();
                     
        alert(podaci);
    });
});
