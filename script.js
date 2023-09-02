// Add this script at the end of your HTML body or load it asynchronously


//    LINKS

var sharelink = "https://hp-harshit.github.io/ConnectionLinkHub/";
var contactlink = "+91 9617903910";
var maillink = "hnypatel0721@gmail.com";
var wplink = "https://wa.me/message/KSGI7UJHXZYBK1";
var gitlink = "https://github.com/HP-Harshit";
var instalink = "https://instagram.com/irregulardeveloper_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D";
var fblink = "https://www.facebook.com/codeinterpreter";
var telegramlink = "https://t.me/buzzycreater";
var ytlink = "https://youtube.com/@irregulardeveloper_?si=YpUGh1MkJFFLJEAZ";


//    PHOTOS

var shareimg = "CLH.png"; 
var contactimg = "joker.png"; 
var mailimg = "hny.png"; 
var wpimg = "wpjoker.jpg"; 
var gitimg = "git.png"; 
var instaimg = "igdev.jpg";  
var fbimg = "fb.png"; 
var telegramimg = "sctelegram.jpg"; 
var ytimg = "yt.png"; 









window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.style.display = "block";
      header.style.backgroundColor = "rgba(70, 68, 68, 0.1)"; 
    }
    else {
    header.style.display = "none";
    header.style.backgroundColor = "transparent";
    }
});





// JavaScript code to show/hide the container and overlay



//    ELEMENTS

var image = document.getElementById("image");

var copyText = document.getElementById("copyText");

var showDivButton1 = document.getElementById("showDivButton1");
var showDivButton2 = document.getElementById("showDivButton2");
var contact = document.getElementById("contact");
var mail = document.getElementById("mail");
var whatsapp = document.getElementById("whatsapp");
var github = document.getElementById("github");
var instagram = document.getElementById("instagram");
var facebook = document.getElementById("facebook");
var telegram = document.getElementById("telegram");
var youtube = document.getElementById("youtube");


var modalContainer = document.getElementById("modal-container");
var overlay = document.getElementById("overlay");
var closeButton = document.getElementById("close-button");




//      ONCLICK EVENT



// showDivButton.onclick = function() {
//   modalContainer.style.display = "block";
//   overlay.style.display = "block";
// };


      showDivButton1.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = sharelink;
      image.src = shareimg;
    };
    
      showDivButton2.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = sharelink;
      image.src = shareimg;
    };
    
      contact.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = contactlink;
      image.src = contactimg;
    };
    
      mail.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = maillink;
      image.src = mailimg;
    };
    
      whatsapp.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = wplink;
      image.src = wpimg;
    };
    
      github.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = gitlink;
      image.src = gitimg;
    };
    
      instagram.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = instalink;
      image.src = instaimg;
    };
    
      facebook.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = fblink;
      image.src = fbimg;
    };
    
      telegram.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = telegramlink;
      image.src = telegramimg;
    };
    
      youtube.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = ytlink;
      image.src = ytimg;
    };
    
    closeButton.onclick = function() {
      modalContainer.style.display = "none";
      overlay.style.display = "none";
};







function copyToClipboard() {
  var copyText = document.getElementById("copyText");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied: " + copyText.value);
}

