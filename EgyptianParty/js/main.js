$("a[href^='#']").on("click", function () {
    let href = $(this).attr("href");
    let sectionOffset = $(href).offset().top;
    $("body,html").animate({ scrollTop: sectionOffset }, 600);
  });


$(".header").on("click", function () {
  $(".navbar-left").css("left", "0");
  $(".header").css("left", "20%");
});
$(".navbar-icon i").on("click", function () {
  $(".navbar-left").css("left", "-250px");
  $(".header").css("left", "0%");
});

$(".singer-content .main").click(function () {
  $(".item-one").slideToggle(500, function () {});
  $(".item-two").css("display", "none");
  $(".item-three").css("display", "none");
  $(".item-four").css("display", "none");
});
$(".singer-content .main1").click(function () {
  $(".item-one").css("display", "none");
  $(".item-three").css("display", "none");
  $(".item-four").css("display", "none");
  $(".item-two").slideToggle(500).css('display','block');
   
});


$(".singer-content .main2").click(function () {
    $(".item-one").css("display", "none");
    $(".item-two").css("display", "none");
    $(".item-four").css("display", "none");
    $(".item-three").slideToggle(500).css('display','block');
    
  });

  $(".singer-content .main3").click(function () {
    $(".item-one").css("display", "none");
    $(".item-two").css("display", "none");
    $(".item-three").css("display", "none");
    $(".item-four").slideToggle(500).css('display','block');  
  });

  const eventDate = new Date("2025-04-24").getTime();
  const countDown = setInterval(() => {
    const currentDate= new Date().getTime();
    const timeRemaining = eventDate - currentDate ;

    if (timeRemaining <= 0) {
      clearInterval(countDown);
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  $('.days-left').html(`${days} D`);
  $('.hours-left').html(`${hours} h`);
  $('.mins-left').html(`${minutes} m`);
  $('.secs-left').html(`${seconds} s`);

    
  }, 1000);


$('#exampleFormControlTextarea1').on('keyup',function(){
  $('.hundred').html(100-$('#exampleFormControlTextarea1').val().length);
 
  

  if($('#exampleFormControlTextarea1').val().length >=100 ){
    $('.hundred').css('display','none');
    $('.characterRemaining').text(" ");
    $('.availableChar').css('display','block');
  }
  else{
    $('.characterRemaining').text("Character Remaining ");
    $('.availableChar').css('display','none');
  }

})