$(document).ready(function (){

  $('.table').append($('.total tbody'));

  var x = $('td').filter(function(){
    return $(this).text() === 'ИТОГО'
  });
  x.css('text-align', 'left');
  x.attr('colspan', '2');
})
