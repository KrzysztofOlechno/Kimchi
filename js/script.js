//Przycisk cofania w przeglądarce
window.onpopstate = function() {
  if(location.hash != "#next"){
    console.log(window.location.hash, 1);
    classChanger("sub", "invisible");
    classChanger("kp", "visible");
    document.getElementById("sub").outerHTML = subDiv;
    subField = document.getElementById("sub");
  }
};

var buttonInformation = document.getElementById("information");
var buttonAttribute = document.getElementById("attribute");
var buttonState = document.getElementById("state");
var buttonBattle = document.getElementById("battle");
var buttonEqupiment = document.getElementById("equipment");
var buttonItems = document.getElementById("items");
var buttonAbilities = document.getElementById("abilities");
var buttonSpells = document.getElementById("spells");
var buttonComrades = document.getElementById("companions");
var buttonNotes = document.getElementById("notes");
var buttonBio = document.getElementById("biography");
var buttonsHerbs = document.getElementById("herbarium");
var subField = document.getElementById("sub");
var subDiv = document.getElementById("sub").outerHTML;

buttonInformation.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("information", document.baseURI);
  console.log(window.location.hash, 2);
});

buttonAttribute.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("attribute", document.baseURI);
});

buttonState.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("state", document.baseURI);
});

buttonBattle.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("battle", document.baseURI);
});

buttonEqupiment.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("equipment", document.baseURI);
});

buttonItems.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("items", document.baseURI);
});

buttonAbilities.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("abilites", document.baseURI);
});

buttonSpells.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("spells", document.baseURI);
});

buttonComrades.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("comrades", document.baseURI);
});

buttonNotes.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("notes", document.baseURI);
});

buttonBio.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("biography", document.baseURI);
});

buttonsHerbs.addEventListener('click', function(){
  window.location.hash = '#next';
  classChanger("kp", "invisible");
  getPlayerData("herbarium", document.baseURI);
});

function playerInformation(locationInJson)
{
  var info =  "<tr><td><b>Dane podstawowe</b></td></tr>" + 
        "<tr><td>Imię: </td><td>" + locationInJson.name + "</td></tr>" +
        "<tr><td>Nazwisko: </td><td>" + locationInJson.surname + "</td></tr>" +
        "<tr><td>Zajęcie: </td><td>" + locationInJson.occupation + "</td></tr>" +
        "<tr><td>Gatunek: </td><td>" + locationInJson.species + "</td></tr>" +
        "<tr><td>Podgatunek: </td><td>" + locationInJson.subspecies + "</td></tr>" +
        "<tr><td>Rasa/Odmiana: </td><td>" + locationInJson.variety + "</td></tr>" +
        "<tr><td>Pochodzenie: </td><td>" + locationInJson.provenance + "</td></tr>" +
        "<tr><td>Wzrost: </td><td>" + locationInJson.height + "</td></tr>" +
        "<tr><td>Włosy: </td><td>" + locationInJson.haircolor + "</td></tr>" +
        "<tr><td>Oczy: </td><td>" + locationInJson.eyecolor + "</td></tr>" +
        "<tr><td>Znaki szczególne: </td><td>" + locationInJson.peculiarities + "</td></tr>";

  return info;
}

