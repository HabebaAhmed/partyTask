
// navbaaaaaaaaaar

let navWidth=$('.nav').outerWidth();

$('.open').click(function(){

    let headeroffset=$('.nav').offset().left;

    if(headeroffset==0){
    $('.nav').css({
        transform:`translateX(-${navWidth}px)`,
        transition:`all 1s`
    })
    $('.open').css({
        transform:`translateX(-${navWidth}px)`,
        transition:`all 1s`
    })
}
else{

        $('.nav').css({
            transform:`translateX(0px)`,
            transition:`all 1s`
        })
        $('.open').css({
            transform:`translateX(0px)`,
            transition:`all 1s`
        })
        
   
}
})
$('.exit').click(function(){
    let headeroffset=$('.nav').offset().left

    if(headeroffset==0){
    $('.nav').css({
        transform:`translateX(-${navWidth}px)`,
        transition:`all 1s`
    })
    $('.open').css({
        transform:`translateX(-${navWidth}px)`,
        transition:`all 1s`
    })
}
});
// sliding...................

$('.singer2 .word').slideUp(-1000);
$('.singer3 .word').slideUp(-1000);
$('.singer4 .word').slideUp(-1000);


$('.singer1').click(function(){
    $('.singer1 .word').slideToggle(500);
    $('.singer2 .word').slideUp(500);
    $('.singer3 .word').slideUp(500);
    $('.singer4 .word').slideUp(500);
})
$('.singer2').click(function(){
   
    $('.singer2 .word').slideToggle(500);
    $('.singer1 .word').slideUp(500);
    $('.singer4 .word').slideUp(500);
    $('.singer3 .word').slideUp(500);
})
$('.singer3').click(function(){
    $('.singer3 .word').slideToggle(500);
    $('.singer1 .word').slideUp(500);
    $('.singer2 .word').slideUp(500);
    $('.singer4 .word').slideUp(500);
})
$('.singer4').click(function(){
    $('.singer4 .word').slideToggle(500);
    $('.singer1 .word').slideUp(500);
    $('.singer2 .word').slideUp(500);
    $('.singer3 .word').slideUp(500);
})


// countdown
let countDownDate = new Date("Jan 1, 2023 15:37:25").getTime();
let x = setInterval(function() {

    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
   
    document.getElementById("day").innerHTML = days + " d " ;
    document.getElementById("hour").innerHTML =hours + " h ";
    document.getElementById("min").innerHTML =minutes + " m ";
    document.getElementById("sec").innerHTML =seconds + " s ";
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  /////////////write message

  let maxLetter=100;
  $('.countWords').keyup(function(){
    let letterLength=$(this).val().length;
    console.log(letterLength);
    let remening=maxLetter-letterLength;
    console.log(remening);
    if(remening>0){
        $('.num').text(remening)
    }
    else{
        $('.num').text('your available character finished');
        $('.warning').text('');
    }
    
  })
    

