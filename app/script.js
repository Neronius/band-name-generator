'use strict';

$(function() {

$('#drink').click(function() {
  $('#result').remove();
  $('body').append("<div id='result'></div>");
  $.get("/type", function(response) {
   var type = response.word;
  $("#result").text(type);
  })
  $.get("/region", function(response) {
   var region = response.word;
  $("#result").append(" " + region);
  })
  $.get("/grape", function(response) {
   var grape = response.word;
  $("#result").append(" " + grape);
  })

})


$('#suggest').click(function(e) {
  e.preventDefault();

  var region = $('input[name=region]').val();
  var type = $('input[name=type]').val();
  var grape = $('input[name=grape]').val();

  var regionPost;
  var typePost;
  var grapePost;

  if (region) {
    regionPost = {word: region};
    $.post('/region', regionPost, function (response) {
      var regionRes = response.msg;
      $('#regionRes').text(regionRes).animate({opacity:1}, 200).animate({opacity:0}, 2000);
    });
  }

  if (type) {
    typePost = {word: type};
    $.post('/type', typePost, function (response) {
      var typeRes = response.msg;
      $('#typeRes').text(typeRes).animate({opacity:1}, 200).animate({opacity:0}, 2000);
    });
  }

  if (grape) {
    grapePost = {word: grape};
    $.post('/grape', grapePost, function (response) {
      var grapeRes = response.msg;
      $('#grapeRes').text(grapeRes).animate({opacity:1}, 200).animate({opacity:0}, 2000);
    });
  }
});
})

