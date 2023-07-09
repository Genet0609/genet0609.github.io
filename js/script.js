
window.addEventListener('DOMContentLoaded', function () {
    const greetingElement = document.getElementById('Logo').querySelector('h4');
    const greetings = ['おはようございます。', 'こんにちは。', 'こんばんは。', 'おやすみ。'];
    const typingSpeed = 120;
    const displayTime = 2000;

    function typeWriterEffect(element, text, speed, callback) {
        let i = 0;
        const interval = setInterval(function () {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                if (callback) {
                    setTimeout(callback, displayTime);
                }
            }
        }, speed);
    }

    function deleteText(element, speed, callback) {
        let text = element.textContent;
        let i = text.length - 1;
        const interval = setInterval(function () {
            if (i >= 0) {
                element.textContent = text.substring(0, i);
                i--;
            } else {
                clearInterval(interval);
                if (callback) {
                    setTimeout(callback, speed);
                }
            }
        }, speed);
    }

    function changeGreeting() {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        let greetingIndex = 0;

        if (currentHour >= 8 && currentHour < 12) {
            greetingIndex = 0;
        }
        else if (currentHour >= 12 && currentHour < 18) {
            greetingIndex = 1;
        }
        else if (currentHour >= 18 && currentHour < 21) {
            greetingIndex = 2;
        }
        else {
            greetingIndex = 3;
        }

        deleteText(greetingElement, typingSpeed, function () {
            typeWriterEffect(greetingElement, greetings[greetingIndex], typingSpeed, function () {
                deleteText(greetingElement, typingSpeed, changeGreeting);
            });
        });
    }

    changeGreeting();
});







