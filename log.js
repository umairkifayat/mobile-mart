const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector(".loginbtn");
const logarr = [];
btn.addEventListener('click', (e) => {
    
    logarr.push({
        email: email.value,
        password: password.value,
    })
    console.log(logarr);
    const log = JSON.stringify(logarr);
    localStorage.setItem('logarr', log);
    email.value = '';
    password.value = '';

})
