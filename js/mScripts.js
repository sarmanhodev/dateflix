$(function () {
    AOS.init();


    const titulo = document.querySelector('.titulo-principal');
    const sub_titulo = document.querySelector('.sub_titulo');
    typeWrite(titulo);
    typeWrite(sub_titulo);

    $("body").on("click", ".imgModal", function () {
        var imagemPaisagem = $(this).attr('title');

        var larguraTela = $(window).width();
        var larguraModal = '50%';

        if (larguraTela < 600) {
            larguraModal = '90%';
        } else if (larguraTela < 1500) {
            larguraModal = '30%';
        } else {
            larguraModal = '20%';
        }

        $.alert({
            boxWidth: larguraModal,
            useBootstrap: false,  // ou true se estiver usando Bootstrap
            type: 'green',
            theme: 'dark',
            icon: 'fa-solid fa-triangle-exclamation',
            title: '<b>Atenção!</b>',
            content: '' +
                '<form action="" class="formName">' +
                '<div class="form-group">' +
                `<label>Você selecionou a opção: <span class="destinoEscolhido">${imagemPaisagem}</span></label>` +
                '<label class="mt-2">Escolha uma data:</label>' +
                '<input type="date" placeholder="" class="data form-control w-50" required />' +
                '<label class="mt-2">Escolha um horário:</label>' +
                '<input type="time" placeholder="" class="horario form-control" style="width:40%;" required />' +
                '</div>' +
                '</form>',
            buttons: {
                formSubmit: {
                    text: 'Agendar',
                    btnClass: 'btn-success',
                    action: function () {
                        var data = this.$content.find('.data').val();
                        var dataFormatada = moment(data).format("DD/MM/YYYY");

                        var horario = this.$content.find('.horario').val();
                        var destinoEscolhido = this.$content.find('.destinoEscolhido').text();
                        if (!data) {
                            $.alert({
                                type: 'red',
                                theme: 'dark',
                                icon: 'fa fa-warning',
                                title: '<b>Atenção!</b>',
                                content: 'Selecione uma data e hora!',
                                buttons: {
                                    Ok: {
                                        text: 'Ok',
                                        btnClass: 'btn-red'
                                    }
                                }
                            });
                            return false;
                        }
                        $.alert({
                            type: 'green',
                            theme: 'dark',
                            icon: 'fa fa-warning',
                            title: '<b>Atenção</b>',
                            content: `Agendamento realizado com sucesso!<br>Data: ${dataFormatada}<br>Horário: ${horario}<br>Local: ${destinoEscolhido}`,
                            autoClose: 'enviarNotificacao|5000',
                            buttons: {
                                enviarNotificacao: {
                                    text: 'Enviar notificação',
                                    btnClass: 'btn-green',
                                    action: function () {
                                        enviarMensagemWhatsApp(dataFormatada, horario, destinoEscolhido)
                                    }
                                }
                            }
                        });
                    }
                },
                cancel: function () {
                    //close
                },
            },
        });
    });
});
