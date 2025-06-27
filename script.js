// script.js

// 1. Tarif Verileri (recipes dizisi)
const recipes = [
  {
    ad: "Menemen",
    resimURL: "img/menemen.jpg",
    malzemeler: [
      "3 adet yumurta",
      "2 adet domates",
      "2 adet sivri biber",
      "Tuz",
      "Zeytinyağı"
    ],
    talimatlar: [
      "Biberleri doğrayıp yağda kavurun.",
      "Rendelenmiş domatesleri ekleyip pişirin.",
      "Yumurtaları kırıp karıştırın.",
      "Tuz ekleyip servis yapın."
    ]
  },
  {
    ad: "Mantı",
    resimURL: "img/mantı.jpg",
    malzemeler: [
      "3,5 su bardağı un",
      "1 su bardağı ılık su",
      "1 çay kaşığı tuz",
      "1 adet yumurta",
      "250 g az yağlı kıyma",
      "1 adet orta boy soğan",
      "Yarım çay kaşığı karabiber",
      "Yarım çay kaşığı pul biber",
      "2 yemek kaşığı tereyağı",
      "2 yemek kaşığı salça",
      "Sarımsaklı yoğurt",
      "1 tatlı kaşığı nane",
      "1 tatlı kaşığı pul biber",
      "Yarım tatlı kaşığı sumak"
    ],
    talimatlar: [
      "Un ve tuzu karıştır, ortasına yumurtayı kır.",
      "Yavaşça su ekleyerek hamuru yoğur.",
      "Hamuru dinlendir, kıymalı iç harcı hazırla.",
      "Hamuru aç, kareler kes, iç harcı ekle, mantı şeklini ver.",
      "Mantıları tepsiye dizip dondur.",
      "Kaynar suda 15-20 dakika haşla.",
      "Tereyağı ve salça ile sos yap, mantıya ekle.",
      "Üzerine sarımsaklı yoğurt ve baharatlarla servis et."
    ]
  },
  {
    ad: "Çiğ Börek",
    resimURL: "img/ciğbörek.jpg",
    malzemeler: [
      "4,5 su bardağı un",
      "2 tatlı kaşığı tuz",
      "1-1,5 su bardağı su",
      "350 gram orta yağlı kıyma",
      "Yarım rendelenmiş soğan",
      "Karabiber",
      "Tuz",
      "Bir miktar su (iç harcı sulandırmak için)"
    ],
    talimatlar: [
      "Un, tuz ve su ile sert kıvamda hamur yoğurun.",
      "Hamuru bezelere ayırın ve açın.",
      "İç harç için kıyma, rendelenmiş soğan, tuz ve karabiberi karıştırın, biraz sulandırın.",
      "Hamurun içine harçtan koyup katlayın, kenarlarını kesin.",
      "Kızgın yağda altlı üstlü kızartın."
    ]
  },
  {
    ad: "Patates Salatası",
    resimURL: "img/patatessalatası.jpg",
    malzemeler: [
      "1-2 litre su (haşlamak için)",
      "10 adet taze patates (veya 5-6 büyük boy)",
      "4 dal taze soğan",
      "1/2 demet maydanoz",
      "2 çay kaşığı tuz",
      "1 tatlı kaşığı sumak",
      "1 çay kaşığı karabiber",
      "1 adet limon suyu",
      "1/3 çay bardağı zeytinyağı"
    ],
    talimatlar: [
      "Patatesleri kabuklu şekilde haşlayın (yaklaşık 20 dakika).",
      "Haşlanırken zeytinyağı, tuz, pul biber ve sumağı karıştırın.",
      "Yeşillikleri doğrayın, yumurtayı katı haşlayın.",
      "Haşlanan patateslerin kabuğunu soyun, büyük küpler halinde doğrayın.",
      "Ilınmış patateslerle sosu karıştırın, karışımı yedirin.",
      "Yeşillikleri ve limon suyunu ekleyin, servis tabağına alın.",
      "Üzerini siyah zeytin ve yumurta ile süsleyin."
    ]
  },
  {
    ad: "Pankek",
    resimURL: "img/pankek.jpg",
    malzemeler: [
      "2 adet yumurta",
      "2 yemek kaşığı şeker",
      "1 su bardağı süt",
      "1,5 su bardağı un",
      "1 paket kabartma tozu",
      "1 paket vanilya",
      "Sıvı yağ (pişirme için)",
      "Kivi, muz, çilek, reçel, bal, çikolata (servis için)"
    ],
    talimatlar: [
      "Yumurta ve şekeri karıştırma kabında iyice çırpın.",
      "Süt, un, kabartma tozu ve vanilyayı ekleyip çırpın.",
      "Kek kıvamından biraz daha koyu bir hamur hazırlayın.",
      "Tavaya az sıvı yağ döküp fırça veya peçete ile yayın.",
      "1 büyük kaşık hamur dökün, kendi yayılmasını bekleyin.",
      "Üzeri göz göz olunca spatula ile ters çevirin, arka yüzünü pişirin.",
      "Her iki tarafı da pişince tabağa alın.",
      "Üzerine pudra şekeri, meyve, çikolata veya reçel ile servis edin."
    ]
  },
  {
    ad: "Mercimek Köftesi",
    resimURL: "img/mercimekköftesi.jpg",
    malzemeler: [
      "1 su bardağı kırmızı mercimek",
      "1,5 su bardağı ince bulgur",
      "2 adet kuru soğan",
      "1/2 çay bardağı sıvı yağ",
      "2 yemek kaşığı domates salçası",
      "1 tatlı kaşığı biber salçası",
      "1 tatlı kaşığı tuz",
      "1 çay kaşığı karabiber",
      "1 çay kaşığı pul biber",
      "4-5 dal taze soğan",
      "Yarım demet maydanoz"
    ],
    talimatlar: [
      "Mercimeği 2,5 su bardağı su ile yumuşayana kadar haşlayın.",
      "Ocaktan alıp içine bulguru ekleyip kapağını kapatın, şişmesini bekleyin.",
      "Soğanları ince doğrayıp sıvı yağda kavurun, salçaları ekleyin ve soğumaya bırakın.",
      "Şişen karışıma salçalı soğanı, baharatları ekleyin ve iyice yoğurun.",
      "İnce doğranmış taze soğan ve maydanozu ekleyip karıştırın.",
      "Elinizle şekil vererek servis edin."
    ]
  }
];

