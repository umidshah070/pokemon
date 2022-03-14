

var elList = document.querySelector(".list");

for(var pokemon of pokemons){

  var newItem = document.createElement("li");
  var newBlock = document.createElement("div");
  var newImg = document.createElement("img");
  var newHeading = document.createElement("h2");
  var newHeadingg = document.createElement("h3");
  var newTime= document.createElement("time");
  var newSubList= document.createElement("ul");
  var newText = document.createElement("p");
  var newTextt = document.createElement("p");




  for(var types of pokemon.type){

    var newSubItem = document.createElement("li");
    newSubItem.textContent = types;
    newSubList.appendChild(newSubItem);

  }




  newBlock.setAttribute("class", "list__block");
  newImg.setAttribute("src", pokemon.img);
  newImg.setAttribute("class", "list__img");
  newHeading.textContent = pokemon.num;
  newHeadingg.textContent = pokemon.name;
  newItem.setAttribute("class", "list__item");
  newSubList.setAttribute("class","list__block-list");
  newTime.textContent = formatDate();
  newTime.setAttribute("class", "list__block-time");
  newText.textContent ="Height- " +  pokemon.height;
  newText.setAttribute("class", "list-block-text");
  newTextt.textContent ="Weight- " + pokemon.weight;
  newTextt.setAttribute("class", "list-block-text");








  newItem.appendChild(newImg);
  newBlock.appendChild(newHeading);
  newBlock.appendChild(newHeadingg);
  newBlock.appendChild(newText);
  newBlock.appendChild(newTextt);
  newBlock.appendChild(newSubList);
  newBlock.appendChild(newTime);
  newItem.appendChild(newBlock);
  elList.appendChild(newItem);
}