//import QRCode from "qrcode";

const btn = document.querySelector(".icon");
//const container = document.querySelector(".qr-container") 
//const reader = document.getElementById("reader")
const qr = document.querySelector(".qr")
const input = document.querySelector("input");
const textFeild = document.querySelector(".text");
console.log(qr);

//let qrCode = new qrCode("reader")
const html5QrCodeScanner = new Html5Qrcode("reader",{
    text:data,
    
});

btn.addEventListener("click",function(){
    input.click();
})

input.addEventListener("change",function(e){
      let file = e.target.files[0];
      if(!file){
        return
      }
      html5QrCodeScanner.scanFile(text,true)
      .then(function(decodedText){
         console.log(decodedText);
         textFeild.style.display = "flex"
         qr.style.display = "flex"
         textFeild.innerHTML = decodedText;
      })
      .catch(function(err){
         console.log("Try again!",err)
      })

})


