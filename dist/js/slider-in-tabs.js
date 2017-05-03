'use strict';


/* slides on meals page in the tabs*/
+(function () {
    var swiper1 = new Swiper('.meals-tabs__slider-1', {
        nextButton: '.meals-tabs__slider-1 .meals-tab__pagination-link_active-right',
        prevButton: '.meals-tabs__slider-1 .meals-tab__pagination-link_active-left',
        pagination: '.meals-tabs__slider-1 .meals-tab__pagination-page',
        paginationType: 'fraction',
        keyboardControl: true
    });

    var tab2 = document.querySelectorAll('.meals-tabs__link')[1];
    var counter = 0;

    tab2.addEventListener('click', function () {
        if (counter !== 0) return;

        setTimeout(function() {
            var swiper2 = new Swiper('.meals-tabs__slider-2', {
                nextButton: '.meals-tabs__slider-2 .meals-tab__pagination-link_active-right',
                prevButton: '.meals-tabs__slider-2 .meals-tab__pagination-link_active-left',
                pagination: '.meals-tabs__slider-2 .meals-tab__pagination-page',
                paginationType: 'fraction',
                keyboardControl: true
            });
        }, 10);
        counter++;

    });

    var tab3 = document.querySelectorAll('.meals-tabs__link')[2];
    var counter2 = 0;

    tab3.addEventListener('click', function () {
        if (counter2 !== 0) return;

        setTimeout(function() {
            var swiper3 = new Swiper('.meals-tabs__slider-3', {
                nextButton: '.meals-tabs__slider-3 .meals-tab__pagination-link_active-right',
                prevButton: '.meals-tabs__slider-3 .meals-tab__pagination-link_active-left',
                pagination: '.meals-tabs__slider-3 .meals-tab__pagination-page',
                paginationType: 'fraction',
                keyboardControl: true
            });
        }, 10);
        counter2++;

    });
})();