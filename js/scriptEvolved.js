var buttonInformation = document.getElementById("information");
var buttonAttribute = document.getElementById("attribute");
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
  var attr = "<div class='submenu visible' id='sub'><table><tr><td>Cecha</td><td>Bazowa</td><td>Bonus</td><td>Suma</td></tr>" + 
  "<tr><td>Krzepa: </td><td>" + locationInJson.attributes[0].basevalue + "</td><td>" + locationInJson.attributes[0].buffvalue + "</td><td>" + locationInJson.attributes[0].basevalue + locationInJson.attributes[0].buffvalue + "</td></tr>" + 
  "<tr><td>Zwinność: </td><td>" + locationInJson.attributes[1].basevalue + "</td><td>" + locationInJson.attributes[1].buffvalue + "</td><td>" + locationInJson.attributes[1].basevalue + locationInJson.attributes[1].buffvalue + "</td></tr>" +
  "<tr><td>Rozum: </td><td>" + locationInJson.attributes[2].basevalue + "</td><td>" + locationInJson.attributes[2].buffvalue + "</td><td>" + locationInJson.attributes[2].basevalue+locationInJson.attributes[2].buffvalue + "</td></tr>" + 
  "<tr><td>Emocje: </td><td>" + locationInJson.attributes[3].basevalue + "</td><td>" + locationInJson.attributes[3].buffvalue + "</td><td>" + locationInJson.attributes[3].basevalue+locationInJson.attributes[3].buffvalue + "</td></tr>" + 
  "<tr><td>Rzemiosło: </td><td>" + locationInJson.attributes[4].basevalue + "</td><td>" + locationInJson.attributes[4].buffvalue + "</td><td>" + locationInJson.attributes[4].basevalue+locationInJson.attributes[4].buffvalue + "</td></tr>" + 
  "<tr><td>Wola: </td><td>" + locationInJson.attributes[5].basevalue + "</td><td>" + locationInJson.attributes[5].buffvalue + "</td><td>" + locationInJson.attributes[5].basevalue+locationInJson.attributes[5].buffvalue + "</td></tr>" + 
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
    default:
      return null;
  }
}

function classChanger(idLocator, newClassName)
{
  document.getElementById(idLocator).className = newClassName;
}

