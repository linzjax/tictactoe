/* so the way I want this to work 
possible winning combinations:
123
456
789
147
258
369
159
357
*/
 
 
//player1's score:
var xCount = 0;
//player2's score:
var oCount = 0;
//to track whose turn it is
var countClick = 2;
//if the game has ended
var win = false;
 
function hasWon(whichClass){
  if ($('.square1').hasClass(whichClass) && $('.square2').hasClass(whichClass) && $('.square3').hasClass(whichClass)) {
    win = true;
    //disable clicking on all squares
  } else if ($('.square4').hasClass(whichClass) && $('.square5').hasClass(whichClass) && $('.square6').hasClass(whichClass)) {
    win = true;
    
  } else if ($('.square7').hasClass(whichClass) && $('.square8').hasClass(whichClass) && $('.square9').hasClass(whichClass)) {
    win = true;
    
  } else if ($('.square1').hasClass(whichClass) && $('.square5').hasClass(whichClass) && $('.square9').hasClass(whichClass)) {
    win = true;
    
  } else if ($('.square3').hasClass(whichClass) && $('.square5').hasClass(whichClass) && $('.square7').hasClass(whichClass)) {
    win = true;
    
  } else if ($('.square1').hasClass(whichClass) && $('.square4').hasClass(whichClass) && $('.square7').hasClass(whichClass)) {
    win = true;
    
  } else if ($('.square2').hasClass(whichClass) && $('.square5').hasClass(whichClass) && $('.square8').hasClass(whichClass)) {
    win = true;
    
  } else if ($('.square3').hasClass(whichClass) && $('.square6').hasClass(whichClass) && $('.square9').hasClass(whichClass)) {
    win = true;
    
  } 
  if (win == true){
    $('.trigger').css('pointer-events', 'none');
  }
}
 
 
//what happens when a player clicks
function playerPicks(squareClicked, whichClass) {
  //changes who's turn it is
  
  //adds the appropriate class to whichever square was clicked
  $(squareClicked).addClass(whichClass);
  $(squareClicked).addClass('picked');
  //makes sure that square cannot be clicked again
  $(squareClicked).css('pointer-events', 'none');
  //if there are three connecting squares, that player wins
  hasWon(whichClass);
  countClick += 1;
};


function smartComputer(){
  if (countClick == 3){
    var corners = [1,3,7,9]
    var randomNumber = Math.floor(Math.random() * 4);
    if ((!$('.square' + corners[randomNumber]).hasClass('picked')) {
      $('.square' + corners[randomNumber]).addClass('itsAnO');
      $('.square' + corners[randomNumber]).addClass('picked');
      x++;
  }
}




function computerPicks(){
  var x = 0;
  while (x < 1) {
    var randomNumber = Math.floor(Math.random() * 9) + 1;
    console.log(randomNumber);
    if ($('.square1').hasClass('picked') && $('.square2').hasClass('picked') && $('.square3').hasClass('picked') && $('.square4').hasClass('picked') && $('.square5').hasClass('picked') && $('.square6').hasClass('picked') && $('.square7').hasClass('picked') && $('.square8').hasClass('picked') && $('.square9').hasClass('picked')) {
      x++;
    } else if (!$('.square' + randomNumber).hasClass('picked')) {
      $('.square' + randomNumber).addClass('itsAnO');
      $('.square' + randomNumber).addClass('picked');
      x++
    }
  }
  hasWon('itsAnO');
}

function onePlayerGame() {
  $('.trigger').click(function(e) {
    e.preventDefault();
    playerPicks(this, 'itsAnX')
      //if they have three squares in a row
      if (win == true){
        //increase their score by 1
        xCount++;
        //reflect their new score on the page
        $('.xScore').html(xCount);
        //restart the game
        win = false;
    } else {
      //player2's turn
      computerPicks();
      if (win == true) {
        oCount++;
        $('.oScore').html(oCount);
        win = false;
      }
    }
  });

}







 
//The actual game
function playGame() {
  $('.trigger').click(function(e) {
    e.preventDefault();
    //determines whose turn it is
    if (countClick % 2 == 0) {
      //player1's turn
      playerPicks(this, 'itsAnX');
      //if they have three squares in a row
      if (win == true){
        //increase their score by 1
        xCount++;
        //reflect their new score on the page
        $('.xScore').html(xCount);
        //restart the game
        win = false;
      }
    } else if (countClick % 2 !== 0){
      //player2's turn
      playerPicks(this, 'itsAnO');
      if (win == true){
        oCount++;
        $('.oScore').html(oCount);
        win = false;
      }
    }
  });
};
 
//clicking on this button will start a new game
function resetButton() {
  $(".resetGame").click(function() {
    //by removing all classes
    $('.trigger').removeClass('itsAnX');
    $('.trigger').removeClass('itsAnO');
    $('.trigger').removeClass('picked');
    //and enable clicks again
    $('.trigger').css('pointer-events', 'auto')
  })
}
 
 
//this button resets the game and any accumulated scores
function resetAllButton() {
  $(".resetScore").click(function() {
    $('.trigger').removeClass('itsAnX');
    $('.trigger').removeClass('itsAnO');
    $('.trigger').removeClass('picked');
    $('.trigger').css('pointer-events', 'auto')
    //returns scores to 0
    $('.xScore').html(0);
    $('.oScore').html(0);
    xCount = 0;
    oCount = 0;
  })
}
 
 
 
$(document).ready(onePlayerGame());
$(document).ready(resetButton());
$(document).ready(resetAllButton());