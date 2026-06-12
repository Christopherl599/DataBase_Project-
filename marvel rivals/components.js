let $_ = (selector)=> document.querySelector(selector);
class FlipCard{
  constructor(front,back){
    this.front = front;
    this.back = back;
  }
  render(container){
    this.obj = document.createElement("div");
    this.obj.setAttribute("class","flip-card");
    this.obj.addEventListener("click",()=>{
      console.log(this.obj);
      this.obj.classList.toggle("flip");
    })
    let build = "";
    build += `<div class="flip-card-inner">`;
    build += `<div class="flip-card-front">${this.front}</div>`;
    build += `<div class="flip-card-back">${this.back}</div>`;
    build += `</div>`
    this.obj.innerHTML = build
    $_(`#${container}`).append(this.obj)
  }
}
