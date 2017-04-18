/* video */

document.body.addEventListener('click', function (e) {
    var target = e.target;

    if (target.className == 'videocover' || target.parentNode.className == 'videocover') {
        var video = target.parentElement.parentElement.querySelector('.video-container__video');
        var cover = target.parentElement.parentElement.querySelector('.videocover');

        if (video.getAttribute("data-control") !== null) {
            console.log('Тут нужно скрыть контролы');
        } else {
            video.setAttribute("controls", true);
        }
        video.play();
        cover.setAttribute("style", 'visibility: hidden');
     }
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

/* moving arrows in accordions on the fitness page*/
var fitness = document.querySelector('.fitness');
moveArrow(fitness, 'panel-heading', 'fitness__accordeon-arrow', 'arrow-turned');

var accordion2 = document.getElementById('accordion2');
moveArrow(accordion2, 'accordion-inner__header', 'accordion-inner__arrow', 'accordion-inner__arrow_turned');

var accordion3 = document.getElementById('accordion3');
moveArrow(accordion3, 'accordion-inner__header', 'accordion-inner__arrow', 'accordion-inner__arrow_turned');

var accordion4 = document.getElementById('accordion4');
moveArrow(accordion4, 'accordion-inner__header', 'accordion-inner__arrow', 'accordion-inner__arrow_turned');

/* moving arrows in accordion on the video page*/
var accordion5 = document.getElementById('accordion-video');
moveArrow(accordion5, 'video-accordion__button', 'video-accordion__arrow', 'video-accordion__arrow_turned');


/* Manage containers in accordions */
$(window).ready(function(){
    if ($(window).width() >= 750){
        $('.accordion-inner__body-wrapper').addClass('in');
    }
    if ($(window).width() <= 750){
        $('.accordion-inner__body-wrapper').removeClass('in');
    }
});

$(window).resize(function(){
    if ($(window).width() >= 750){
        $('.accordion-inner__body-wrapper').addClass('in');
    }
    if ($(window).width() <= 750){
        $('.accordion-inner__body-wrapper').removeClass('in');
    }
});

$('.accordion-inner__header[data-toggle="collapse"]').click(function(e){
    if ($(window).width() >= 750) {
        e.stopPropagation();
    }
});

/* Video Page accordion. Button change state */

function changeState(mainArea, targetClass, newStateClass) {
    if (mainArea) {
        mainArea.addEventListener('click', function(e) {
            var target = e.target;

            while (target.className !== mainArea.className) {

                if (target.className.indexOf(targetClass) !== -1) {
                    if (target.className.indexOf(newStateClass) == -1) {
                        target.classList.add(newStateClass);
                        target.firstChild.textContent = 'Hide videos';
                    } else {
                        target.classList.remove(newStateClass);
                        target.firstChild.textContent = 'Show videos';
                    }
                    break;
                }
                target = target.parentNode;
            }
        });
    }
}

var videoAccordion = document.querySelector('.video-accordion');
changeState(videoAccordion, 'video-accordion__button', 'video-accordion__button_opened');


