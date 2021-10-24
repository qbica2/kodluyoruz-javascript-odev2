// önce elemanlara ulaşalım
let toastBtnDOM = document.querySelector(`#liveToastBtn`)  //ekleme işlemi yapıcak olan button
let listDOM = document.querySelector(`#list`)   // list domu
let taskDOM = document.querySelector(`#task`)  // input domu
let listEkle = document.getElementsByTagName("li");


// ilk eksiğimiz bizim listemizde listeden eleman silmek için çarpı butonu bulunmuyor 
// çarpı butonu eklemek için
for (let i =0 ; i < listEkle.length ; i++){
    let xButton = document.createElement("span"); // çarpı butonu için span oluşturduk
    xButton.textContent="\u00d7"                ; // \u00d7 çarpı işareti oluşturur
    xButton.classList.add(`close`)              ; // css dosyamızdaki close clasını verdik
    xButton.onclick = removeList                ; // tıklandığında daha sonra oluşturacağımız removeList 
                                                  // fonksiyonu ile bulunduğu listeyi silmesini sağlayacağız
    listEkle[i].append(xButton)                 ; // her elemana ekledik
    listEkle[i].onclick= tikle                  ; // liste elemanına tıklandığında daha sonra 
                                                  // oluşturacağımız tikle fonksiyonu ile liste elemanını 
                                                  //hem tikleyip hem de üstünü çizicez
}

// yukarıda bahsettiğimiz fonksiyonlar
function removeList() {
    this.parentElement.remove()
} 

function tikle() {
    this.classList.toggle("checked")
}
// ekleme işlemi yapacağımız button a eventlistener ekledik
toastBtnDOM.addEventListener("click",ekle)



function ekle() {
    let inputValue = taskDOM.value 
    // input value boş ise ya da boşluklardan oluşuyor ise toast hata verecek
    if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
        $(".error").toast("show");
    }
    // düzgün input girildiğinde
    else{
        $(".success").toast("show")
        let liDOM = document.createElement(`li`)     // yeni li elementi oluşturduk
        listDOM.append(liDOM)                        // li elementini listimize işledik
        liDOM.innerHTML=task.value                   // li nin içeriğini belirttik
        taskDOM.value=""                             // tekrar yazmak için içeriği sıfırladık
        liDOM.onclick= tikle                         // yeni eklediğimiz li elementine de tik atabiliyoruz 

        // yeni eklediğimiz li elementlerine de çarpı butonu ekledik
        let xButton = document.createElement("span") 
        xButton.textContent="\u00d7"                 
        xButton.classList.add(`close`)              
        xButton.onclick = removeList                
        liDOM.append(xButton)
        listDOM.append(liDOM)


    }
}
    // input girildikten sonra enter a bastığınızda da listeye otomotik ekliyor 
taskDOM.addEventListener("keyup",function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(`#liveToastBtn`).click()
    }
})

