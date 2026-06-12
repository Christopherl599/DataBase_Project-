let ultimates, info;

async function init(){
  let link = "https://organic-space-fiesta-x5pw6pjvv5ggfvwvp-8500.app.github.dev"; //replace with your Dev URL
  let route= "/ultimates";

  info = await fetch(link+route);
  ultimates = await info.json();

  generateCards(ultimates);
}

function generateCards(ultimates){  
  let mainpanel = document.getElementById("centerpanel");
  let build ="";
   
  for(let i=0; i<ultimates.length; i++){
    let ultimate = ultimates[i]
    build += `<div class="card" >`
    build += `<h3> Ultimate : ${ultimate.ultimates}</h3>`;
    build += `<div> Pick Rate : ${ultimate.pick_Rate}</div>`;
    build += `<div> Win Rate : ${ultimate.win_Rate}</div>`;
    build += `<hr>`;
    build += `</div>`;
  }
  mainpanel.innerHTML = build;  
}