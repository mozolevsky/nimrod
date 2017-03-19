/* video */
$("#videocover").click(function() {
    $("#myvideo").attr("controls", true);
    var video = $("#myvideo").get(0);
    video.play();

    $(this).css("visibility", "hidden");
    return false;
});

$("#myvideo").bind("pause ended", function() {
    $("#videocover").css("visibility", "visible");
    $("#myvideo").attr("controls", false);
});

/* tabs into nutrition page */
$('#intro a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$('#guidlines a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$('#meals a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$('#foodlist a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$('#journal a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

+(function() {
    var photoBlock = document.querySelector('.nutrition__top-img-block');
    var nutritionTabs = document.querySelector('.nutrition__tabs');
    var nutritTopPhoto = document.querySelector('.nutrition__top-img');

    nutritionTabs.addEventListener('click', function(event) {
        var target = event.target;
        nutritTopPhoto.removeAttribute('style');

        if (!target.hasAttribute('data-name')) return;

        nutritTopPhoto.setAttribute('style', 'animation: opacityAnimation; animation-duration: 0.5s');
        var path = 'img/nutritionBg/' + target.getAttribute('data-name') + '.jpg'
        nutritTopPhoto.setAttribute('src', path);
    });
})();