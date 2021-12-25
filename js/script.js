const hamburger = document.querySelector('.hamburger'),
    hidden = document.querySelector('.hidden'),
    closeElem = document.querySelector('.hidden__close');

hamburger.addEventListener('click', () => {
    hidden.classList.add('active');
});

closeElem.addEventListener('click', () => {
    hidden.classList.remove('active');
});


const procent = document.querySelectorAll('.skills__second-item__procent'),
        autochange = document.querySelectorAll('.skills__second-item__scale span');

procent.forEach( (item, i) => {
    autochange[i].style.width = item.innerHTML;
});

$(document).ready(function(){
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                checkbox: {
                    required: true
                }
            },
        });
    };

    validateForms('.contacts form');

    $('form').submit(function(e) {
        e.preventDefault();
    
        if (!$(this).valid()) {
          return;
        }
        
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            /* $('#consultation, #buy').fadeOut();
            $('.modal, #ty').fadeIn('slow'); */
    
            $('form').trigger('reset');
        });
        return false;
    });
});
