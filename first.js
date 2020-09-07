$(document).ready(function (){
  $('td').each(function(){

    if ($(this).html() >= '90')
        $(this).css('color', 'green');

    else $(this).css('color','red');

  })

  $('table td:nth-child(1)').css('color', 'black');
})
