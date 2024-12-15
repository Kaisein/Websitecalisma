var index = 0;
        var kutucuklar = document.querySelectorAll(".haber-kutucuk");

        function gosterHaber(index) {
            for (var i = 0; i < kutucuklar.length; i++) {
                kutucuklar[i].style.display = "none"; // Tüm kutucukları gizle
            }
            kutucuklar[index].style.display = "flex"; // Belirli index'teki kutucuğu göster
        }

        // İlk başta ilk kutucuğu göster
        gosterHaber(index);

        // Önceki butonuna tıklanınca
        document.getElementById("onceki").addEventListener("click", function () {
            index--; // Index'i azalt
            if (index < 0) {
                index = kutucuklar.length - 1; // Index sıfırdan küçükse en sonuncuya geç
            }
            gosterHaber(index); // Yeniden göster
        });

        // Sonraki butonuna tıklanınca
        document.getElementById("sonraki").addEventListener("click", function () {
            index++; // Index'i artır
            if (index >= kutucuklar.length) {
                index = 0; // Index son kutucuğa ulaştıysa ilk kutucuğa geç
            }
            gosterHaber(index); // Yeniden göster
        });
        
        

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mac-link").addEventListener("click", function(event) {
        event.preventDefault(); // Sayfanın kaymasını engelle
        var haberBulteni = document.getElementById("haberBulteni");
        haberBulteni.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hakkimizda-link").addEventListener("click", function(event) {
        event.preventDefault(); // Sayfanın kaymasını engelle
        var aboutSection = document.getElementById("about");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});