function playerAttributes(locationInJson)
{
  var attr = "<tr><td><b>Cechy</b></td></tr>" +
  "<tr><td>Cecha</td><td>Bazowa</td><td>Bonus</td></tr>" + 
  "<tr><td><button class='buttonThrow' id='strength' aria-label='Krzepa'>Krzepa</button></td><td>" + locationInJson.attributes[0].basevalue + "</td><td>" + locationInJson.attributes[0].buffvalue + "</td></tr>" + 
  "<tr><td><button class='buttonThrow' id='agility' aria-label='Zwinność'>Zwinność</button></td><td>" + locationInJson.attributes[1].basevalue + "</td><td>" + locationInJson.attributes[1].buffvalue + "</td></tr>" +
  "<tr><td><button class='buttonThrow' id='mind' aria-label='Rozum'>Rozum</button></td><td>" + locationInJson.attributes[2].basevalue + "</td><td>" + locationInJson.attributes[2].buffvalue + "</td></tr>" + 
  "<tr><td><button class='buttonThrow' id='emotions' aria-label='Emocje'>Emocje</button></td><td>" + locationInJson.attributes[3].basevalue + "</td><td>" + locationInJson.attributes[3].buffvalue + "</td></tr>" + 
  "<tr><td><button class='buttonThrow' id='craft' aria-label='Rzemiosło'>Rzemiosło</button></td><td>" + locationInJson.attributes[4].basevalue + "</td><td>" + locationInJson.attributes[4].buffvalue + "</td></tr>" + 
  "<tr><td><button class='buttonThrow' id='willpower' aria-label='Wola'>Wola</button></td><td>" + locationInJson.attributes[5].basevalue + "</td><td>" + locationInJson.attributes[5].buffvalue + "</td></tr>";

  return attr;
}

function playerStates(locationInJson)
{
  var attr = "<tr><td><b>Stany</b></td></tr>" +
  "<tr><td>Stan</td><td>Bazowa</td><td>Bonus</td></tr>" + 
  "<tr><td>Zranienie: </td><td>" + locationInJson.states[0].basevalue + "</td><td>" + locationInJson.states[0].buffvalue + "</td></tr>" + 
  "<tr><td>Paraliż: </td><td>" + locationInJson.states[1].basevalue + "</td><td>" + locationInJson.states[1].buffvalue + "</td></tr>" +
  "<tr><td>Otępienie: </td><td>" + locationInJson.states[2].basevalue + "</td><td>" + locationInJson.states[2].buffvalue + "</td></tr>" + 
  "<tr><td>Panika: </td><td>" + locationInJson.states[3].basevalue + "</td><td>" + locationInJson.states[3].buffvalue + "</td></tr>" + 
  "<tr><td>Zatrucie: </td><td>" + locationInJson.states[4].basevalue + "</td><td>" + locationInJson.states[4].buffvalue + "</td></tr>" + 
  "<tr><td>Znużenie: </td><td>" + locationInJson.states[5].basevalue + "</td><td>" + locationInJson.states[5].buffvalue + "</td></tr>";

  return attr;
}

function playerBattle(locationInJson)
{
  var attr =  "<tr><td><b>Walka</b></td></tr>" +
  "<tr><td>Stan</td><td>Bazowa</td><td>Bonus</td><td>Suma</td></tr>" + 
  "<tr><td>Reakcja: </td><td>" + locationInJson.battle[0].basevalue + "</td><td>" + locationInJson.battle[0].buffvalue + "</td><td>" + sumTable(locationInJson.battle)[0] + "</td></tr>" +
  "<tr><td>Ataki: </td><td>" + locationInJson.battle[1].basevalue + "</td><td>" + locationInJson.battle[1].buffvalue + "</td><td>" + sumTable(locationInJson.battle)[1] + "</td></tr>" +
  "<tr><td>Czary: </td><td>" + locationInJson.battle[2].basevalue + "</td><td>" + locationInJson.battle[2].buffvalue + "</td><td>" + sumTable(locationInJson.battle)[2] + "</td></tr>"; 

  return attr;
}