// 2. Rastgele Tarif Seçen Fonksiyon
function getRandomRecipe() {
  const index = Math.floor(Math.random() * recipes.length);
  return recipes[index];
}

// 3. Tarif Ekrana Yazdırma Fonksiyonu
function displayRecipe(recipeObject) {
  const titleElement = document.getElementById("recipe-title");
  const imageElement = document.getElementById("recipe-image");
  const ingredientListElement = document.getElementById("ingredient-list");
  const instructionListElement = document.getElementById("instruction-list");

  titleElement.textContent = recipeObject.ad;
  imageElement.src = recipeObject.resimURL;

  ingredientListElement.innerHTML = recipeObject.malzemeler
    .map(item => `<li>${item}</li>`)
    .join('');

  instructionListElement.innerHTML = recipeObject.talimatlar
    .map(step => `<li>${step}</li>`)
    .join('');
}

// 4. Buton Etkileşimi
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  const randomRecipe = getRandomRecipe();
  displayRecipe(randomRecipe);
});

// 5. Sayfa Açıldığında Otomatik Tarif Göster
window.addEventListener("DOMContentLoaded", function () {
  const randomRecipe = getRandomRecipe();
  displayRecipe(randomRecipe);
});
// 6. Sayfanın başına dönme fonksiyonu
function sayfayaDon() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

