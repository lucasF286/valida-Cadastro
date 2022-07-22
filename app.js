const form = document.forms.cadastro;
const mensagemErro = document.querySelector("#mensagemErro");
const bandeiraCartao = document.querySelector('#bandeiraCartao');
const {nome, celular, cpf, email, senha, confirmaSenha, numCartao, codigoSeg, dataValidade} = form;

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    validaFormulario();
})

function validaNome(){
    const regex = /^[A-Z][a-z]* [A-Z][a-z]*$/; 
    if(regex.test(nome.value)){
        console.log(nome.value); 
    }else{
        throw new Error("Nome e Sobrenome inválidos");
    }
}

function validaCelular(){
    const regex = /^\([0-9]{2}\) 9 [0-9]{4}-[0-9]{4}$/;
    if(regex.test(celular.value)){
        console.log(celular.value)
    }else{
        throw new Error('Número de celular inválido!');
    }
}

function validaCPF(){
    const regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/
    if(regex.test(cpf.value)){
        console.log(cpf.value);
    }else{
        throw new Error('CPF inválido!');
    }
}

function validaEmail(){
    const regex = /^\w+@\w+\.\w+$/;
    const regexGmail = /^\w+@gmail\.\w+$/;
    if(regex.test(email.value)){
        if(regexGmail.test(email.value)){
            console.log(email.value);
        }else{
            throw new Error('Email não pertence ao Gmail!');
        }
    }else{
        throw new Error('Email inválido!');
    }
}

function validaSenha(){
    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%¨&*.]){6,15}/;
    if(regex.test(senha.value)){
        console.log(senha.value);
    }else{
        throw new Error('Senha inválida!');
    }
}

function validaConfirmaSenha(){
    if(senha.value === confirmaSenha.value){
        console.log(confirmaSenha.value);
    }else{
        throw new Error('As senhas não são iguais!');
    }
}

function validaCartao(){
    const regex = /^\d{4} \d{4} \d{4} \d{4}$/;
    if(regex.test(numCartao.value)){
        console.log(numCartao.value);
    }else{
        throw new Error('Número de cartão inválido!');
    }
}

function validaCodigo(){
    const regex = /\d{3}/;
    if(regex.test(codigoSeg.value)){
        console.log(codigoSeg.value);
    }else{
        throw new Error('Código de Segurança inválido!');
    }
}

function validaData(){
    const regex = /^(\d{4})\/((0[1-9]|1[0-2]))[/]((0[1-9]|[12][0-9]|3[01]))$/;
    if(regex.test(dataValidade.value)){
        console.log(dataValidade.value.replace(regex, '$3/$2/$1'));
    }else{
        throw new Error('Data inválida!');
    }
}

function validaFormulario(){
    try{
        validaNome();
        validaCelular();
        validaCPF();
        validaEmail();
        validaSenha();
        validaConfirmaSenha();
        validaCartao();
        validaCodigo();
        validaData();
        
        alert("Dados cadastrados com sucesso!!");
    }catch(erro){
        mensagemErro.innerHTML = erro.message;
    }
}