function getPlayerData(subMenuType, playerURI)
{
  //let playerURL = 'json/players.json';
  let playerURL = 'json/cleanplayer.json';
  let playerJSON = new XMLHttpRequest();
  playerJSON.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) 
    {
    var myObj = JSON.parse(this.responseText);
    console.log(myObj);    
    for(var i=0;i<myObj.players.length;i++)
      {
      if(playerURI.includes(myObj.players[i].name.toLowerCase()))
        {
        subField.outerHTML = makeTable(subMenuSwitch(subMenuType, myObj.players[i], myObj));

        var buttonThrow = document.getElementsByClassName("buttonThrow");  
        if(buttonThrow.length!=0)
        {
          for(var i=0;i<6;i++)
          {
	          buttonThrow[i].addEventListener('click', function(){
            getPlayerDataSkillsThrow(document.baseURI, this.id);	
	          });
          };
        };
        
        var backButton = document.getElementById("bButton");

        backButton.addEventListener('click', function(){
          classChanger("sub", "invisible");
          classChanger("kp", "visible");
          document.getElementById("sub").outerHTML = subDiv;
          subField = document.getElementById("sub");    
        });
        } 
      }
    }
  };
  playerJSON.open('GET', playerURL);
  playerJSON.send();
}

function subMenuSwitch(subMenuType, locationInJson, fullJson)
{
  switch(subMenuType) {
    case "information":
      return  playerInformation(locationInJson);
    case "attribute":
      return playerAttributes(locationInJson);
    case "state":
      return playerStates(locationInJson);
    case "battle":
      return playerBattle(locationInJson);
    case "equipment":
      return equipmentListGenerator(locationInJson);
    case "items":
      return itemsListGenerator(locationInJson);
    case "abilites":
      return abilitiesListGenerator(locationInJson, fullJson.skills);
    case "spells":
      return spellsListGenerator(locationInJson);
    case "comrades":
      return comradeListGenerator(locationInJson);
    case "notes":
      return notesListGenerator(locationInJson);
    case "biography":
      return biographyGenerator(locationInJson); 
    case "herbarium":
      return herbListGenerator(locationInJson, fullJson.herbs);   
    default:
      return null;
  }
}

function classChanger(idLocator, newClassName)
{
  document.getElementById(idLocator).className = newClassName;
}

function sumTable(path)
{
  var sum = [];
  for(var i=0; i<path.length;i++)
  {
    var item1 = parseInt(path[i].basevalue);
    var item2 = parseInt(path[i].buffvalue);
    sum[i] = item1 + item2;
  }
  console.log(sum)
  return sum;
}

function equipmentListGenerator(path)
{
  var equipment =  
  "<tr><td><b>Ekwipunek</b></td></tr>" + 
  "<tr><td>Nazwa</td><td>Opis</td><td>Typ</td><td>Umiejscowienie</td><td>Właściwości</td></tr>";

  for(var i=0; i<path.equipment.length;i++)
  {
    equipment += "<tr><td>" + path.equipment[i].name + "</td><td>" + path.equipment[i].description + "</td><td>" + path.equipment[i].type + "</td><td>" + path.equipment[i].bodypart + "</td><td>" + path.equipment[i].ability + "</td></tr>";
  }
  
  return equipment;
}

function itemsListGenerator(path)
{
  var items =  
  "<tr><td><b>Przedmioty</b></td></tr>" + 
  "<tr><td>Nazwa</td><td>Opis</td><td>Właściwości</td></tr>";
  for(var i=0; i<path.items.length;i++)
  {
    items += "<tr><td>" + path.items[i].name + "</td><td>" + path.items[i].description + "</td><td>" + path.items[i].ability + "</td></tr>";
  }

  return items;
}

function abilitiesListGenerator(path, skillsList)
{
  if (path.knownskills == 0){
    var skills = 'Ta postać nie ma umiejętności.';
    return skills;
  } else {
  var skills = 
  "<tr><td><b>Umiejętności</b></td></tr>" +
  "<tr><td>Nazwa</td><td>Opis</td></tr>";
    for(var i=0;i<path.knownskills.length;i++){

      var skillNumb = path.knownskills[i]-1;

      if(skillsList[skillNumb].level != null){
        var level = skillsList[skillNumb].level;
      } else {
          var level = '';
      };
      
      skills += "<tr><td>" + skillsList[skillNumb].name + " " + level +
      "</td><td>" + skillsList[skillNumb].description + "</td></tr>";
    };
  return skills;
  };
}



