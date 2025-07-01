function enviarMensagemWhatsApp(data, horario, local) {
    const frasesFlaFluZoeiraRomanceLeve = [
        `Fla x Flu já rolou mais de 400 vezes — e ainda continuam se encontrando. Coincidência? Acho que não. Nosso quarto date tá confirmado: *{local}*, *{data}* às *{horario}*. Tá virando clássico com continuidade.`,
      
        `Se Flamengo e Fluminense conseguem dividir o mesmo estádio, por que não quatro rolês seguidos? Confirmado: *{local}*, *{data}* às *{horario}*.`,
      
        `Tem coisa que ninguém explica: Fla e Flu dando certo... e esse nosso 4º date também. Tá marcado: *{local}*, *{data}* às *{horario}*. Vai ver o segredo é leveza, bom humor e zero impedimento.`,
      
        `Nosso quarto date tá confirmado: *{local}*, *{data}* às *{horario}*. Tipo Fla-Flu: improvável pra alguns, inevitável pra gente.`,
      
        `Se até Fla-Flu rende jogão, imagina a gente? Já estamos no quarto date: *{local}*, *{data}* às *{horario}*. Fla-Flu pode ter VAR… mas entre a gente, não tem replay: cada momento é original.`,
      
        `Se Fla e Flu já viveram momentos épicos lado a lado, por que não a gente? Quarto date confirmado: *{local}*, *{data}* às *{horario}*. Tá quase virando tradição de fim de semana.`
      ];
      

    const frase = frasesFlaFluZoeiraRomanceLeve[Math.floor(Math.random() * frasesFlaFluZoeiraRomanceLeve.length)]
        .replace('{local}', local)
        .replace('{data}', data)
        .replace('{horario}', horario);

    const url = `https://wa.me//5521975491978?text=${encodeURI(frase)}`;
    window.open(url);
}


function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {

        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 75 * i)

    });
}

