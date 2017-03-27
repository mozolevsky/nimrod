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

/* tabs-function */
function makeTabs(controlBlock, containerBlock, activeTabControl, activeArea) {
    var controlBlock = document.querySelector(controlBlock);
    var containerBlock = document.querySelector(containerBlock);

    if (controlBlock) {
        controlBlock.addEventListener('click', function(event) {
            var target = event.target;
            event.preventDefault();

            if (!target.hasAttribute('data-tab')) return;
            var tabNum = target.getAttribute('data-tab');

            for (var i = 0; i < controlBlock.children.length; i++) {
                if (controlBlock.children[i].className.indexOf(activeTabControl) !== -1) {
                    controlBlock.children[i].classList.remove(activeTabControl);
                }
            }

            for (var i = 0; i < containerBlock.children.length; i++) {
                if (containerBlock.children[i].className.indexOf(activeArea) !== -1) {
                    containerBlock.children[i].classList.remove(activeArea);
                }
            }

            target.classList.add(activeTabControl);
            containerBlock.children[tabNum - 1].classList.add(activeArea);
        });
    }
};

/* tabs nutrition meal */
makeTabs('.meals-tabs', '.meals-tabs__container', 'meals-tabs__link_active', 'meals-tabs__tab-area_active');

/* transform tabs */
makeTabs('.transform__block', '.transform__tabs-container', 'transform__letter_active', 'transform__tab-container_active');


/* the movement of the arrows function in accordions on the fitness page */
function moveArrow(mainArea, arrowParentNode, arrowClass, turnedClass) {
    if (mainArea) {
        mainArea.addEventListener('click', function(e) {
            var target = e.target;

            while (target.className !== mainArea.className) {

                if (target.className.indexOf(arrowParentNode) !== -1) {
                    var arrow = target.querySelector('.' + arrowClass);
                    if (arrow.className.indexOf(turnedClass) == -1) {
                        arrow.classList.add(turnedClass);
                    } else {
                        arrow.classList.remove(turnedClass);
                    }
                    break;
                }
                target = target.parentNode;
            }
        });
    }
}

/* moving arrows in accordions */
var fitness = document.querySelector('.fitness');
moveArrow(fitness, 'panel-heading', 'fitness__accordeon-arrow', 'arrow-turned');

var accordion2 = document.getElementById('accordion2');
moveArrow(accordion2, 'accordion-inner__header', 'accordion-inner__arrow', 'accordion-inner__arrow_turned');

var accordion3 = document.getElementById('accordion2');
moveArrow(accordion3, 'accordion-inner__header', 'accordion-inner__arrow', 'accordion-inner__arrow_turned');

var accordion4 = document.getElementById('accordion2');
moveArrow(accordion4, 'accordion-inner__header', 'accordion-inner__arrow', 'accordion-inner__arrow_turned');

/* Manage containers in accordions */
$(window).ready(function(){
    if ($(window).width() >= 768){
        $('.accordion-inner__body-wrapper').addClass('in');
    }
    if ($(window).width() <= 768){
        $('.accordion-inner__body-wrapper').removeClass('in');
    }
});

$('.accordion-inner__header[data-toggle="collapse"]').click(function(e){
    if ($(window).width() >= 768) {
        e.stopPropagation();
    }
});