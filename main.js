$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const urlNovaImg = $('#url-nova-img').val();
        const novoItem = $('<li style="display: none;"> </li>');
        $(`<img src="${urlNovaImg}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link"> 
                <a href="${urlNovaImg}" target="_blank" title="Ver imagem em tamnho real">
                    Ver imagem em tamanho real
                </a>`
        ).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);

        $('#url-nova-img').val('');
    })
})