/**
 * 
 */

//const genel1 = "Geneldeki sabit değişmez-1";
//const genel2 = 200;

var k = 100, l = "\"Genel\"de tanımlanmış değişken";


function sayfaYukle(){
//	const genel1 = 999.999;
//	const genel2 = "Yereldeki sabit değişmez-2";
//  var k = 300;
//	var k = "\"Yerel\"de tanımlanmış k değişken";
//	var l = "\"Yerel\"de tanımlanmış l değişken";
	
	blok1: {
		forBlok1: for (let k = 0; k < 5; k++){
			for (let l = 0; l < 3; l++){
				if (l >= 3)
					break blok1;
				console.log("k + \" \" + l -> " + k + " " + l);
			}
			console.log("Dış döngüde -> " + k);
		
		}
		console.log("İç içe döngü sonlandı...");
	}
	
	console.log("k + \" \" + l -> " + k + " " + l);
	k++;
	l = "Genel değişkenin değeri değişir mi?";
	console.log("k + \" \" + l -> " + k + " " + l);
	sayfaYukleAltIsler();
}


function sayfaYukleAltIsler(){
	k++;
	console.log("JS kodumuz, sayfaYukleAltIsler() etkinlik alanında çalışıyor...");
	console.log("k + \" \" + l -> " + k + " " + l);
}