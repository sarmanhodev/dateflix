function enviarMensagemWhatsApp(data, horario, local) {
    const frasesFlaFluZoeiraRomanceLeve = [
        `Flamengo e Fluminense já se enfrentaram mais de 400 vezes e ainda continuam se encontrando. Coincidência? Acho que não. Quarto date confirmado: *{local}*, *{data}* às *{horario}*. Tá virando clássico com continuidade.`,

        `Se Fla e Flu conseguem conviver no mesmo estádio, quem diria a gente dividindo quatro rolês seguidos? Tá confirmado: *{local}*, *{data}* às *{horario}*. E sem nenhum cartão vermelho (ainda).`,

        `Tem coisas que ninguém explica: Fla e Flu dando certo... e esse nosso 4º date também. Tá marcado: *{local}*, *{data}* às *{horario}*. Vai ver, o segredo é só manter o bom humor (e não atrasar).`,

        `Quarto date confirmado no *{local}*, *{data}* às *{horario}*. Tipo Flamengo e Fluminense: pode até parecer confusão, mas no fundo, tá tudo sincronizado. Um clássico meio estranho, mas que funciona.`,

        `Flamengo e Fluminense já mostraram que rivalidade também pode render bons jogos. A gente já tá no quarto. *{local}*, *{data}* às *{horario}*. Ainda sem bandeirinha levantando impedimento.`,

        `Se até Fla e Flu já protagonizaram momentos épicos lado a lado, por que não a gente? Quarto date confirmado: *{local}*, *{data}* às *{horario}*. Tá quase virando tradição semanal.`
    ];

    const frase = frasesFlaFluZoeiraRomanceLeve[Math.floor(Math.random() * frasesFlaFluZoeiraRomanceLeve.length)]
        .replace('{local}', local)
        .replace('{data}', data)
        .replace('{horario}', horario);

    const url = `https://wa.me//5521975491978?text=${encodeURI(frase)}`;
    window.open(url);
}
