startButton = document.getElementById("startButton");

button1k3 = document.getElementById("button1k3");
button1k4 = document.getElementById("button1k4");
button1k6 = document.getElementById("button1k6");
button1k8 = document.getElementById("button1k8");
button1k10 = document.getElementById("button1k10");
button1k12 = document.getElementById("button1k12");
button1k20 = document.getElementById("button1k20");


// shake

button1k3.addEventListener('click', function(){
    diceThrow(3);
});

button1k4.addEventListener('click', function(){
    diceThrow(4);
});

button1k6.addEventListener('click', function(){
    diceThrow(6);
});

button1k8.addEventListener('click', function(){
    diceThrow(8);
});

button1k10.addEventListener('click', function(){
    diceThrow(10);
});

button1k12.addEventListener('click', function(){
    diceThrow(12);
});

button1k20.addEventListener('click', function(){
    diceThrow(20);
});

function diceThrow(cubeType)
{
    
    var cube = parseInt((Math.random()*cubeType)+1);
    var cubeTypeString = cubeType.toString();
    console.log('W wyniku rzutu kością 1k' + cubeTypeString + ' wypadła wartość:',cube);
    speakNumber(cubeType, cube);
    
}

function speakNumber(cubeType, number)
{
    playSound('soundsystem/shake1.mp3');
    var delay = 2000;
    var soundUrlString = 'soundsystem/' + number.toString() + '.mp3';
    
    setTimeout(function(){
        playSound(soundUrlString);
    }, delay);
    
    console.log(soundUrlString, cubeType);
}

function playSound(url) {
    var sound = new Audio(url);
    sound.play();
}
