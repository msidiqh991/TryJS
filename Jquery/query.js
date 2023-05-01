$(document).ready(function(){
    $('textarea').hide();
    // Appearance function
    $("#showForm").on('click', function() { 
        $("textarea").show();
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
    
    ai.prependTo($('.matkul'));
    algo.appendTo($('.matkul'));
    firstoption.insertBefore($('.matkul'));
    closing.insertAfter($('.matkul'));    
});  