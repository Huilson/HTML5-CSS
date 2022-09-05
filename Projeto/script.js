
$(":input").inputmask();
$("#idCelular").inputmask({"mask": "(99) 99999-9999 "});

function carregar(){
    var msg = document.getElementById('msg');
    var foto = document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos}!`

    if(hora==0){//meia-noite
        document.body.style.background = '#00032c';
        foto.src = 'imagens/midnight.jpg';
        msg.innerHTML = `É chegada a meia noite, agora são ${hora} horas e ${minutos}!`
    } else if(hora >= 1 && hora <= 4){//pos meia-noite 01:00 às 04:59
        document.body.style.background = '#032234';
        msg.innerHTML = `Bom descanso, agora são ${hora} horas e ${minutos}!`
        foto.src = 'imagens/pos-midnight.jpg';
    } else if(hora >= 5 && hora <= 7){//amanhecer dàs 05:00 até 7:59
        document.body.style.background = '#fae7bd';
        foto.src = 'imagens/dawn.jpg';
        msg.innerHTML = `Bom dia, agora são ${hora} horas e ${minutos}!`
    }else if(hora >= 8 && hora <= 10){//manhã 08:00 às 10:59
        document.body.style.background = '#bee3fd';
        foto.src = 'imagens/morning.jpg';
        msg.innerHTML = `Uma boa manhã, agora são ${hora} horas e ${minutos}!`
    }else if(hora >= 11 && hora < 14){//meio-dia 11:00 até 13:59
        document.body.style.background = '#faed9e';
        foto.src = 'imagens/midday.jpg';
        msg.innerHTML = `Bom almoço, agora são ${hora} horas e ${minutos}!`
    }else if(hora >= 14 && hora < 18){//tarde dás 13:00 até 17:59
        document.body.style.background = '#e3eef4';
        foto.src = 'imagens/afternoon.jpg';
        msg.innerHTML = `Boa tarde, agora são ${hora} horas e ${minutos}!`
    }else if(hora == 18 || hora == 19){//por do sol às 18:00 ou às 19:00
        document.body.style.background = '#e3eef4';
        foto.src = 'imagens/sunset.jpg';
        msg.innerHTML = `Bom final de tarde, agora são ${hora} horas e ${minutos}!`
    }else if(hora >= 20 && hora < 22){//cedo da noite dàs 20:00 às 21:59
        document.body.style.background = '#041823';
        foto.src = 'imagens/early-night.jpg';
        msg.innerHTML = `Boa noite, agora são ${hora} horas e ${minutos}!`
    }else{//tarde da noite dàs 22:00 até 23:59
        document.body.style.background = '#222d33';
        foto.src = 'imagens/night.jpg';
        msg.innerHTML = `Bom descanso, agora são ${hora} horas e ${minutos}!`
    }
}