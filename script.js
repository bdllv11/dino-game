const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const jumpBtn = document.getElementById('button');

document.addEventListener('keydown', function(event){
    jump();
});

button.onclick = function jump () {
        if (dino.classList != 'jump') {
            dino.classList.add('jump');
        }
        setTimeout(function(){
            dino.classList.remove('jump')
        }, 400)
    }

function jump () {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(function(){
        dino.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('GAME OVER!')
    };
})