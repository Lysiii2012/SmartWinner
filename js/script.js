$( document ).ready(function() {

    $(function() {
        $('#nav-icon').click(function(){
            $(this).toggleClass('open');
            $('.menu_bar').toggleClass('show_nav');
        });
    });

    $(function() {
        $('.more_leng').click(function(){
            $('.leng_ger').toggleClass('show');
        });
    });

    $(function() {
        $('.first').click(function(){
            $(this).toggleClass('active');
            $('.first_an').toggleClass('show_an');
        });
    });

    $(function() {
        $('.secound').click(function(){
            $(this).toggleClass('active');
            $('.secound_an').toggleClass('show_an');
        });
    });

    $(function() {
        $('.third').click(function(){
            $(this).toggleClass('active');
            $('.third_an').toggleClass('show_an');
        });
    });
});