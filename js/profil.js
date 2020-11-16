if(document.querySelector('.edit-btn')){
    document.querySelector('.edit-btn').addEventListener('click',()=>{
        document.querySelector('.my-profil-edit-wrapper').style.display='block' 
     })
     document.querySelector('.profil-edit-close-btn').addEventListener('click',()=>{
         document.querySelector('.my-profil-edit-wrapper').style.display='none' 
      })
      document.querySelector('.profil-edit-bg').addEventListener('click',()=>{
         document.querySelector('.my-profil-edit-wrapper').style.display='none' 
      })
}

