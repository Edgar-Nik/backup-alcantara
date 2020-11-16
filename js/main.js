$(document).ready(function () {
  if ($("#banner_1")) {
    $("#banner_1").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    });
  }
  if ($("#banner_2")) {
    $("#banner_2").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    });
  }

  // if ($('#small-banners')) {
  //     if (document.body.clientWidth > 500){
  //         $('#small-banners').slick({
  //             slidesToShow: 4,
  //             slidesToScroll: 1,
  //             autoplay: true,
  //             autoplaySpeed: 2000,
  //             dots: true,
  //         })
  //     }else{
  //         $('#small-banners').slick({
  //             slidesToShow: 3,
  //             slidesToScroll: 1,
  //             autoplay: true,
  //             autoplaySpeed: 2800,
  //             dots: false,
  //         })
  //     }

  // }

  if ($("#small-banners")) {
    if (document.body.clientWidth > 500) {
      $("#small-banners").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      });
    }
  }

  if (document.body.clientWidth > 500) {
    if ($(".product-img")) {
      $(".product-img").each(function () {
        $(this).on("mouseover", function () {
          $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 500,
          });
        });

        $(this).on("mouseout", function () {
          $(this).slick("unslick");
        });
      });
    }
  } else {
    $(".product-img").each(function () {
      if ($(this).children().length > 1) {
        $(this).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        });
      } else {
        $(this).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        });
      }
    });
  }

  if ($("#test-mobile-banners")) {
    $("#test-mobile-banners").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }
});

let prodPrice = document.querySelectorAll(".main-price-digit");
if (prodPrice.length > 0) {
  prodPrice.forEach((item) => {
    let curr = item.innerHTML.replace(/ +?/g, "");
    let result = curr
      .split("")
      .reverse()
      .join("")
      .replace(/\d{3}(?=.)/g, "$& ");
    item.innerHTML = result.split("").reverse().join("");
  });
}

let menuBtn = document.getElementById("menu");
let closeNavBtn = document.getElementById("nav-close-btn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    document.body.classList.add("active-main-nav");
  });
}

if (closeNavBtn) {
  closeNavBtn.addEventListener("click", () => {
    document.body.classList.remove("active-main-nav");
  });
}

if (document.querySelector(".main-nav-bg")) {
  document.querySelector(".main-nav-bg").addEventListener("click", () => {
    document.body.classList.remove("active-main-nav");
  });
}

const backBtn = document.getElementById("back-btn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.history.back();
  });
}

// let searchInput = document.querySelector('#search');

// if(searchInput ){
//   var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
//   var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

//   var grammar = '#JSGF V1.0;'

//   var recognition = new SpeechRecognition();
//   var speechRecognitionList = new SpeechGrammarList();
//   speechRecognitionList.addFromString(grammar, 1);
//   recognition.grammars = speechRecognitionList;
//   recognition.lang = 'en-US';
//   recognition.interimResults = false;

//   recognition.onresult = function(event) {
//       var last = event.results.length - 1;
//       var command = event.results[last][0].transcript;
//       searchInput.value =  command ;

//   };

//   recognition.onspeechend = function() {
//       recognition.stop();
//   };

//   recognition.onerror = function(event) {
//       // message.textContent = 'Error occurred in recognition: ' + event.error;
//   }

//   document.querySelector('#mic').addEventListener('click', function(){
//       recognition.start();

//   });

// }

const loginBtn = document.querySelector("#login-btn");
const loginPopup = document.querySelector(".user-login");
const closeLoginPopup = document.querySelector(".user-login-bg");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    loginPopup.classList.add("active-login-popup");
  });
  closeLoginPopup.addEventListener("click", () => {
    loginPopup.classList.remove("active-login-popup");
  });
  document
    .querySelector(" .popup-close-times")
    .addEventListener("click", () => {
      loginPopup.classList.remove("active-login-popup");
    });

  document.querySelector(".login-page").addEventListener("click", () => {
    document.querySelector(".login-page").classList.add("active-form-page");
    document
      .querySelector(".registr-page")
      .classList.remove("active-form-page");
    document
      .querySelector(".user-from-toggle-bg")
      .classList.remove("user-from-toggle-bg-registr");
    document
      .querySelector(".user-registr-form")
      .classList.remove("active-login-form");
    document
      .querySelector(".user-login-form ")
      .classList.add("active-login-form");
  });
  document.querySelector(".registr-page").addEventListener("click", () => {
    document.querySelector(".registr-page").classList.add("active-form-page");
    document.querySelector(".login-page").classList.remove("active-form-page");
    document
      .querySelector(".user-from-toggle-bg")
      .classList.add("user-from-toggle-bg-registr");
    document
      .querySelector(".user-login-form ")
      .classList.remove("active-login-form");
    document
      .querySelector(".user-registr-form")
      .classList.add("active-login-form");
  });
}

let mobileMenuBtn = document.getElementById("mobileMenuBtn");
if (document.body.clientWidth < 500) {
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.body.classList.toggle("active-main-nav");
    });
  }
}

let mobileLogin = document.getElementById("mobileLogin");
if (mobileLogin) {
  mobileLogin.addEventListener("click", () => {
    loginPopup.classList.add("active-login-popup");
  });
  closeLoginPopup.addEventListener("click", () => {
    loginPopup.classList.remove("active-login-popup");
  });
  document
    .querySelector(" .popup-close-times")
    .addEventListener("click", () => {
      loginPopup.classList.remove("active-login-popup");
    });

  document.querySelector(".login-page").addEventListener("click", () => {
    document.querySelector(".login-page").classList.add("active-form-page");
    document
      .querySelector(".registr-page")
      .classList.remove("active-form-page");
    document
      .querySelector(".user-from-toggle-bg")
      .classList.remove("user-from-toggle-bg-registr");
    document
      .querySelector(".user-registr-form")
      .classList.remove("active-login-form");
    document
      .querySelector(".user-login-form ")
      .classList.add("active-login-form");
  });
  document.querySelector(".registr-page").addEventListener("click", () => {
    document.querySelector(".registr-page").classList.add("active-form-page");
    document.querySelector(".login-page").classList.remove("active-form-page");
    document
      .querySelector(".user-from-toggle-bg")
      .classList.add("user-from-toggle-bg-registr");
    document
      .querySelector(".user-login-form ")
      .classList.remove("active-login-form");
    document
      .querySelector(".user-registr-form")
      .classList.add("active-login-form");
  });
}

const likeBtn = document.querySelectorAll(".item-like-btn");

if (likeBtn.length > 1) {
  likeBtn.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("item-like-btn-active");
    });
  });
}

// let mobBanner1 = document.querySelector('.banner-order1')
// let mobBanner2 = document.querySelector('.banner-order2')
// let mobBanner3 = document.querySelector('.banner-order3')
// let mobBanner4 = document.querySelector('.banner-order4')
// let bannerArray = [mobBanner1 ,mobBanner2 , mobBanner3, mobBanner4]

// if(mobBanner1 && mobBanner2 && mobBanner3 && mobBanner4){
//     function orderChanger(){
//         bannerArray.forEach((item)=>{
//             if((+(item.style.order))<4){
//                 let current = (+(item.style.order))+1
//                 item.style.order=current
//             }else{
//                 item.style.order=1;
//             }
//         })
//     }
// }

// setInterval(()=>{orderChanger()},5000)
