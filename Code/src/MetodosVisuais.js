function mostrarLayoutCriarConta() {
    document.getElementById("CriarConta").style.display = 'block';
    document.getElementById("Login").style.display = 'none';
}

function mostrarLayoutLogin() {
    document.getElementById("Login").style.display = 'block';
    document.getElementById("CriarConta").style.display = 'none';
}

function esconder(){
    var numero = document.getElementById("inputPassword");
    var botao = document.getElementById("button-addon1");
    if(numero.type==="password"){
        numero.type = "text"
        botao.innerHTML = "Esconder"
    }
    else{
        numero.type = "password"
        botao.innerHTML = "Mostrar"
    }
}