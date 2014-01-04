$(document).ready( function() {

    //$("#bibtex_input").load("borja.bib", bibtex_js_draw);
    email_me();
    // Determinamos el idioma del documento.
    var language = window.navigator.userLanguage || window.navigator.language;
    cambiar_idioma(language);

});

emailE = 'deusto.es';
emailE = ('borja.sanz' + '@' + emailE);

function email_me() {
    $("#email").attr('href','mailto:' + emailE);
}

function cambiar_idioma(lenguaje) {
    // Ponemos el idioma por defecto ingles
    ocultar_items('spanish', 'none');
    ocultar_items('english', 'block');

    $('.en').addClass('active');
    $('.es').removeClass('active');

    if (lenguaje.search('es') !== -1) {
        ocultar_items('english', 'none');
        ocultar_items('spanish', 'block');

        $('.es').addClass('active');
        $('.en').removeClass('active');
    }

    
}

function ocultar_items(lan, show) {
    var elements = document.getElementsByClassName(lan);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = show;
    }
}