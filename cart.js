function gotohome(params) {
    window.location = "./index.html"
}

const parent = document.getElementById("parent");
 const totalPriceElement = document.getElementById("totalPrice");



let dataa =localStorage.getItem("cartarr");
let array= JSON.parse(dataa);
// console.log(cartarr);

function render(params) {
     parent.innerHTML = '';
     let total = 0;
    for (let i = 0; i < array.length; i++) {
          const totalPrice = array[i].price * array[i].quantity;
         total += totalPrice;
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
         <button onclick = "sub(${i})" class = "btn">-</button>
         <button onclick = "add(${i})" class = "btn">+</button><br>
         <button  onclick = "del(${i})" class = "addbtns">Delete</button>
         </div> 
        </div>`
     
        
}
     totalPriceElement.innerHTML = `Total Price: ${total.toFixed(2)}`;
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

function del(i) {
    parent.innerHTML = "";
    array.splice(0, 1)
    render()
}
