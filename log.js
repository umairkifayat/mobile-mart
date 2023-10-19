const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector(".loginbtn");

btn.addEventListener('click', (e) => {

    const user = {
        email: email.value,
        password: password.value,
    }
    // console.log(user);
    let userfound = false
    const data = localStorage.getItem('array');
    const regarr = JSON.parse(data)
    // console.log(element);
    regarr.forEach(element => {
        // console.log(regarr[0].email);
        if (user.email == element.email && user.password == element.password) {
            userfound = true
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'sucessfull',
                showConfirmButton: false,
                timer: 1500
            })

        }
    });
    if (!userfound) {
        alert('please enter correct');
    }
    // const log = JSON.stringify(logarr);
    // localStorage.setItem('logarr', log);
    email.value = '';
    password.value = '';

})


