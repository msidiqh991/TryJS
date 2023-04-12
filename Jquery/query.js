$(document).ready(function(){
    $('textarea').hide();
    // Appearance function
    $("button").click( function() { 
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

    ai.prependTo($('.matkul'));
    algo.appendTo($('.matkul'));
    firstoption.insertBefore($('.matkul'));
    closing.insertAfter($('.matkul'));    
});  