// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(dosyaYolu) {

  if(dosyaYolu.includes("/")){
      let sonuc = dosyaYolu.split("/")
      return sonuc[sonuc.length-1]
  }else {
    return dosyaYolu
  }
}

console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"))


/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(array) {

  let total = 0

  if(array.length == 0){
    return null
  }
  else {
    for(let i = 0; i< array.length; i++){
        
      total = total + array[i]
    }
    return total / array.length
  }
    

}

console.log(ortalamaBul([4]))
/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(arrayUc,cbOrtalamaBul) {

  // const yeniDizi = [];

  // const ortalamaDeger = cbOrtalamaBul(arrayUc) // 46 Suanda

  // if(arrayUc.length == 0){
  //   return null
  // }else {
  //   for(let i = 0; i<=arrayUc.length; i++){
  //     if(ortalamaDeger <= arrayUc[i] ){
        
  //       yeniDizi.push(arrayUc[i])
  //     }
  //   }
  //   return yeniDizi;
  // }

  const ortalamaDeger = cbOrtalamaBul(arrayUc)

  const ilkFilter = arrayUc.filter((arrayUcfilter) => arrayUcfilter >= ortalamaDeger );

  if(arrayUc.length == 0){
    return null
  }

  return ilkFilter;
  
}

console.log(ortalamadanBuyukleriBul([4],ortalamaBul))


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
