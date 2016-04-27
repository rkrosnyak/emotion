$(document).ready(function() {

  var randomNum = Math.floor((Math.random() * 3) + 1);
  console.log(randomNum);

  $('.emotion').eq(0).on('click', function() {
    $('.emotion').eq(1).hide();
    $('.emotion').eq(2).hide();
    $('.emotion').eq(3).hide();

    switch (randomNum) {

      case 1:
        $('body').addClass('eBgOne');
        break;

      case 2:
        $('body').addClass('eBgTwo');
        break;

      case 3:
        $('body').addClass('eBgThree');
        break;

    }

  });

  $('.emotion').eq(1).on('click', function() {


  });

  $('.emotion').eq(2).on('click', function() {


  });

  $('.emotion').eq(3).on('click', function() {


  });

});
