$(function() {
//put your js in here
  $(window).keydown(function(event) {
    //if q is pressed do something
    if(event.keyCode === 81) {
      movePlayer(1)
    }
    //if p is pressed do something else
    if(event.keyCode === 80) {
      movePlayer(2)
    }
    console.log(event.keyCode)
  })
})

function movePlayer(playerNumber) {
  //find the active cell for this player - $()
  var nextTd = $('.player' + playerNumber + ' .active').removeClass().next('td')
  console.log(nextTd)
  if (nextTd) {
    $('.player' + playerNumber + ' .active').removeClass().next('td').addClass('active')
  }
  //if I don't have a neighbour, create an alert saying game over # alert() if
}


//bonus points
//reset a game
//count the number of wins for each player
//display the high scores on the page # - text()

