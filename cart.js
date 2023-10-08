






function gotohome(params) {
    window.location = "./index.html"
    localStorage.setItem('cartarr', JSON.stringify(array));
}


const parent = document.getElementById("parent");
const total = document.getElementById("total");




let dataa = localStorage.getItem("cartarr");
let array = JSON.parse(dataa);



function cartrender() {
    let totals = 0;
    total.innerHTML = " "
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            totals += array[i].price * array[i].quantity;
            parent.innerHTML += `
            <div class = 'flex'> 
             <div class = 'main'>
             <img class="image" src = "${array[i].img}">
             <h3><b>Brand</b>: ${array[i].brand}</h3>
           <p> <b>Model</b>: ${array[i].model}<br>
    <b>Ram</b>: ${array[i].ram}<br>
        <b>Rom</b>: ${array[i].rom}<br>
        <b>Camera</b>: ${array[i].camera}<br>
        <b>Quantity</b>: ${array[i].quantity}<br>
        <b>Price</b>: ${array[i].price}<br>
         <b>Total price</b>: ${array[i].price * array[i].quantity}</p>
             <button onclick = "sub(${i})" class = "btn">-</button>
             <button onclick = "add(${i})" class = "btn">+</button><br>
             <button  onclick = "del(${i})" class = "addbtns">Delete</button>
             </div> 
             </div> 
            `



            total.innerHTML = `<p class ='total'><b>Total Price:${totals}</p></b> `;

        }


    } else {
        parent.innerHTML = '<center><h2>No item Found..</h2></center>'
    }
}





cartrender()





function add(i) {
    parent.innerHTML = ''
    array[i].quantity += 1
    cartrender()
}
function sub(i) {
    parent.innerHTML = "";
    array[i].quantity -= 1
    cartrender()
    if (array[i].quantity === 0) {
        parent.innerHTML = ""
        array.splice(i, 1)
        cartrender()
    }
}

function del(i) {
    parent.innerHTML = "";
    array.splice(0, 1)
    cartrender()
}

// reload page problem 
window.onbeforeunload = function () {
    localStorage.setItem('cartarr', JSON.stringify(array));
};