function gotohome(params) {
    window.location = "./index.html"
}

const parent = document.getElementById("parent");
const child = document.getElementsByClassName("child");

let dataa =localStorage.getItem("cartarr");
let array= JSON.parse(dataa);
// console.log(cartarr);

function render(params) {
    for (let i = 0; i < array.length; i++) {
    //   array[i].totalprice += `${array[i].price} * ${array[i].quantity}`
    parent.innerHTML +=`<div class = "">
         <div class = " main">
         <img class="image" src = "${array[i].img}" alt="">
         <h3><b>Brand</b>: ${array[i].brand}</h3>
         <p><b>Model</b>: ${array[i].model}</p>
         <p><b>Ram</b>: ${array[i].ram}</p>
         <p><b>Rom</b>: ${array[i].rom}</p>
         <p><b>Camera</b>: ${array[i].camera}</p>
         <p><b>Quantity</b>: ${array[i].quantity}</p>
         <p><b>Price</b>: ${array[i].price}</p>
         <p><b>Total price</b>: ${array[i].price * array[i].quantity}</p>
         <button onclick = "sub(${i})">-</button>
         <button onclick = "add(${i})">+</button><br>
         
         </div> 
        </div>`
     
        
}
}
render()


function add(i) {
    parent.innerHTML = ''
   array[i].quantity += 1
   render()
}
function sub(i) {
    parent.innerHTML = "";
    array[i].quantity -= 1
    render()
    if (array[i].quantity === 0) {
        parent.innerHTML = ""
        array.splice(i,  1)
        render()
    }
}


