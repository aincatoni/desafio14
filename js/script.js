$(function () {

  $('body').on('click', '.eliminar a', function (e) {
    e.preventDefault();
    $(this).parent().parent().fadeOut();
  
  });

  $('.crear').click(function(e) {

    var $newTweet = $('.demo_tweet').clone();
    $newTweet.removeClass('demo_tweet');
    $newTweet.find('.contenido-tweet').html($('#name').val());
    $('.columa-derecha').prepend($newTweet);
    e.preventDefault();
  })


  $('body').on('click', '.like', function(){
    var likes = parseInt($(this).parent().find('.contador-likes').html());
    likes++;
    $(this).parent().find('.contador-likes').html(likes);

    if (likes == 1) {

      $(this).parent().find('.like').addClass('like--rojo');
    };


  })
});