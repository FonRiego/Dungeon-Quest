var Player = function (startingPosition) {
  this.name = prompt("Please enter yor name");
  this.health = 5;
  this.gold = 0;
  this.status = "alive";
  this.chamber = "filled";
  this.currentTurn = 1;
  this.currentPositionNumber = startingPosition;
  this.previousPositionNumber = startingPosition;
  this.currentPositionValues = [];
  this.northPositionNumber = this.currentPositionNumber - 11;
  this.northPositionValues = [];
  this.eastPositionNumber = this.currentPositionNumber + 1;
  this.eastPositionValues = [];
  this.southPositionNumber = this.currentPositionNumber + 11;
  this.southPositionValues = [];
  this.westPositionNumber = this.currentPositionNumber - 1;
  this.westPositionValues = [];
  this.suggestedTiles = [];
  this.sideAccesed = "";
  this.chosenRoom = {};
  
};

Player.prototype.currentPositionMeeple = function () {
  $("#tile-" + this.currentPositionNumber).prepend('<div class="meeple-icon"><img src="./images/meeple-red.svg" width="40px"/></div>');
  $("#tile-" + this.currentPositionNumber).addClass("meeple");
};

Player.prototype.pushingValues = function (tiles, tilePosition, sidePositionValues) {
  sidePositionValues.push(
    tiles[tilePosition].north,
    tiles[tilePosition].east,
    tiles[tilePosition].south,
    tiles[tilePosition].west
  );
}

Player.prototype.getCurrentPositionValues = function (tiles) {
  var tilePosition = this.currentPositionNumber - 1;
  this.currentPositionValues = [];
  this.pushingValues(tiles, tilePosition, this.currentPositionValues);
  return this.currentPositionValues;
};

Player.prototype.getNorthPositionValues = function(tiles) {
  var tilePosition = this.northPositionNumber - 1; //sería -11 por ser la casilla de arriba, y -1 para hacer el index.
  this.northPositionValues = [];
  this.pushingValues(tiles, tilePosition, this.northPositionValues);
  return this.northPositionValues;
};

Player.prototype.getEastPositionValues = function (tiles) {
  var tilePosition = this.eastPositionNumber - 1; //sería +1 por ser la casilla de la derecha, y -1 para hacer el index.
  this.eastPositionValues = [];
  this.pushingValues(tiles, tilePosition, this.eastPositionValues);
  return this.eastPositionValues;
};

Player.prototype.getSouthPositionValues = function(tiles) {
  var tilePosition = this.southPositionNumber - 1; //sería +11 por ser la casilla de abajo, y -1 para hacer el index.
  this.southPositionValues = [];
  this.pushingValues(tiles, tilePosition, this.southPositionValues);
  return this.southPositionValues;
};

Player.prototype.getWestPositionValues = function (tiles) {
  var tilePosition = this.westPositionNumber - 1; //sería -1 por ser la casilla de la izquierda, y -1 para hacer el index.
  this.westPositionValues = [];
  this.pushingValues(tiles, tilePosition, this.westPositionValues);
  return this.westPositionValues;
};

Player.prototype.tileOptions = function (tiles) {
  this.suggestedTiles = [];
  if (this.getNorthPositionValues(tiles)[2] == "door") {
    this.suggestedTiles.push(this.northPositionNumber);
  } else {
    this.suggestedTiles.push(false);
  }
  if (this.getEastPositionValues(tiles)[3] === "door") {
    this.suggestedTiles.push(this.eastPositionNumber);
  } else {
    this.suggestedTiles.push(false);
  }
  if (this.getSouthPositionValues(tiles)[0] === "door") {
    this.suggestedTiles.push(this.southPositionNumber);
  } else {
    this.suggestedTiles.push(false);
  }
  if (this.getWestPositionValues(tiles)[1] === "door") {
    this.suggestedTiles.push(this.westPositionNumber);
  } else {
    this.suggestedTiles.push(false);
  }
  return this.suggestedTiles;
};

Player.prototype.showingSuggestions = function () {
  for (var i = 0; i < this.suggestedTiles.length; i++) {
    if (this.suggestedTiles[i]) {
      $("#tile-" + this.suggestedTiles[i]).addClass("suggested");
    }
  }
};

Player.prototype.movement = function (tileScope) {
  var tileNumber = tileScope.id.split("-")[1];
  $("#tile-" + this.currentPositionNumber + " " + "> div").remove(".meeple-icon");
  $("#tile-" + this.currentPositionNumber).removeClass("meeple");
  this.previousPositionNumber = this.currentPositionNumber;
  this.currentPositionNumber = parseInt(tileNumber);
};

Player.prototype.removingSuggestions = function () {
  for (var i = 0; i < this.suggestedTiles.length; i++) {
    if (this.suggestedTiles[i]) {
      $("#tile-" + this.suggestedTiles[i]).removeClass("suggested");
    }
  }
  this.suggestedTiles = [];
};

Player.prototype.getSideAccesed = function () {
  if (this.currentPositionNumber === this.previousPositionNumber - 11) {
    this.sideAccesed = "south";
  } else if (this.currentPositionNumber === this.previousPositionNumber + 1) {
    this.sideAccesed = "west";
  } else if (this.currentPositionNumber === this.previousPositionNumber + 11) {
    this.sideAccesed = "north";
  } else if (this.currentPositionNumber === this.previousPositionNumber - 1) {
    this.sideAccesed = "east";
  }
  return this.sideAccesed;
};

