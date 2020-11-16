let filterBtn = document.getElementById('filterBtn')
let filterBlock = document.querySelector('#products-container-left')
if (document.body.clientWidth < 500) {
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
            filterBlock.classList.toggle('mobile-filter-active')
            filterBlock.style.height = document.body.clientHeight + 'px'
           
        })
    }
}

$(document).ready(function () {
    if ($('#categorySlider')) {
        $('#categorySlider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth:true

            
        })
    }
})

let mobileSortbyBtn = document.getElementById('mobileSortbyBtn')
let sortByDropdown = document.getElementById('sortByDropdown')
if (document.body.clientWidth < 500) {
    if (mobileSortbyBtn) {
        mobileSortbyBtn.addEventListener('click', () => {
           
            sortByDropdown.classList.toggle('sortByDropdown-active')
           
        })
    }
}
