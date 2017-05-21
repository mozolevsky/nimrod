

var vm = new Vue({
    el: '#app',
    data: {
        visible: false,
        currentBlock: '',
        message: '',
        menuVisible: false
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
        passData: function(blockTitle, blockData) {
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

