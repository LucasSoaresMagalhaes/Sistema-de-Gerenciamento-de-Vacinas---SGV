/**
 * Confere se os campos foram preenchidos corretamente e chama a função para gerar o objeto conta.
 * @returns Retorna um erro se os campos estiverem incorretos e um objeto usuário se as contas estiverem corretas
 */
function confirmarCriacao() {
    // get the input values
    const email1 = document.getElementById("emailCriar1");
    const email2 = document.getElementById("emailCriar2");
    const nome = document.getElementById("nomeCriar");
    const senha1 = document.getElementById("senhaCriar1");
    const senha2 = document.getElementById("senhaCriar2");
    const labelEmail = document.getElementById("labelConfirmEmail");
    const labelSenha = document.getElementById("labelConfirmSenha");

    var testeCampos = false;
    var testeSenha = false;
    var testeEmail = false;

    // check if any of the fields are empty
    if (email1.value === "" || email2.value === "" || nome.value === "" || senha1.value === "" || senha2.value === "") {
        alert("Por favor, preencha todos os campos!");
        testeCampos = false;
    }
    else {
        testeCampos = true;
    }
    // check if the emails match
    if (email1.value !== email2.value) {
        alert("Preencha os campos corretamente")
        labelEmail.innerHTML = "E-mails não confirmam";
        labelEmail.classList.add("has-error");
        testeEmail = false;
    }
    else {
        labelEmail.innerHTML = "Confirmação do E-mail";
        labelEmail.classList.remove("has-error");
        testeEmail = true;
    }

    // check if the passwords match
    if (senha1.value !== senha2.value) {
        alert("As senhas não correspondem!");
        labelSenha.classList.add("has-error");

        testeSenha = false;
    }
    else {
        labelSenha.classList.remove("has-error");
        testeSenha = true;
    }

    if (testeCampos && testeEmail && testeSenha) {
        cadastrarUsuario();
    }
}

/**
 * 
 * @returns Retorna um objeto conta conta a ser inserida no banco de dados
 */
function gerarConta() {
    console.log("entrou")
    var nome = document.getElementById("nomeCriar").value;
    var Email = document.getElementById("emailCriar2").value;
    var senha = document.getElementById("senhaCriar2").value;
    var foto = "";
    var type = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    var novaConta = { nome: nome, Email: Email, senha: senha, foto: foto, tipo: type };

    return novaConta;
}

function cadastrarUsuario() {
    
    var httpRequest = new XMLHttpRequest();
    var url = 'http://localhost:3333/users'
    httpRequest.open('POST', url, true)
    httpRequest.setRequestHeader('Content-Type', 'application/json')
    httpRequest.onload = () => {
        if (httpRequest.status === 200) {
            console.log(httpRequest.responseText)
        } else {
            console.log('Erro:' + httpRequest.status)
        }
    }
    data = JSON.stringify(gerarConta())
    httpRequest.send(data)
}
function dadosLogin(){
    var email = document.getElementById("EmailEntrar").value;
    var password = document.getElementById("SenhaEntrar").value;
    var dadosLogin = {
        "email": email,
        "password": password
    }
    return dadosLogin

}

function buscarUsuario(){
    var httpRequest = new XMLHttpRequest();
    var url = 'http://localhost:3333/users/login'
    httpRequest.open('POST', url, true)
    httpRequest.setRequestHeader('Content-Type', 'application/json')
    httpRequest.onload = () =>{
       if(httpRequest.status == 200){
        window.location.href ='IndexPacientes.html'
        return true
       }
       else {
        window.alert("Login ou senha incorretos!")
        return false
       }
    }
    data = JSON.stringify(dadosLogin())
    httpRequest.send(data);
}