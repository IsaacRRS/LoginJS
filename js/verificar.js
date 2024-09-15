const formID = document.getElementById('formID');
const nomeID = document.getElementById('nomeID');
const emailID = document.getElementById('emailID');
const senhaID = document.getElementById('senhaID');
const repetirID = document.getElementById('repetirID');
const erroMensagem = document.getElementById('mensagemErro');

// após obter as referências com base nos IDs, vamos lidar com o envio..

formID.addEventListener('submit', (e) => {

    let erros = [];  // armazenar

    if (nomeID) {  // caso o campo com 'nomeID' exista, chama a função para validação de registro
        erros = errosRegistro(nomeID.value, emailID.value, senhaID.value, repetirID.value);
    }
    else { // caso contrário, chama a função para validar o login
        erros = errosLogin(emailID.value, senhaID.value);
    }

    if (erros.length > 0) {  // previnir o envio e imprimir mensagem caso haja erro   
        e.preventDefault();
        erroMensagem.innerText = erros.join(". ");
    }
});

const Campos = [nomeID, emailID, senhaID, repetirID].filter(input != null) // array para filtrar campos que não são nulos

Campos.forEach('input', ()  => { // para cada input, adiciona um ouvinte,

    input.addEventListener('input', () => { // remove a estilização de erro se necessário

        if(input.parentElement.classList.contains('erro')){

            input.parentElement.classList.remove('erro')

            erroMensagem.innerText = '' // limpar mensagem de erro

        }
    })
})

function errosRegistro(nome, email, senha, repetir) { // função para registro; verificar se os campos estão vazios, enviando mensagem e estilo caso haja erro

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

function errosLogin(email, senha){ // função para login; verificar se os campos estão vazios, enviando mensagem e estilo caso haja erro

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