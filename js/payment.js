const cashType = document.getElementById('cash')
const cardType = document.getElementById('visaCard')
const idramType = document.getElementById('idram')

if(cashType && cardType && idramType){
    cashType.addEventListener('click',()=>{
        if(cashType.checked===true){
           document.querySelector('.cash-form').classList.add('activeForm')
           document.querySelector('.card-form').classList.remove('activeForm')

           document.querySelector('.idram-form').classList.remove('activeForm')

        }
    })
    cardType.addEventListener('click',()=>{
        if(cardType.checked===true){
           document.querySelector('.card-form').classList.add('activeForm')
           document.querySelector('.cash-form').classList.remove('activeForm')

           document.querySelector('.idram-form').classList.remove('activeForm')

        }
    })
    idramType.addEventListener('click',()=>{
        if(idramType.checked===true){
           document.querySelector('.idram-form').classList.add('activeForm')
           document.querySelector('.card-form').classList.remove('activeForm')

           document.querySelector('.cash-form').classList.remove('activeForm')

        }
    })
   
}