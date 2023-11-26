/**
Ornek-1.1: Dört İşlem (Toplama, Çıkarma, Çarpma, Bölme), JavaScript işlevleri burada tutulur.
 */

const toplaSabit = 1;
const cikarSabit = 2;
const carpSabit = 3;
const bolSabit = 4;

	 
/*  */
function islem(islemKodu){
	var birinciSayi = +document.getElementById("input-1").value;
	var ikinciSayi = +document.getElementById("input-2").value;
	switch (islemKodu)
	{
		case toplaSabit:
			document.getElementById("p-1").innerHTML = birinciSayi + ikinciSayi;
			break;
		case cikarSabit:
			document.getElementById("p-1").innerHTML = birinciSayi - ikinciSayi;
			break;
		case carpSabit:
			document.getElementById("p-1").innerHTML = birinciSayi * ikinciSayi;
			break;
		case bolSabit:
			document.getElementById("p-1").innerHTML = birinciSayi / ikinciSayi;
			break;
		default:
			alert("Henüz tamamlanmamış bir işlem");
	}
}

 
 /* HTML belgesindeki görsel nesnelerin içini temizler. */
 function temizle() {
	 document.getElementById("input-1").value = "";
	 document.getElementById("input-2").value = "";
	 document.getElementById("p-1").innerHTML = "Sonuçlar burada gösterilir...";
  }