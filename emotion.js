$(document).ready(function() {

  $('.video').hide()
  $('.circles').hide()
  $('.animation').hide()
  $('.stickyNav').hide()

  var randomNum = Math.floor((Math.random() * 3) + 1);
  console.log(randomNum);

  var circles = document.querySelectorAll('img');
  var circleOne = circles[0];
  var circleTwo = circles[1];

  var background = document.querySelector('body');
  var songs = document.querySelectorAll('audio');
  var songOne = songs[0];
  var songTwo = songs[1];
  function playSongOne() {
    if (songOne.paused) {
      songOne.play();
    } else {
      songOne.currentTime = 0;
      }
  }

  function playSongTwo() {
    if (songTwo.paused) {
      songTwo.play();
    } else {
      songTwo.currentTime = 0;
      }
  }

  $('.emotion').on('click',function() {

    switch (randomNum) {

      case 1:
        $('.emotion').hide();
        $('.stickyNav').fadeIn(2000);
        $('.video').fadeIn(2000);
        break;

      case 2:
        $('.emotion').hide();
        $('.stickyNav').fadeIn(2000);
        $('.circles').fadeIn(2000);
        $(circleOne).on('click', function(){
          $(circleTwo).removeClass('selected');
          $(this).addClass('selected');
          songTwo.pause();
          playSongOne();
        });
        $(circleTwo).on('click', function(){
          $(circleOne).removeClass('selected');
          $(this).addClass('selected');
          songOne.pause();
          playSongTwo();
        });
        break;

      case 3:
        $('.emotion').hide();
        $('.stickyNav').fadeIn(2000);
        $('.animation').fadeIn(2000);
        break;

    }

  });

});
