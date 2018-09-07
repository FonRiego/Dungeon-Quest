var drawBoard = function () {
  var row = 0;
  var col = 0;

  var container = $('<div id="board_container"></div>')
  var $row;

  $.each(startingTiles, function (index, value) {
    if (col == 0) $row = $('<div class="row"></div>');

    var class_name = 'unexplored';

    if (row == 0 || row == 9 || col == 0 || col == 10) class_name = 'border';
    if (index == 12 || index == 20 || index == 89 || index == 97) class_name = 'entry explored';
    if (index == 49 || index == 60) class_name = 'chamber explored';

    $row.append('<div id="tile-' + (index + 1) + '" class="' + class_name + '"></div>');
    col++;

    if (col == 11) {
      container.append($row);
      col = 0;
      row++;
    }
  });

  $('#newboard').append(container);
}


$(document).ready(function() {
  drawBoard();
  var tiles = startingTiles;
  var rooms = startingRooms;
  var events = startingEvents
  var player = new Player(13, '<div class="meeple-icon"><img src="./images/meeple-red.svg" width="40px"/></div>');
  player.currentPositionMeeple();
  $("#player-name").html("<span class='name'> Name:  " + player.name + "</span>");
  $("#player-health").html("<span class='health'> Health:  " + player.health + "</span>")
  $("#player-gold").html("<span class='gold'> Gold:  " + player.gold + "</span>")

  var turn = function (){
    player.removingSuggestions();
    player.getCurrentPositionValues(tiles);
    player.getNorthPositionValues(tiles);
    player.getEastPositionValues(tiles);
    player.getSouthPositionValues(tiles);
    player.getWestPositionValues(tiles);
    player.tileOptions(tiles);
    player.showingSuggestions();
    $(".suggested").click(function() {
      var tileScope = this;
      player.movement(tileScope);
      player.currentPositionMeeple();
      player.getSideAccesed();
      player.chooseNewRoom(rooms);
      player.updateTileValues(tiles);
      player.updatePositionNumbers();
      player.updateAdjacentTiles(tiles);
      player.event(events);
      player.checkDeath();
      turn();
    });
}
  turn();
});
