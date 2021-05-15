function carregar() {
    var periodo = document.getElementsByTagName('h1')[0];
    var msg = document.getElementById('msg');
    var img = document.querySelector('img#periodo');

    var data = new Date();
    var hora = data.getHours();
    var minutes = data.getMinutes();

    msg.innerHTML = `Agora são ${hora} horas e ${minutes} minutos`;   

    if (hora > 0 && hora < 12) {
        img.src = 'images/manha.jpeg';
        document.body.style.background = '#e2cd9f';
        periodo.innerHTML = `Horário da Manhã`;

    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/tarde.jpeg';
        document.body.style.background = '#b9846f';
        periodo.innerHTML = `Horário da Tarde`;

    } else {
        img.src = 'images/noite.jpeg';
        document.body.style.background = '#303030';
        periodo.innerHTML = `Horário da Noite`;
    }

}
