


function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona zero à esquerda se for menor que 10
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    document.getElementById('hora').innerHTML = horas
    document.getElementById('minuto').innerHTML = minutos
    document.getElementById('segundo').innerHTML = segundos

}

// Atualiza ao abrir a página
atualizarRelogio();
// Atualiza a cada segundo
setInterval(atualizarRelogio, 1000);