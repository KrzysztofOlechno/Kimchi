startButton = document.getElementById("startButton");

button1k3 = document.getElementById("button1k3");
button1k4 = document.getElementById("button1k4");
button1k6 = document.getElementById("button1k6");
button1k8 = document.getElementById("button1k8");
button1k12 = document.getElementById("button1k12");
button1k20 = document.getElementById("button1k20");
button1k100 = document.getElementById("button1k100");

startButton.addEventListener('click',function() {
    playSound("sounds/shake.mp3");
    startButton.style.display = 'none';
    startButton.style.height = '1%';
    button1k3.style.display = 'block';
    button1k4.style.display = 'block';
    button1k6.style.display = 'block';
    button1k8.style.display = 'block';
    button1k12.style.display = 'block';
    button1k100.style.display = 'block';
});
//najechanie

button1k3.addEventListener('mouseenter', function(){
    playSound("sounds/k3.mp3");
});

button1k4.addEventListener('mouseenter', function(){
    playSound("sounds/k4.mp3");
});

button1k6.addEventListener('mouseenter', function(){
    playSound("sounds/k6.mp3");
});

button1k8.addEventListener('mouseenter', function(){
    playSound("sounds/k8.mp3");
});

button1k12.addEventListener('mouseenter', function(){
    playSound("sounds/k12.mp3");
});

button1k20.addEventListener('mouseenter', function(){
    playSound("sounds/k20.mp3");
});

button1k100.addEventListener('mouseenter', function(){
    playSound("sounds/k100.mp3");
});

// shake

button1k3.addEventListener('click', function(){
    playSound("sounds/shake.mp3");
    diceThrow(3);
});

button1k4.addEventListener('click', function(){
    playSound("sounds/shake.mp3");
    diceThrow(4);
});

button1k6.addEventListener('click', function(){
    playSound("sounds/shake.mp3");
    diceThrow(6);
});

button1k8.addEventListener('click', function(){
    playSound("sounds/shake.mp3");
    diceThrow(8);
});

button1k12.addEventListener('click', function(){
    playSound("sounds/shake.mp3");
    diceThrow(12);
});

button1k20.addEventListener('click', function(){
    playSound("sounds/shake.mp3");
    diceThrow(20);
});

button1k100.addEventListener('click', function(){
    playSound("sounds/shake.mp3");
    diceThrow(100);
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
    var soundUrlString = 'sounds/' + number.toString() +'.mp3';
    playSound(soundUrlString);
    console.log(soundUrlString, cubeType);
}

function playSound(url) {
    var sound = new Audio(url);
    sound.play();
}