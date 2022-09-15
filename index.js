document.querySelector(".cartIcon").addEventListener("click", onCartClick);
       
function onCartClick() {
       event.preventDefault();
    document.getElementById("cartData").style.display = "block";

}

document.getElementById("cartBack").addEventListener("click", cartBack);
function cartBack() {
    document.getElementById("cartData").style.display = "none";
}
 let data = JSON.parse(localStorage.getItem("home"))||[];

 data.forEach(e => {
     let div = document.createElement("div")
     let img = document.createElement("img");
     img.setAttribute("class", "cartImg")
     img.src=e.avtar;
     let price = document.createElement("h1");
     price.innerText=e.price;

     var input=document.createElement("input")
     input.innerText=e.input;

    div.append(img,price)
  
    
    
    
     
    // let div1 = document.createElement(div);
    // div1.append(sum)
    document.getElementById("team").append(div);

 });





document.querySelector(".mart").addEventListener("click", onmCartClick);

function onmCartClick() {
document.getElementById("martData").style.display = "block";

}

document.getElementById("martBack").addEventListener("click", martBack);
function martBack() {
document.getElementById("martData").style.display = "none";
}

