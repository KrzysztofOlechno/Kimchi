let requestURL = 'json/players.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) 
    {
    var myObj = JSON.parse(this.responseText);    
    for(var i=0;i<myObj.length;i++)
      {
      if(document.baseURI.includes(myObj[i].name.toLowerCase()))
        {
            var general = document.getElementById("general");
            var myChar = myObj[i];
            var eq = equipmentListGeneratorP(myChar);
            general.outerHTML = "<div class='submenu visible' id='sub'><table>" + 
            "</td></tr><tr><td><b>1. Dane podstawowe</b>" +
            "<tr><td>Imię: </td><td>" + myChar.name +           
            "</td></tr><tr><td>Nazwisko: </td><td>" + myChar.surname + 
            "</td></tr><tr><td>Zajęcie: </td><td>" + myChar.occupation + 
            "</td></tr><tr><td>Gatunek: </td><td>" + myChar.species +
            "</td></tr><tr><td>Podgatunek: </td><td>" + myChar.subspecies +
            "</td></tr><tr><td>Rasa/Odmiana: </td><td>" + myChar.variety +
            "</td></tr><tr><td>Pochodzenie: </td><td>" + myChar.provenance + 
            "</td></tr><tr><td>Wiek: </td><td>" + myChar.age + 
            "</td></tr><tr><td><b>2. Atrybuty</b>" + 
            "</td></tr><tr><td>" + " - Krzepa:" + "</td><td>" + myChar.attributes[0].basevalue + "(+" + myChar.attributes[0].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Zwinność:" + "</td><td>" + myChar.attributes[1].basevalue + "(+" + myChar.attributes[1].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Rozum:" + "</td><td>" + myChar.attributes[2].basevalue + "(+" + myChar.attributes[2].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Emocje:" + "</td><td>" + myChar.attributes[3].basevalue + "(+" + myChar.attributes[3].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Rzemiosło:" + "</td><td>" + myChar.attributes[4].basevalue + "(+" + myChar.attributes[4].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Wola:" + "</td><td>" + myChar.attributes[5].basevalue + "(+" + myChar.attributes[5].buffvalue + ")" +
            "</td></tr><tr><td><b>3. Stany</b>" + 
            "</td></tr><tr><td>" + " - Zranienie:" + "</td><td>" + myChar.states[0].basevalue + "(+" + myChar.states[0].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Paraliż:" + "</td><td>" + myChar.states[1].basevalue + "(+" + myChar.states[1].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Otępienie:" + "</td><td>" + myChar.states[2].basevalue + "(+" + myChar.states[2].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Panika:" + "</td><td>" + myChar.states[3].basevalue + "(+" + myChar.states[3].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Zatrucie:" + "</td><td>" + myChar.states[4].basevalue + "(+" + myChar.states[4].buffvalue + ")" +
            "</td></tr><tr><td>" + " - Znużenie:" + "</td><td>" + myChar.states[5].basevalue + "(+" + myChar.states[5].buffvalue + ")" +
            "</td></tr><tr><td><b>5. Ekwipunek</b>" + 
            eq +
            "</td></tr></table>";
        } 
      }
    }
  }
request.open('GET', requestURL);
request.send();

var buttonInformation = document.getElementById("information");
var buttonAttribute = document.getElementById("attribute");
var buttonState = document.getElementById("state");
var buttonBattle = document.getElementById("battle");
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

function playerInformation(locationInJson)
{
  var info = "<div class='submenu visible' id='sub'><table><tr><td>Imię: </td><td>" + locationInJson.name +
        "</td></tr><tr><td>Nazwisko: </td><td>" + locationInJson.surname + 
        "</td></tr><tr><td>Zajęcie: </td><td>" + locationInJson.occupation + 
        "</td></tr><tr><td>Gatunek: </td><td>" + locationInJson.species +
        "</td></tr><tr><td>Podgatunek: </td><td>" + locationInJson.subspecies +
        "</td></tr><tr><td>Rasa/Odmiana: </td><td>" + locationInJson.variety +
        "</td></tr><tr><td>Pochodzenie: </td><td>" + locationInJson.provenance + 
        "</td></tr><tr><td>Wiek: </td><td>" + locationInJson.age + 
        "</td></tr></table>" + "<div id='bButton' class='backButton'>Cofnij</div></div>";

  return info;
}

function playerAttributes(locationInJson)
{
  var allSums = sumTable(locationInJson.attributes);
  var attr = "<div class='submenu visible' id='sub'><table><tr><td>Cecha</td><td>Bazowa</td><td>Bonus</td><td>Suma</td></tr>" + 
  "<tr><td>Krzepa: </td><td>" + locationInJson.attributes[0].basevalue + "</td><td>" + locationInJson.attributes[0].buffvalue + "</td><td>" + allSums[0] + "</td></tr>" + 
  "<tr><td>Zwinność: </td><td>" + locationInJson.attributes[1].basevalue + "</td><td>" + locationInJson.attributes[1].buffvalue + "</td><td>" + allSums[1] + "</td></tr>" +
  "<tr><td>Rozum: </td><td>" + locationInJson.attributes[2].basevalue + "</td><td>" + locationInJson.attributes[2].buffvalue + "</td><td>" + allSums[2] + "</td></tr>" + 
  "<tr><td>Emocje: </td><td>" + locationInJson.attributes[3].basevalue + "</td><td>" + locationInJson.attributes[3].buffvalue + "</td><td>" + allSums[3] + "</td></tr>" + 
  "<tr><td>Rzemiosło: </td><td>" + locationInJson.attributes[4].basevalue + "</td><td>" + locationInJson.attributes[4].buffvalue + "</td><td>" + allSums[4] + "</td></tr>" + 
  "<tr><td>Wola: </td><td>" + locationInJson.attributes[5].basevalue + "</td><td>" + locationInJson.attributes[5].buffvalue + "</td><td>" + allSums[5] + "</td></tr>" + 
  "</table>"+ "<div id='bButton' class='backButton'>Cofnij</div></div>";

  return attr;
}

function playerStates(locationInJson)
{
  var allSums = sumTable(locationInJson.states);
  var attr = "<div class='submenu visible' id='sub'><table><tr><td>Stan</td><td>Bazowa</td><td>Bonus</td><td>Suma</td></tr>" + 
  "<tr><td>Zranienie: </td><td>" + locationInJson.states[0].basevalue + "</td><td>" + locationInJson.states[0].buffvalue + "</td><td>" + allSums[0] + "</td></tr>" + 
  "<tr><td>Paraliż: </td><td>" + locationInJson.states[1].basevalue + "</td><td>" + locationInJson.states[1].buffvalue + "</td><td>" + allSums[1] + "</td></tr>" +
  "<tr><td>Otępienie: </td><td>" + locationInJson.states[2].basevalue + "</td><td>" + locationInJson.states[2].buffvalue + "</td><td>" + allSums[2] + "</td></tr>" + 
  "<tr><td>Panika: </td><td>" + locationInJson.states[3].basevalue + "</td><td>" + locationInJson.states[3].buffvalue + "</td><td>" + allSums[3] + "</td></tr>" + 
  "<tr><td>Zatrucie: </td><td>" + locationInJson.states[4].basevalue + "</td><td>" + locationInJson.states[4].buffvalue + "</td><td>" + allSums[4] + "</td></tr>" + 
  "<tr><td>Znużenie: </td><td>" + locationInJson.states[5].basevalue + "</td><td>" + locationInJson.states[5].buffvalue + "</td><td>" + allSums[5] + "</td></tr>" + 
  "</table>"+ "<div id='bButton' class='backButton'>Cofnij</div></div>";

  return attr;
}

function playerBattle(locationInJson)
{
  var allSums = sumTable(locationInJson.battle);
  var attr = "<div class='submenu visible' id='sub'><table><tr><td>Stan</td><td>Bazowa</td><td>Bonus</td><td>Suma</td></tr>" + 
  "<tr><td>Reakcja: </td><td>" + locationInJson.battle[0].basevalue + "</td><td>" + locationInJson.battle[0].buffvalue + "</td><td>" + allSums[0] + "</td></tr>" + 
  "<tr><td>Ataki: </td><td>" + locationInJson.battle[1].basevalue + "</td><td>" + locationInJson.battle[1].buffvalue + "</td><td>" + allSums[1] + "</td></tr>" +
  "<tr><td>Czary: </td><td>" + locationInJson.battle[2].basevalue + "</td><td>" + locationInJson.battle[2].buffvalue + "</td><td>" + allSums[2] + "</td></tr>" + 
  "</table>"+ "<div id='bButton' class='backButton'>Cofnij</div></div>";

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
        
        subField.outerHTML = subMenuSwitch(subMenuType, myObj[i]);

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
      return playerInformation(locationInJson);
    case "attribute":
      return playerAttributes(locationInJson);
    case "state":
      return playerStates(locationInJson);
    case "battle":
      return playerBattle(locationInJson);
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

function equipmentListGeneratorP(path)
{
  var equipment = "<tr><td>Nazwa</td><td>Opis</td></tr>"
  for(var i=0; i<path.equipment.length;i++)
  {
    equipment += "<tr><td>" + path.equipment[i].name + "</td><td>" + path.equipment[i].description + "</td></tr>";
    console.log(path.equipment[i]);
  }

  return equipment;
}