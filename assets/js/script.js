const btn_see_pass = document.getElementById('btn_see_pass');
const progress = document.getElementById('progress-bar-fill');
const btn_tutorial = document.getElementById('btn_tutorial');
const btn_radom = document.getElementById('btn_radom');
const senha = document.getElementById("inputpass");


const range = document.getElementById('rangeNumber');
const rangeValue = document.getElementById('rangeValue');

range.addEventListener('input', function() {
  rangeValue.innerHTML = this.value;
});


function gerarSenha(tamanho) {
    let caracteres = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
      senha += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    return senha;
}

btn_radom.addEventListener('click', function() {
    senha.value = gerarSenha(parseFloat(rangeValue.textContent));
    verificarSenha(senha.value);
  });


function mostrarSenha() {
    var senha = document.getElementById("inputpass");
    if (senha.type === "password") {
        senha.type = "text";
        btn_see_pass.style.backgroundColor = "#e2b318";
        btn_see_pass.textContent = "Ocultar";
    } else {
        senha.type = "password";
        btn_see_pass.style.backgroundColor = "#f9c51a";
        btn_see_pass.textContent = "Mostrar";

    }
}

btn_see_pass.addEventListener('click', function () {
    mostrarSenha()
});

btn_tutorial.addEventListener('click', function () {
    alert('Passo 1: Use uma combinação de caracteres \n\nUse uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais, como !, @, #, $, %, ^, &, *, (, ), _, +, -, =, {, }, [, ], ;, :, , |, ,, ., <, >, /, ?, e . Quanto mais variada for sua senha, mais difícil será para um invasor adivinhá-la ou hackeá-la.');

    alert('Passo 2: Faça sua senha longa \n\nQuanto mais longa for sua senha, mais difícil será para um invasor adivinhá-la ou hackeá-la. Uma senha segura deve ter pelo menos 12 caracteres. Se possível, tente fazer sua senha ainda mais longa.')

    alert('Passo 3: Evite palavras comuns \n\nEvite palavras comuns, frases simples ou sequências óbvias, como "123456" ou "qwerty". Senhas que contenham informações pessoais, como datas de nascimento, nomes de familiares, pets ou informações de contato, são facilmente adivinháveis por hackers.')

    alert('Passo 4: Use senhas diferentes para cada conta \n\nNão use a mesma senha para várias contas. Se um invasor descobrir sua senha, ele poderá acessar várias contas diferentes. Use senhas diferentes para cada conta para manter suas informações seguras.')

    alert('Passo 5: Use um gerenciador de senhas \n\nConsidere usar um gerenciador de senhas confiável para criar e armazenar suas senhas com segurança. Um gerenciador de senhas pode ajudá-lo a gerar senhas complexas e exclusivas para cada conta, sem precisar se lembrar de todas elas.')
    
    alert('Passo 6: Ative a autenticação de dois fatores \n\nPara proteger ainda mais suas contas, ative a autenticação de dois fatores sempre que possível. A autenticação de dois fatores adiciona uma camada extra de segurança, exigindo que você insira um código adicional para confirmar sua identidade ao fazer login.')

    alert('Seguindo esses passos, você pode criar senhas seguras que protegem suas informações pessoais e contas online. Lembre-se de que é importante atualizar suas senhas regularmente e monitorar suas contas em busca de atividades suspeitas.')

});

function verificarSenha() {
    var senha = document.getElementById("inputpass").value;

    

    var temLetraMaiuscula = /[A-Z]/.test(senha);
    var temLetraMinuscula = /[a-z]/.test(senha);
    var temNumero = /[0-9]/.test(senha);
    var temCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha);
    if (senha.length < 4) {
        progress.style.backgroundColor = "#ff5757";
        progress.style.width = "10%";
        return
    }if (senha.length < 8 ) {
        progress.style.backgroundColor = "#ff5757";
        progress.style.width = "30%";
        return
    }
    if (!temLetraMaiuscula || !temLetraMinuscula || !temNumero || !temCaractereEspecial) {
        progress.style.backgroundColor = "#f9c51a";
        progress.style.width = "50%";
        return;
    }if(senha.length > 8 || !temLetraMaiuscula || !temLetraMinuscula || !temNumero || !temCaractereEspecial){
        progress.style.backgroundColor = "#3e903c";
        progress.style.width = "70%";
    }
    if(!temLetraMaiuscula || !temLetraMinuscula || !temNumero || !temCaractereEspecial || senha.length > 12){
        progress.style.backgroundColor = "#3e903c";
        progress.style.width = "100%";
    }
    
}
