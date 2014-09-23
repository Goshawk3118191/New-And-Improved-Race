$(document).ready(function() {

  function Animal(name, speed, focus) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    this.position = 0;
    this.isFocused = function() {
      return Math.floor(Math.random() * 10) < this.focus;
    };
    this.advance = function() {
      if (this.isFocused()) {
        this.position += this.speed;

        $(this.name).css("left", this.position);
        console.log(this.position);
      }
    };
  }

  var rabbit = new Animal("#rabbit", 8, 2);
  var turtle = new Animal("#turtle", 3, 10);
  var snake = new Animal("#snake", 5, 5);
  var snail = new Animal("#snail", 1, 8);
  var meters = 150;

  $("#raceButton").click(function() {
    if (rabbit.position < meters && turtle.position < meters && snake.position < meters && snail.position < meters) {
      rabbit.advance();
      turtle.advance();
      snake.advance();
      snail.advance();
    } else {

      var winner;
      if (rabbit.position >= meters) {
        winner = "ROGER THE RABBIT";
      } else if (turtle.position >= meters) {
          winner = "LEO THE TURTLE";
      } else if (snake.position >= meters) {
          winner = "EKANS THE SNAKE";
      } else {
          winner = "SLIMER THE SNAIL";
      }

      $("#raceButton").html("<b>and the winner is ... <p>" + winner + "!!!</p></b>");
      $("#announcer").html("<h1>WINNER: " + winner + "!!</h1>");
    }
  });
});