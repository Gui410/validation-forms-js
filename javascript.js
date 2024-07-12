
const form = document.getElementById("form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validarNome();
    validarEmail();
    validarLogin();
    validarSenha();
    validarconfSenha();
});


function validarNome() {

    const spans = document.getElementById("span");
    const nome = document.getElementById("nome");

    if (nome.value.length < 3) {

        nome.classList.add("error");
        nome.classList.remove("success");
        spans.classList.add("spanerror");
        spans.classList.remove("span");
    }

    else {

        nome.classList.add("success");
        nome.classList.remove("error");
        spans.classList.add("span");
        spans.classList.remove("spanerror");

    }
}





function validarLogin() {

    const spans2 = document.getElementById("span2");
    const login = document.getElementById("login");

    if (login.value.length < 8) {

        login.classList.add("error");
        login.classList.remove("success");
        spans2.classList.add("spanerror");
        spans2.classList.remove("span");
    }

    else {

        login.classList.add("success");
        login.classList.remove("error");
        spans2.classList.add("span");
        spans2.classList.remove("spanerror");
    }
}





function validarEmail() {

    const spans3 = document.getElementById("span3");
    const email = document.getElementById("email");

    if (email.value == "") {

        email.classList.add("error");
        email.classList.remove("success");
        spans3.classList.add("spanerror");
        spans3.classList.remove("span");
    }

    else {

        email.classList.add("success");
        email.classList.remove("error");
        spans3.classList.add("span");
        spans3.classList.remove("spanerror");

    }
}



function validarSenha() {

    const spans4 = document.getElementById("span4");
    const senha = document.getElementById("senha");

    if (senha.value.length < 8) {

        senha.classList.add("error");
        senha.classList.remove("success");
        spans4.classList.add("spanerror");
        spans4.classList.remove("span");
        validarconfSenha();
    }

    else {

        senha.classList.add("success");
        senha.classList.remove("error");
        spans4.classList.add("span");
        spans4.classList.remove("spanerror");
        validarconfSenha();
    }
}



function validarconfSenha() {

    const spans5 = document.getElementById("span5");
    const confSenha = document.getElementById("confSenha");

    if (confSenha.value.length == senha.value.length && confSenha.value.length >= 8) {

        confSenha.classList.add("success");
        confSenha.classList.remove("error");

    }

    else {

        confSenha.classList.add("error");
        confSenha.classList.remove("success");

    }
}
