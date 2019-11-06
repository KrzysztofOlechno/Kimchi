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
    speakNumber(cubeType, cube, randomShakeSound());
    
}

function speakNumber(cubeType, number, shake)
{
    var soundUrlString = 'soundsystem/' + number.toString() + '.mp3';
    var dalay = 2000;

    switch (shake) {
        case 1:
          delay = 4000;
          break;
        case 2:
          delay = 4000;
          break;
        case 3:
          delay = 5000;
          break;
        case 4:
          delay = 1500;
          break;
        default:
          console.log('Wrong shake buddy');
      }

    setTimeout(function(){
        playSound(soundUrlString);
    }, delay);
    
    console.log(soundUrlString, cubeType);
}

function playSound(url) {
    var sound = new Audio(url);
    sound.play();
}

function randomShakeSound(){
    var shakeNumber = parseInt((Math.random()*4)+1);
    var shakeUrlString = 'soundsystem/shake' + shakeNumber.toString() + '.mp3';
    playSound(shakeUrlString);

    return shakeNumber;
}
