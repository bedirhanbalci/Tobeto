/**
Ornek-1.1: Dört İşlem (Toplama, Çıkarma, Çarpma, Bölme), JavaScript işlevleri burada tutulur.
 */


/* Girilen iki sayının toplamını bulur */
 function topla () {
	 var birinciSayi = +document.getElementById("input-1").value;
	 var ikinciSayi = +document.getElementById("input-2").value;
	 var toplam;
	 
	 toplam = birinciSayi + ikinciSayi; /* Toplamı Bul */
	 document.getElementById("p-1").innerHTML = toplam;
	 }
	 
	 /* Girilen iki sayının farkını bulur */
 function cikar () {
	 var birinciSayi = +document.getElementById("input-1").value;
	 var ikinciSayi = +document.getElementById("input-2").value;
	 var fark;
	 
	 fark = birinciSayi - ikinciSayi; /* Farkı Bul */
	 document.getElementById("p-1").innerHTML = fark;
	 }
	 
	 /* Girilen iki sayının çarpımını bulur */
 function carp () {
	 var birinciSayi = +document.getElementById("input-1").value;
	 var ikinciSayi = +document.getElementById("input-2").value;
	 var carpim;
	 
	 carpim = birinciSayi * ikinciSayi; /* Çarpımı Bul */
	 document.getElementById("p-1").innerHTML = carpim;
	 }
	 
	 /* Girilen iki sayının bölümünü bulur */
 function bol () {
	 var birinciSayi = +document.getElementById("input-1").value;
	 var ikinciSayi = +document.getElementById("input-2").value;
	 var bolum;
	 
	 bolum = birinciSayi / ikinciSayi; /* Bölümü Bul */
	 document.getElementById("p-1").innerHTML = bolum;
	 }
 
 /* HTML belgesindeki görsel nesnelerin içini temizler. */
 function temizle() {
	 document.getElementById("input-1").innerText = "";
	 document.getElementById("input-2").innerText = "";
	 document.getElementById("p-1").innerHTML = "Sonuçlar burada gösterilir...";
  }