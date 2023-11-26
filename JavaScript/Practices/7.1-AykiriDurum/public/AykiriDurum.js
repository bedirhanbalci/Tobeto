/**
 * 
 */

const genel1 = "Genel Değişmez-1";

var k = 1000, l = 2000;


function sayfaYukle(){
	var tanimli = 123;
	
	console.log("tanimli: " + tanimli);
	
	try {
		console.log("Atama olacak mı? k -> " + k);
		k = "Atama olur...";
		console.log("Atama başarılı... k -> " + k);
		
		var hata = new Error("Deneme amacıyla fırlatılmış bir hata...");
		hata.name = "Kullanıcı tanımlı hata";
		hata.message = "Bu hatayı kendimiz ele alacağız...";
		throw hata;
		console.log("Akış buraya ulaşır mı? " + k);
		
	}catch (hata){
		console.log("sayfaYukle akışı, hatalı durumdan ötürü durdu, hata -> " + hata.name + " | " + hata.message);
	}finally{
		console.log("Her durumda çalıştırılacak kod bölümü...");
	}
	
	
	console.log("sayfaYukle() işletimi buradan devam ediyor...");
	console.log("genel1: " + genel1);
	console.log("k + \" \" + l -> " + k + " " + l);
	sayfaYukleAltIsler(1234);
}


function sayfaYukleAltIsler(a, b){
	console.log("JS kodumuz, sayfaYukleAltIsler() etkinlik alanında çalışıyor...");
	console.log("a + \" \" + b -> " + a + " " + b);
    console.log("a[0] -> " + a[0]);
    try{
		console.log("a[0][0] -> " + a[0][0]);
	}catch (hata){
		console.log("sayfaYukleAltIsler akışı, hatalı durumdan ötürü durdu, hata -> " + hata.name + " | " + hata.message);
	}finally{
		console.log("Her durumda çalıştırılacak sayfaYukleAltIsler() kod bölümü...");
	}
	
	try{
		document.getElementById("p-1").innerHTML = "Deneme, span: <span style=\"border: 2px #4444AA solid;\"> eval() denemesi -->>" + eval("4 asdsadas 18") + "</span>";
	}catch(hata){
		console.log("sayfaYukleAltIsler akışı, hatalı durumdan ötürü durdu, hata -> " + hata.name + " | " + hata.message);
	}finally{
		console.log("Her durumda çalıştırılacak sayfaYukleAltIsler() kod bölümü - 2");
	}
	console.log("sayfaYukleAltIsler() devam ediyor..");
}

















