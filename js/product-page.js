$(document).ready(function () {
    if ($("#main-frame")) {
      $("#main-frame").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true
      });
    }
  });
  

const prodPicArr = document.querySelectorAll('.pp-prod-small-pic')
let prodMainPic = document.querySelector('.pp-main-prod-pic')
let frame = document.getElementById('main-frame')

if (prodPicArr.length > 0 && prodMainPic) {
    prodPicArr.forEach((item) => {
        item.addEventListener('click', () => {
            prodMainPic.innerHTML = ''
            prodMainPic.innerHTML = item.innerHTML
        })
    })
}

frame.addEventListener('click', () => {
    let video = document.querySelectorAll('.prod-video')
    if(video.length>1){
        video.forEach((element,index) => {
            if(index===1){
                element.controls=true
            } 
        })
       
    } 
       
})

let prodPricePP = document.querySelector('.pp-main-price-digit')
if (prodPricePP) {
    let curr = prodPricePP.innerHTML.replace(/ +?/g, '')
    let result = curr
        .split('')
        .reverse()
        .join('')
        .replace(/\d{3}(?=.)/g, '$& ')
    prodPricePP.innerHTML = result.split('').reverse().join('')
}

let dropDown = document.querySelector('.prod-dropdown-heading')
if (dropDown) {
    dropDown.addEventListener('click', () => {
        document
            .querySelector('.dropdown-container')
            .classList.toggle('dropdown-container-active')
    })
}

///video section


document.querySelector('.fb__link').href = 'https://facebook.com/sharer/sharer.php?u=' + window.location.href

document.querySelector('.twitter__link').href = 'http://twitter.com/share?text=Im Sharing on Twitter&url=' + window.location.href

document.querySelector('.vk__link').href = 'https://vk.com/share.php?url=' + window.location.href

document.querySelector('.pinterest__link').href = 'http://pinterest.com/pin/create/link/?url=' + window.location.href


document.querySelector('.share-input').value = window.location.href



let sharebtn = document.querySelector('.pp-share-btn');
let shareClose = document.querySelector('.pp-share-block-close');
let shareClose2 = document.querySelector('.pp-share-bg');

let shareBlock =document.querySelector('.pp-share-wrapper'); 

if(sharebtn){
    sharebtn.addEventListener('click',()=>{
        shareBlock.classList.add('activeShareBlock')
    })
}

if(shareClose){
    shareClose.addEventListener('click',()=>{
        shareBlock.classList.remove('activeShareBlock')
    })
}
if(shareClose2){
    shareClose2.addEventListener('click',()=>{
        shareBlock.classList.remove('activeShareBlock')
    })
}





