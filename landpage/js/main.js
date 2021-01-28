function procurarcep(value) {
    var cep = value.replace(/\D/g, '');
    if (cep != "") {
        var cep2 = /^[0-9]{8}$/;
        if (cep2.test(cep)) {
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=myFunction';
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa();
            alert("Informar cep válido!.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa();
    }
};

function limpa() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function myFunction(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } else {
        limpa();
        alert("CEP não encontrado.");
    }
}