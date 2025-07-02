$(function () {
    AOS.init();


    const titulo = document.querySelector('.titulo-principal');
    const sub_titulo = document.querySelector('.sub_titulo');
    typeWrite(titulo);
    typeWrite(sub_titulo);

    if ($(".imgModal").hasClass('active')) {
        $("#recebeFraseRoteiro").html(`<h5>Cosme Velho, Laranjeiras e café em Botafogo</h5>
                                    <p>Entre as árvores do Cosme Velho e os muros antigos de Laranjeiras, nossos passos
                                        se perderam até encontrarem o gosto doce de um café em Botafogo</p>`);
    }

    $('#carouselExample').on('slid.bs.carousel', function () {
        // Quando a transição terminar, pega o item ativo
        var activeItem = $(this).find('.carousel-item.active');
        var dataNumber = activeItem.data('number');

        $("#recebeFraseRoteiro").html("");

        switch (dataNumber) {
            case 1:
                fraseRoteiro = `<h5>Cosme Velho, Laranjeiras e café em Botafogo</h5>
                                    <p>Entre as árvores do Cosme Velho e os muros antigos de Laranjeiras, nossos passos
                                        se perderam até encontrarem o gosto doce de um café em Botafogo</p>`;
                break;

            case 2:
                fraseRoteiro = `<h5>Mirante Dona Marta, Museu Chácara do Céu e Cafeteria Explorer</h5>
                                    <p>Do alto do mirante, vimos o Rio respirar. No museu, o tempo parou. E no café,
                                        entre goles e sorrisos, podemos inventar mais uma memória.</p>`;
                break;

            case 3:
                fraseRoteiro = `<h5>Passeio em Paquetá</h5>
                                    <p>Em Paquetá, onde tudo caminha sem pressa, nossos passos se encontrariam com o pôr
                                        do sol — e os segredos da ilha seriam só nossos.</p>`; break;
        }

        $("#recebeFraseRoteiro").html(fraseRoteiro);

    });

    // Só pra mostrar que os botões estão funcionando (opcional)
    $('.carousel-control-prev, .carousel-control-next').on('click', function () {
        $("#recebeFraseRoteiro").html("");
    });

    $("body").on("click touchstart", ".imgModal", function () {
        var imagemPaisagem = $(this).find('img').attr('title');
        var dataDiv = parseInt($(this).attr('data-number'));
        var roteiroPasseio = '';
        var fraseRoteiro = '';

        switch (dataDiv) {
            case 1:
                roteiroPasseio = `<ol>
                    <li>Largo do Boticário</li> 
                    <li><a href="https://www.instagram.com/casarobertomarinho?igsh=NWo3am1scDJjaHlp" target="_blank">Casa Roberto Marinho <i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.instagram.com/reel/DEfHIrFxwEh/?igsh=MTh6c2N0NWxzcnd5cA==" target="_blank">New Decor Café <i class="fa-brands fa-instagram"></i></a></li>
                </ol>`;
                break;

            case 2:
                roteiroPasseio = `<ol>
                    <li>Mirante Dona Marta</li>
                    <li><a href="https://www.instagram.com/museudachacaradoceu?igsh=Z2J0bmMxeXd3bHJy" target="_blank">Museu Chácara do Céu <i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.instagram.com/explorerbar?igsh=dXVtMXBvZGhweDdm" target="_blank">Explorer bar <i class="fa-brands fa-instagram"></i></a></li>
                </ol>`;
                break;

            case 3:
                roteiroPasseio = 'Passeio na Ilha de Paquetá';
                break;
        }


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
                `<label>Roteiro: <span class="roteiroPasseio">${roteiroPasseio}</span></label>` +
                '<br><label class="mt-2">Data: <span class="data">06/07/2025</span></label>' +
                '<br><label class="mt-2">Escolha um horário:</label>' +
                '<input type="time" placeholder="" class="horario form-control" style="width:40%;" required />' +
                '</div>' +
                '</form>',
            buttons: {
                formSubmit: {
                    text: 'Agendar',
                    btnClass: 'btn-success',
                    action: function () {
                        var data = this.$content.find('.data').text();
                        var dataFormatada = moment(data).format("DD/MM/YYYY");

                        var horario = this.$content.find('.horario').val();
                        var destinoEscolhido = this.$content.find('.destinoEscolhido').text();
                        if (!data || !horario) {
                            $.alert({
                                type: 'red',
                                theme: 'dark',
                                icon: 'fa fa-warning',
                                title: '<b>Atenção!</b>',
                                content: 'Selecione um horário!',
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
                            content: `Agendamento realizado com sucesso!<br>Data: ${data}<br>Horário: ${horario}<br>Local: ${destinoEscolhido}`,
                            autoClose: 'enviarNotificacao|3000',
                            buttons: {
                                enviarNotificacao: {
                                    text: 'Enviar notificação',
                                    btnClass: 'btn-green',
                                    action: function () {
                                        enviarMensagemWhatsApp(data, horario, destinoEscolhido)
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
