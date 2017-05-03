var body = document.querySelector('.tracking');
var inputs = document.querySelectorAll('.tracking__add_filled');
var buttons = document.querySelectorAll('.tracking__add');

for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function (event) {
        addButtonHandler(event.target);

        var elem;

        if (event.target.nextElementSibling.childNodes[1].childNodes[1]) {
            elem = event.target.nextElementSibling.childNodes[1].childNodes[1];
        } else {
            elem = event.target.nextElementSibling.childNodes[1].childNodes[0];
        }

        elem.focus();

        elem.onkeyup = function (){

            if (!isNaN(elem.value)) {
                elem.classList.remove('tracking__add_filled-invalid');
                elem.classList.add('tracking__add_filled-valid');
            } else {
                elem.classList.remove('tracking__add_filled-valid');
                elem.classList.add('tracking__add_filled-invalid');
            }
        };

        elem.onblur = function () {
            if (elem.value && elem.classList.contains('tracking__add_filled-valid')) {
                elem.classList.remove('tracking__add_filled-invalid');
                elem.classList.remove('tracking__add_filled-valid');
                elem.classList.add('tracking__add_filled-text');

                $(document).ready(function(){
                    $(".tracking__add_filled").change(function postinput(){
                        var trackingValue = $(this).val(); // this.value
                        $.ajax({
                            type: 'post',
                            url: 'http://localhost:3000/test.php',
                            data: { trackingValue: trackingValue }
                        }).done(function(responseData) {
                            console.log('Done: ', responseData);
                        }).fail(function() {
                            console.log('Failed');
                        });
                    });
                });
            } else {
                elem.classList.remove('tracking__add_filled-invalid');
                elem.classList.remove('tracking__add_filled-valid');
                elem.classList.remove('tracking__add_filled-text');
                addButtonHandler(event.target);
                elem.value = '';
            }
        }
    });

    for (var j = 0; j < inputs.length; j++) {
        if (inputs[j].value) {
            inputs[j].classList.add('tracking__add_filled-text');
        }
    };

};

var addButtonHandler = function (elem) {
    visibilityHandler(elem);
    visibilityHandler(elem.nextElementSibling.childNodes[1]);
};

var visibilityHandler = function(elem) {
    elem.classList.toggle('invisible');
};



