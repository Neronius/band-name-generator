'use strict';

$(function() {

$('button').click(function() {
  $('#result').remove();
  $('body').append("<div id='result'></div>");
  $.get("http://localhost:3000/DOCG", function(response) {
   var response = response.word;
  $("#result").text(response);
})
})
})