function spellsListGenerator(path)
{
  var spells = 
  "<tr><td><b>Zaklęcia</b></td></tr>" + 
  "<tr><td>Nazwa</td><td>Opis</td><td>Wymagania</td><td>Koszt</td><td>Efekt</td></tr>";
  for(var i=0; i<path.spells.length;i++)
  {
    spells += "<tr><td>" + path.spells[i].name + "</td><td>" + path.spells[i].description + "</td><td>" + path.spells[i].requirements + "</td><td>" + path.spells[i].cost + "</td><td>" + path.spells[i].effect + "</td></tr>";
  }

  return spells;
}

function comradeListGenerator(path)
{
  var comrade = path.comrades;
  var comrades = "<tr><td><b>Towarzysze</b></td></tr>";
  for(var i=0; i<comrade.length;i++)
  {
    comrades += playerInformation(comrade[i]) +  
    equipmentListGenerator(comrade[i]) +
    itemsListGenerator(comrade[i]) +
    abilitiesListGenerator(comrade[i]);
  }

  return comrades;
}

function notesListGenerator(path)
{
  var notes = 
  "<tr><td><b>Notatki</b></td></tr>"; 
  
  for(var i=0; i<path.notes.length;i++)
  {
    notes += "<tr><td>" + path.notes[i].content + "</td></tr>";
  }

  return notes;
}

function biographyGenerator(path)
{
  var bio = 
  "<tr><td><b>Biografia</b></td></tr>" +
  "<tr><td>" + path.biography + "</td></tr>";

  return bio;
}

function herbListGenerator(path, herbarium){
  if (path.knownherbs == 0){
    var herbs = 'Ta postać nie zna jeszcze żadnych ziół';
    return herbs;
  } else {
  var herbs = 
  "<tr><td><b>Zioła</b></td></tr>" +
  "<tr><td>Nazwa formalna</td><td>Nazwa potoczna</td><td>Efekt</td><td>Morfologia</td></tr>";
    for(var i=0;i<path.knownherbs.length;i++){
      var herbNumb = path.knownherbs[i]-1;
      herbs += "<tr><td>" + herbarium[herbNumb].nameformal + 
      "</td><td>" + herbarium[herbNumb].namecasual + 
      "</td><td>" + herbarium[herbNumb].effects + 
      "</td><td>" + herbarium[herbNumb].morphology + "</td></tr>";
    }
  return herbs;
  }
}


function addOpenDiv() {

  var openDiv = "<div class='submenu visible' id='sub'>";

  return openDiv;
}

function addCloseDiv() {

  var closeDiv = "</div>";

  return closeDiv;
}

function addCloseButton() {

  var addCloseButton = "<div id='bButton' class='backButton'>Cofnij</div>";

  return addCloseButton;
}

function addOpenTable() {

  var addOpenTable = "<table>";

  return addOpenTable;
}

function addCloseTable() {

  var addCloseTable = "</table>";

  return addCloseTable;
}

function makeTable(type){

  var table = addOpenDiv() + addOpenTable() + type + addCloseTable() + addCloseButton() + addCloseDiv();
  console.log(table);
  return table;
}

//Rzuty kostkami

function getPlayerDataSkillsThrow(playerURI, attribute)
{
let requestURL = 'json/cleanplayer.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) 
  {
    var myObj = JSON.parse(this.responseText);    
    for(var i=0;i<myObj.players.length;i++)
    {
      if(playerURI.includes(myObj.players[i].name.toLowerCase()))
      {
        var playerSkills = myObj.players[i].attributes;
        for(var j=0;j<playerSkills.length;j++)
        {
          if(playerSkills[j].name == attribute)
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
//Kostki
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
    sound.volume = 1.0; 
    sound.play();
}