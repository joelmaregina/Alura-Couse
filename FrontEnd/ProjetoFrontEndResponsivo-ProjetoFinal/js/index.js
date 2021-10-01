function ativaScrollSuave(selector, time) {
    $(selector).click(function(event){
        event.preventDefault;
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, time)
    })
}

ativaScrollSuave('a[href*=panel-about]', 500);
ativaScrollSuave('a[href*=panel-speakers]', 750);
ativaScrollSuave('a[href*=panel-form]', 1500);
