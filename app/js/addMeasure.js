var body = document.querySelector('.tracking');
var inputs = document.querySelectorAll('.tracking__add_filled');
var buttons = document.querySelectorAll('.tracking__add');

for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function (event) {
        addButtonHandler(event.target);
        var elem;

        if (event.target.nextElementSibling.childNodes[0]) {
            elem  = event.target.nextElementSibling.childNodes[0];
        } else {
            elem = event.target.nextElementSibling;
        }

        elem.focus();
        elem.onblur = function () {
            if (elem.value) {
                elem.classList.add('tracking__add_filled-text');
            } else {
                elem.classList.remove('tracking__add_filled-text');
                addButtonHandler(event.target);
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
    visibilityHandler(elem.nextElementSibling);
};

var visibilityHandler = function(elem) {
    elem.classList.toggle('invisible');
};

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

