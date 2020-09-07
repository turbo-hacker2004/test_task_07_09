$(document).ready(function (){
 $('.table td:nth-child(2)').each(function(){
   var text = $(this).html();

   $(this).html('<a href="https://www.google.ru">'+text+'</a>');
 })


})
