
Vue.component('score-wrapper', {
    props: ['titleName'],
    template: '<article class="tracking__score-item">' +
    '<score-block></score-block>' +
    '<score-title v-bind:content="titleName"></score-title>' +
    '<score-button></score-button>' +
    '</article>'
});

Vue.component('score-block', {
    template: '<div class="tracking__score-block" hidden>' +
                    '<span class="tracking__score-number"></span>' +
                    '<i class="tracking__score-unit">sec</i>' +
                    '<div class="tracking__edit tracking__edit_score">Edit</div>' +
                '</div>'
});

Vue.component('score-title', {
    template: '<h4 class="tracking__title">{{ content }}</h4>',
    props: ['content']
});

Vue.component('score-button', {
    template: '<button class="tracking__add tracking__add_score" >Add</button>'
});

var vm = new Vue({
    el: '#app',
    data: {
        visible: false,
        currentBlock: '',
        message: '',
        menuVisible: false,
        scoreBlocks: [
            { title: 'Plank Hold' },
            { title: 'Jump Squats' },
            { title: 'Toe Taps' },
            { title: 'Wall Sit' },
            { title: 'Push Up Test' }
        ]
    },
    methods: {
        open: function (event) {
            this.visible = true;
            this.currentBlock = event.currentTarget;
        },
        close: function () {
            this.visible = false;
        },
        send: function () {
            var scoreBlock = this.currentBlock.querySelector('.tracking__score-block');

            if (scoreBlock.hasAttribute('hidden')) {
                scoreBlock.removeAttribute('hidden');
                if (!this.currentBlock.matches('.tracking__sum-wrap')) {
                    this.currentBlock.classList.add('tracking__score-item_active');
                }
            }

            var scoreNumber = scoreBlock.querySelector('.tracking__score-number');
            scoreNumber.innerHTML = this.message || 0;
            this.passData();
            this.message = '';

            var scoreAdd = this.currentBlock.querySelector('.tracking__add');
            scoreAdd.setAttribute('hidden', true);

            this.close();
        },
        passData: function() {
            var formData = {
                name: this.formName,
                value: this.message
            };
            console.log(formData);

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/file.php");
            xhr.send(formData);
        },
        openMobileMenu: function() {
            this.menuVisible = true;
        },
        closeMobileMenu: function() {
            this.menuVisible = false;
        }
    },
    watch: {
            message: function() {
                var sendButton = document.querySelector('.motivation__popup-btn');
                var input = document.querySelector('.motivation__popup-input');

                if (isNaN(this.message)) {
                    sendButton.setAttribute('disabled', true);
                    input.style.border = '1px solid red';
                } else {
                    sendButton.removeAttribute('disabled');
                    input.removeAttribute('style');
                }
            }
        },
    computed: {
        formName: function() {
            return this.currentBlock.querySelector('.tracking__title').innerText;
        }
    }
});

