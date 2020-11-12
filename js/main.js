$(document).ready( function(){

    /**
     * @bref tab menu event
     */
    $('.tablinks').each( function(){
        $(this).click( function(){
            
            $(".tablinks").removeClass("bg_active");
            $(this).addClass("bg_active");

            $(".tabcontent").removeClass("tab_active");
            $(".tabcontent").css("display", "none");

            var chk = $(this).attr("tab_name");
            $('#' + chk).css("display", "block");

        });
    });

    /**
     * @bref menu click event
     */
    $('#menu_btn').click( function(){
        // $('aside,.modal_background').toggle();
        $('.modal_background').toggle();
        $('aside').css('right','0');
    });

    $('.close_btn,.modal_background').click( function(){
        $('.modal_background').toggle();
        $('aside').css('right','-520px');
    });
});