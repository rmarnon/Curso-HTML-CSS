function contar() {

    var inicio = document.querySelector('input#inicio');
    var fim = document.getElementById('fim');
    var passo = document.querySelector('input#passo');
    var res = document.querySelector('div#res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
        alert('[Erro] Não são permitidos dados incompletos!');
    } else {
        let comeco = Number(inicio.value);
        let final = Number(fim.value);
        let salto = Number(passo.value);

        if (salto < 1) {
            alert('Passo inválido! <br> Considerando Passo = 1');
            salto = 1;
        }

        res.innerHTML = 'Contando: <br>';

        if (comeco < final) {
            for (let i = comeco; i <= final; i += salto) {
                res.innerHTML += `${i} \u{1F938} `;
            }
        } else {
            for (let i = comeco; i >= final; i -= salto) {
                res.innerHTML += `${i} \u{1F938} `;
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}



