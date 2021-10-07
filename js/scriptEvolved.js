
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
var subField = document.getElementById("sub");
var subDiv = document.getElementById("sub").outerHTML;


buttonInformation.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("information", document.baseURI);
});

buttonAttribute.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("attribute", document.baseURI);
});

buttonState.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("state", document.baseURI);
});

buttonBattle.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("battle", document.baseURI);
});

buttonEqupiment.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("equipment", document.baseURI);
});

buttonItems.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("items", document.baseURI);
});

buttonAbilities.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("abilites", document.baseURI);
});

buttonSpells.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("spells", document.baseURI);
});

buttonComrades.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("comrades", document.baseURI);
});

buttonNotes.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("notes", document.baseURI);
});

buttonBio.addEventListener('click', function(){
  classChanger("kp", "invisible");
  getPlayerData("biography", document.baseURI);
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
        "<tr><td>Wiek: </td><td>" + locationInJson.age + "</td></tr>";

  return info;
}

function playerAttributes(locationInJson)
{
  var attr = "<tr><td><b>Cechy</b></td></tr>" +
  "<tr><td>Cecha</td><td>Bazowa</td><td>Bonus</td></tr>" + 
  "<tr><td>Krzepa: </td><td>" + locationInJson.attributes[0].basevalue + "</td><td>" + locationInJson.attributes[0].buffvalue + "</td></tr>" + 
  "<tr><td>Zwinność: </td><td>" + locationInJson.attributes[1].basevalue + "</td><td>" + locationInJson.attributes[1].buffvalue + "</td></tr>" +
  "<tr><td>Rozum: </td><td>" + locationInJson.attributes[2].basevalue + "</td><td>" + locationInJson.attributes[2].buffvalue + "</td></tr>" + 
  "<tr><td>Emocje: </td><td>" + locationInJson.attributes[3].basevalue + "</td><td>" + locationInJson.attributes[3].buffvalue + "</td></tr>" + 
  "<tr><td>Rzemiosło: </td><td>" + locationInJson.attributes[4].basevalue + "</td><td>" + locationInJson.attributes[4].buffvalue + "</td></tr>" + 
  "<tr><td>Wola: </td><td>" + locationInJson.attributes[5].basevalue + "</td><td>" + locationInJson.attributes[5].buffvalue + "</td></tr>";

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
        
        subField.outerHTML = makeTable(subMenuSwitch(subMenuType, myObj[i]));

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
  request.open('GET', requestURL);
  request.send();
}

function subMenuSwitch(subMenuType, locationInJson)
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
      return abilitiesListGenerator(locationInJson);
    case "spells":
      return spellsListGenerator(locationInJson);
    case "comrades":
      return comradeListGenerator(locationInJson);
    case "notes":
      return notesListGenerator(locationInJson);
    case "biography":
      return biographyGenerator(locationInJson); 
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

function abilitiesListGenerator(path)
{
  var abilites =  
  "<tr><td><b>Umiejętności</b></td></tr>" + 
  "<tr><td>Nazwa</td><td>Opis</td><td>Wymagania</td><td>Koszt</td><td>Efekt</td></tr>";
  for(var i=0; i<path.abilities.length;i++)
  {
    abilites += "<tr><td>" + path.abilities[i].name + "</td><td>" + path.abilities[i].description + "</td><td>" + path.abilities[i].requirements + "</td><td>" + path.abilities[i].cost + "</td><td>" + path.abilities[i].effect + "</td></tr>";
  }

  return abilites;
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