buttonThrow = document.getElementsByClassName("buttonThrow")

// shake

for(var i=0;i<6;i++)
{
	buttonThrow[i].addEventListener('click', function(){
    getPlayerData(document.baseURI, this.id);	
	});
}

function getPlayerData(playerURI, skillId)
{
let requestURL = 'json/players.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) 
  {
    var myObj = JSON.parse(this.responseText);    
    for(var i=0;i<myObj.length;i++)
    {
      if(playerURI.includes(myObj[i].name.toLowerCase()))
      {
        var playerSkills = myObj[i].skills;
        for(var j=0;j<playerSkills.length;j++)
        {
          if(playerSkills[j].name == skillId)
          {
            var pskill = playerSkills[j];
            var base = pskill.basevalue;
            var buff = pskill.buffvalue;
            var secbuff = pskill.secbuffvalue

            throwAndSum(base, buff, secbuff);
          }
        }
      } 
    }
  }
};
request.open('GET', requestURL);
request.send();

}

function throwAndSum(base, second, third)
{
  var fir = skillToCubeConverter(base);
  var sec = skillToCubeConverter(second);
  var thi = skillToCubeConverter(third);

  var sum = 0;

  if(fir != null)
    {
      console.log(fir);
      sum += diceThrow(fir);
      console.log('Sum:' + sum);
    }
  if(sec != null)
    {
      console.log(sec);
      sum += diceThrow(sec);
      console.log('Sum:' + sum);
    }
  if(thi != null)
    {
      sum += diceThrow(thi);
      console.log('Sum:' + sum);
    }
    console.log('Suma to: ' + sum);
speakNumber(sum);
}

function skillToCubeConverter(skillValue)
{
  switch(skillValue) {
    case 1:
      return 4;
    case 2:
      return 6;
    case 3:
      return 8;
    case 4:
      return 10;
    case 5:
      return 12;
    case 6:
      return 20;
    default:
      return null;
  }
}

function diceThrow(cubeType)
{
	
    var cube = parseInt((Math.random()*cubeType)+1);
    var cubeTypeString = cubeType.toString();
    console.log('W wyniku rzutu kością 1k' + cubeTypeString + ' wypadła wartość:',cube);
    return cube;
}

function speakNumber(number)
{
    var soundUrlString = 'soundsystem/' + number.toString() + '.mp3';
    playSound(soundUrlString);  
    console.log(soundUrlString);
}

function playSound(url) {
    var sound = new Audio(url);
    sound.play();
}