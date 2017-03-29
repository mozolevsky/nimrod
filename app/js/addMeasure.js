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
