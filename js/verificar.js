const formID = document.getElementById('formID');
const nomeID = document.getElementById('nomeID');
const emailID = document.getElementById('emailID');
const senhaID = document.getElementById('senhaID');
const repetirID = document.getElementById('repetirID');
const erroMensagem = document.getElementById('mensagemErro');

formID.addEventListener('submit', (e) => {

    let erros = [];

    if (nomeID) {
        erros = errosRegistro(nomeID.value, emailID.value, senhaID.value, repetirID.value);
    }
    else {
        erros = errosLogin(emailID.value, senhaID.value);
    }

    if (erros.length > 0) {
        e.preventDefault();
        erroMensagem.innerText = erros.join(". ");
    }
});

const Campos = [nomeID, emailID, senhaID, repetirID].filter(input != null) 

Campos.forEach('input', ()  => {

    input.addEventListener('input', () => {

        if(input.parentElement.classList.contains('erro')){

            input.parentElement.classList.remove('erro')

            erroMensagem.innerText = ''

        }
    })
})

function errosRegistro(nome, email, senha, repetir) {

    let erros = [];

    if (nome === '' || nome == null) {
        erros.push('Insira um nome');
        nomeID.parentElement.classList.add('erro');
    }
    if (email === '' || email == null) {
        erros.push('Insira um email');
        emailID.parentElement.classList.add('erro');
    }
    if (senha === '' || senha == null) {
        erros.push('Insira uma senha');
        senhaID.parentElement.classList.add('erro');
    }
    if (repetir === '' || repetir == null) {
        erros.push('Repita a senha');
        repetirID.parentElement.classList.add('erro');
    } else if (senha !== repetir) {
        erros.push('As senhas não coincidem');
        senhaID.parentElement.classList.add('erro');
        repetirID.parentElement.classList.add('erro');
    }

    return erros;
}

function errosLogin(email, senha){

    let erros = []

    if (email === '' || email == null) {
        erros.push('Insira um email');
        emailID.parentElement.classList.add('erro');
    }
    if (senha === '' || senha == null) {
        erros.push('Insira uma senha');
        senhaID.parentElement.classList.add('erro'); 
    }

    return erros; 

}