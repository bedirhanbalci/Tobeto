/**
Ornek-1: Toplama, JavaScript işlevleri burada tutulur.
 */

 function topla () {
	 var birinciSayi = +document.getElementById("input-1").value;
	 var ikinciSayi = +document.getElementById("input-2").value;
	 var toplam;
	 
	 toplam = birinciSayi + ikinciSayi;
	 document.getElementById("p-1").innerHTML = toplam;
	 
 }