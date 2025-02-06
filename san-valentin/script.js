const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
        
        if (!letter.classList.contains('opened')) {
            setTimeout(() => {
                letter.classList.add('letter-opening');

                setTimeout(() => {
                    letter.classList.remove('letter-opening');
                    letter.classList.add('opened');
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envelope *") ) {
        envelope.classList.remove('flap');
        if (letter.classList.contains("opened")) {
            letter.classList.add("closing-letter");
            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("opened");
            }, 500);
        }
    }
});

document.getElementById('musicButton').addEventListener('click', function() {
    var music = document.getElementById('music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    this.style.left = `${Math.random() * 200}px`;
    this.style.top = `${Math.random() * 200}px`;
});

document.getElementById('yesButton').addEventListener('click', function(e) {
    e.stopPropagation(); // Evita que otros eventos se disparen
    const letter = document.querySelector('.letter');
    const heartGif = document.getElementById('heartGif');

    // Verificar si la carta está abierta y cerrarla si es necesario
    if (letter.classList.contains('opened')) {
        letter.classList.add('closing-letter');
        setTimeout(() => {
            letter.classList.remove('closing-letter');
            letter.classList.remove('opened');
            showHeartGif();
        }, 1500);
    } else {
        showHeartGif();
    }

    function showHeartGif() {
        document.body.classList.add('darken');
        heartGif.classList.remove('hidden');

        // Ocultar la imagen después de 10 segundos
        setTimeout(function() {
            heartGif.classList.add('hidden');
            document.body.classList.remove('darken');
        }, 10000); // 10000 milisegundos = 10 segundos
    }
});