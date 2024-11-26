document.addEventListener('DOMContentLoaded', function() {
    const introOverlay = document.getElementById('intro-overlay');
    const mainContent = document.getElementById('main-content');
    const textQuote = document.getElementById('text-quote');
    const animatedText = document.getElementById('animated-text');
    const clipboardNotification = document.getElementById('clipboard-notification');
    const socialLink = document.getElementById('social-link');
    const audioPlayer = document.getElementById('audio-player');

    audioPlayer.loop = true;

    const sayings = [
        "' Legends never wait; they create their moment. '",
        "' Fraudulence isn't a skill, it's an art. '",
        "' Loyalty isn't promised, it's earned. '",
        "' Forever chasing the impossible. '",
        "' Pick always has a plan; even when you don't see it, he does. '"
    ];
    
    let sayingsIndex = 0;

    introOverlay.addEventListener('click', () => {
        audioPlayer.volume = 0.05;
        audioPlayer.play();
        introOverlay.style.opacity = '0';
        setTimeout(() => {
            introOverlay.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500);
    });

    function animateSayings() {
        const saying = sayings[sayingsIndex];
        let charPos = 1;
        textQuote.innerHTML = saying.charAt(0);
        function addChars() {
            if (charPos < saying.length) {
                textQuote.innerHTML += saying.charAt(charPos);
                charPos++;
                setTimeout(addChars, 70);
            } else {
                setTimeout(removeSayings, 2000);
            }
        }

        function removeSayings() {
            if (charPos > 1) {
                textQuote.innerHTML = textQuote.innerHTML.slice(0, -1);
                charPos--;
                setTimeout(removeSayings, 50);
            } else {
                sayingsIndex = (sayingsIndex + 1) % sayings.length;
                setTimeout(animateSayings, 1000);
            }
        }

        addChars();
    }

    animateSayings();

    socialLink.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('pickontop1091').then(() => {
            clipboardNotification.style.display = 'block';
            setTimeout(() => {
                clipboardNotification.style.opacity = '1';
            }, 10);
            setTimeout(() => {
                clipboardNotification.style.opacity = '0';
                setTimeout(() => {
                    clipboardNotification.style.display = 'none';
                }, 500);
            }, 2000);
        });
    });

    function rotatingText() {
        let glitchOptions = ["[ Pick ]", "[ Pick On Top. ]", "[ Pick On tiktok. ]", "[ Pick ❤️ ]"];
        let optionIndex = 0;

        function switchText() {
            const currentText = glitchOptions[optionIndex];
            animatedText.firstChild.textContent = currentText;
            document.title = currentText;
            optionIndex = (optionIndex + 1) % glitchOptions.length;
            setTimeout(switchText, 300);
        }

        switchText();
    }

    rotatingText();
});
