var body = document.querySelector('.tracking');
var inputs = document.querySelectorAll('.tracking__add_filled');

body.addEventListener('click', function (event) {
    var className = event.target.className;
    if (className === "tracking__add") addButtonHandler(event.target);
});

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

