var data = new Date();
var ano = data.getFullYear();
var img = document.createElement('img');
var res = document.querySelector('div#res');
var anoInformado = document.getElementById('ano');

function verificar() {
    img.setAttribute('id', 'foto');

    if (anoInformado.value.length === 0 || Number(anoInformado.value) > ano) {
        alert('[Erro]: Ano informado inválido!');
    } else {
        var sexo = document.getElementsByName('sex');
        var idade = ano - Number(anoInformado.value);

        var genero = (sexo[0].checked) ? 'Homem' : 'Mulher';
        gerarFoto(genero, idade);
  
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }

}

function gerarFoto(genero, idade) {
    var biotipo = calcularBiotipo(idade);
    img.setAttribute('src', `images/${genero}-${biotipo}.png`);
}

function calcularBiotipo(idade) {
    if (idade >= 0 && idade < 10) return 'crianca';
    else if (idade < 21) return 'jovem';
    else if (idade < 60) return 'adulto';
    else return 'idoso';
}
