$(document).ready(function () {

    if(document.body.clientWidth>500){
        $(document).scroll(function() {
            checkOffset();
        });
        
        function checkOffset() {
            if($('#checkout-block').offset().top + $('#checkout-block').height() 
                                                   >= $('#cart-other-offers').offset().top - 3)
                $('#checkout-block').css('position', 'absolute');
            if($(document).scrollTop() + window.innerHeight < $('#cart-other-offers').offset().top)
                $('#checkout-block').css('position', 'fixed'); // restore when you scroll up
        }
    }


})