Primera aproximación al juego de mesa Dungeon Quest.

URL: https://fonriego.github.io/Dungeon-Quest/

- El juego original consiste en ir explorando una mazmorra, superar eventos y salir con vida y con la mayor cantidad de oro posible.

- Lo más difícil: representar en javascript la lógica detrás del movimiento, pues diseñé todo en torno a unos valores para cada lado (N, E, S y W) de cada casilla, pudiendo crear un array con las posibles casillas a las que moverse:

Player.prototype.showingSuggestions = function () {
  for (var i = 0; i < this.suggestedTiles.length; i++) {
    if (this.suggestedTiles[i]) {
      $("#tile-" + this.suggestedTiles[i]).addClass("suggested");
    }
  }
};

-------> La clase .suggested pone un borde en verde en las casillas a las que podemos ir.

-Principales retos: mejorar la estructura del turno, añadir opción para varios jugadores y hacer el juego más interactivo.

-Si empezara de 0 el proyecto cambiaría los constructores y repartiría de otra manera las funciones entre ellos.



