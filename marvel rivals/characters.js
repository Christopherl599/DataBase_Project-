let characters, info;

async function init(){
  let link = "https://organic-space-fiesta-x5pw6pjvv5ggfvwvp-8500.app.github.dev"; //replace with your Dev URL
  let route= "/character";

  info = await fetch(link+route);
  characters = await info.json();

  generateCards(characters);
}

function generateCards(characters){
  
  let centerpanel = document.getElementById("centerpanel");
  centerpanel.innerHTML = "";
  
  //FLIP CARDS
  let front ="";
  let back ="";

  for(let i=0; i<characters.length; i++){
    let character = characters[i];
    front = `<div class="card" >`
    front += `<img src = 'supes/${character.character}.webp'>`;
   front += '</div>';

    back = `<div class="card" >`
    back += `<h3> Name ${character.character}</h3>`;
    back += `<div> Role : ${character.role}</div>`;
    back += `<div> Color : ${character.color}</div>`;
    back += `<hr>`;
    back += `</div>`;

    let card = new FlipCard(front, back);
    card.render("centerpanel");
  }
  // Now inject the build content into the output container
 
}

function filter(){
  let name = document.getElementById("name").value;
  console.log(name);

  let characterList = []; //create a list of sogs searched for

  for(let i=0; i<characters.length;i++){
    let character = characters[i] //get each sog
    
    //make sure the list is no
    if( character.character.includes(name) ) {
          //add to the new list
          characterList.push(character);
    }
  }
  console.log(`number found ${characterList.length}`)
  generateCards(characterList);  
}
function filters(){
  let role = document.getElementById("roles").value;
  if(role == ""){
    generateCards(characters);
    return;
  }

  let roleList = []; //create a list of sogs searched for

  for(let i=0; i<characters.length;i++){
    let character = characters[i] //get each sog
    
    //make sure the list is no
    if( character.role == role ) {
          //add to the new list
          roleList.push(character);
    }
  }
  
  generateCards(roleList);  
}