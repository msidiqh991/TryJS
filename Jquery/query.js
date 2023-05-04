$(document).ready(function(){
    $('textarea').hide();
    // Appearance function --> toggle
    $("#showForm").on('click', function() { 
        $("textarea").toggle();
    });
    // Add animate
    $("#animateForm").on('click', function() { 
        $("textarea").animate({
            padding: 20,
            cols: 100,
            fontFamily: 'Helvetica',
            marginTop: 30,
        });
    });

    // Applying DOM
    $('#mainObject li:even').css('background-color','cyan');
    $('#mainObject li:odd').css('background-color','yellow');

    // Footer style
    $('#footer').css('width','100%');
    $('#footer').css('padding-bottom','1vh');
    $('#footer').css('padding-top','1vh');
    $('#footer').css('background-color','navy');

    $('#footer .ft-p').css('text-align','center');
    $('#footer .ft-p').css('font-style','italic');
    $('#footer .ft-p').css('font-weight','bold');
    $('#footer .ft-p').css('color','#fff');

    // Empty Feature -- BD as Basisdata
    $('.BD').empty();

    // Manipulation DOM --> Subject requirements
    $('.matkul').css('list-style-type', 'none');
    var ai = $('<li>Artificial Intelegence</li>');
    var algo = $('<li>Algorithm</li>');
    var firstoption = $('<b><i><u>Matakuliah terpilih : </u></i></b>');

     // Event handler
    $('#pilihPweb').on('click', function() {
        alert('Matakuliah telah dipilih!');
    });
    $('#hapusPweb').on('click', function() {
        $('.pweb').remove();
        alert('Pemrograman Web, telah dihapus!');
    });
    $('#pilihCI').on('click', function() {
        alert('Matakuliah telah dipilih!');
    });
    $('#hapusCI').on('click', function() {
        $('.computerInteraction').remove();
        alert('Interaksi Komputer, telah dihapus!');
    });
    
    // Effect (Animation) feature JQuery
    $('#hidePweb').on('click', function() {
        $('.pweb').fadeOut(1000);
    });
    $('#hideCI').on('click', function() {
        $('.computerInteraction').slideUp(2000);
    });
    // Show up hide option
    $('#showButton').on('click', function() {
        $('.computerInteraction').slideDown(2000);
        $('.pweb').slideDown(2000);
    });
    // Toggle function --> 3 color padding box
    $('#toggleOne').on('click', function() {
        $('.box-one').toggle();
        $('.box-two').toggle();
        $('.box-three').toggle();
    });

    // Library JQuery -- Slick
    $('.your-class').slick();

    ai.prependTo($('.matkul'));
    algo.appendTo($('.BD'));
    firstoption.insertBefore($('.matkul'));
    closing.insertAfter($('.matkul'));    
});  