Player.prototype.chooseNewRoom = function (rooms) {
  if ($("#tile-" + this.currentPositionNumber).hasClass("unexplored")) {
  var side = this.sideAccesed;
  var possibleRooms = rooms.filter(function (e) {
    return e[side] === "door";
  });
  var index = Math.floor(Math.random() * possibleRooms.length);
  this.chosenRoom = possibleRooms[index];
  var roomLink = "./images/Room-" + this.chosenRoom.id + ".png"
  $("#tile-" + this.currentPositionNumber).css('background-image','url(' + roomLink + ')');  
  $("#tile-" + this.currentPositionNumber).removeClass("unexplored");
  $("#tile-" + this.currentPositionNumber).addClass("explored");
  };
};

Player.prototype.updateTileValues = function (tiles) {
  var tilePosition = this.currentPositionNumber - 1;
  if (this.chosenRoom.north === "blocked") {
    tiles[tilePosition].north = this.chosenRoom.north;
  } else if (this.chosenRoom.north === "door" && tiles[tilePosition].north !== "blocked") {
    tiles[tilePosition].north = this.chosenRoom.north;
  };
  if (this.chosenRoom.east === "blocked") {
    tiles[tilePosition].east = this.chosenRoom.east;
  } else if (this.chosenRoom.east === "door" && tiles[tilePosition].east !== "blocked") {
    tiles[tilePosition].east = this.chosenRoom.east;
  };
  if (this.chosenRoom.south === "blocked") {
    tiles[tilePosition].south = this.chosenRoom.south;
  } else if (this.chosenRoom.south === "door" && tiles[tilePosition].south !== "blocked") {
    tiles[tilePosition].south = this.chosenRoom.south;
  };
  if (this.chosenRoom.west === "blocked") {
    tiles[tilePosition].west = this.chosenRoom.west;
  } else if (this.chosenRoom.west === "door" && tiles[tilePosition].west !== "blocked") {
    tiles[tilePosition].west = this.chosenRoom.west;
  };
  return this.currentPositionValues;
}

Player.prototype.updatePositionNumbers = function () {
  this.northPositionNumber = this.currentPositionNumber - 11;
  this.eastPositionNumber = this.currentPositionNumber + 1;
  this.southPositionNumber = this.currentPositionNumber + 11;
  this.westPositionNumber = this.currentPositionNumber - 1;
}

Player.prototype.updateAdjacentTiles = function (tiles) {
  this.getCurrentPositionValues(tiles);
  var northTilePosition = this.northPositionNumber - 1;
  var eastTilePosition = this.eastPositionNumber - 1;
  var southTilePosition = this.southPositionNumber - 1;
  var westTilePosition = this.westPositionNumber - 1;
  if (this.currentPositionValues[0] === "blocked") {
    tiles[northTilePosition].south = this.currentPositionValues[0];
  } else if (this.currentPositionValues[0] === "door" && tiles[northTilePosition].south !== "blocked") {
    tiles[northTilePosition].south = this.currentPositionValues[0];
  };
  if (this.currentPositionValues[1] === "blocked") {
    tiles[eastTilePosition].west = this.currentPositionValues[1];
  } else if (this.currentPositionValues[1] === "door" && tiles[eastTilePosition].west !== "blocked") {
    tiles[eastTilePosition].west = this.currentPositionValues[1];
  };
  if (this.currentPositionValues[2] === "blocked") {
    tiles[southTilePosition].north = this.currentPositionValues[2];
  } else if (this.currentPositionValues[2] === "door" && tiles[southTilePosition].north !== "blocked") {
    tiles[southTilePosition].north = this.currentPositionValues[2];
  };
  if (this.currentPositionValues[3] === "blocked") {
    tiles[westTilePosition].east = this.currentPositionValues[3];
  } else if (this.currentPositionValues[3] === "door" && tiles[westTilePosition].east !== "blocked") {
    tiles[westTilePosition].east = this.currentPositionValues[3];
  };
};

Player.prototype.event = function (events) {
  if ((this.currentPositionNumber === (50 || 61)) && (this.chamber === "filled")) {
    var text = '<p>' + chamberEvent.eventText + '</p>'
    var result = '<h2>' + chamberEvent.eventResult + '</h2>'
    this.fillModal(text, result);
    chamberEvent.eventAplication(this);
    this.chamber = "looted";
  } else {
  // else if (this.currentPositionNumber === 13 || 21 || 90 || 98) {
  //   this.status = "out";
  //    fillModal
  // } else {
    var index = Math.floor(Math.random() * events.length);
    this.chosenEvent = events[index];
    var text = '<p>' + this.chosenEvent.eventText + '</p>'
    var result = '<h2>' + this.chosenEvent.eventResult + '</h2>'
    this.fillModal(text, result);
    this.chosenEvent.eventAplication(this);
  }
  this.displayStats();
};

Player.prototype.fillModal = function (text, result) {
  $(".modal-content").append('<span class="close">&times;</span>')
  $(".modal-content").append(text)
  $(".modal-content").append(result)
  $(".event-modal").css("display", "block");
  $("span").click(function() {
    $(".event-modal").css("display", "none")
    $(".modal-content").empty();
  });
};

Player.prototype.displayStats = function () {
  if (this.health > 5) {
    this.health = 5;
  } else if (this.health < 0) {
    this.health = 0;
  };
  if (this.gold < 0) {
    this.gold = 0;
  };
  $("#player-health").html("Health:  " + this.health);
  $("#player-gold").html("Gold:  " + this.gold);
};

Player.prototype.checkIfEnds = function () {
  if (this.health <= 0) {
      this.status = "death";
      var text = '<p>Your bones will rest here forever...</p>'
      var result = '<h2>DEATH!!!</h2>'
      this.fillModal(text, result);
  } else if (this.status === "out") {
      this.status = "out";
      var text = '<p>Fresh air again, let\'s see the loot you got:</p>'
      var result = '<h2>' + this.gold + ' gold pieces.</h2>'
      this.fillModal(text, result);
  } else {
    // turn()
  }
}
