var startingEvents = [
  {eventNumber: 1,
   eventResult: "- 1 Health       + 200 Gold",
   eventText: "You fight against a big spider, maybe the is something usefull beneath her web",
   eventAplication: function(playerScope) { 
    playerScope.health -= 1
    playerScope.gold += 200 }
  },
  {eventNumber: 2,
   eventResult: "- 2 Health       + 500 Gold",
   eventText: "Can't avoid fighting one of the dungeon keepers, but hey! there is a nice prize for defeating it!",
   eventAplication: function(playerScope) {
    playerScope.health -= 2
    playerScope.gold += 500 }
  },
  {eventNumber: 3,
    eventResult: "+ 1 Health       + 50 Gold",
    eventText: "The place is a warehouse, some good looking food and items.",
    eventAplication: function(playerScope) {
     playerScope.health += 1
     playerScope.gold += 50 }
   },
   {eventNumber: 4,
    eventResult: "+ 2 Health       + 25 Gold",
    eventText: "Seems is here where the enemies heal themselves, let's pick something we might need...",
    eventAplication: function(playerScope) {
     playerScope.health += 2
     playerScope.gold += 25 }
   },
   {eventNumber: 5,
    eventResult: "- 1 Health",
    eventText: "Wow, that rat trying to bite me was really BIG!",
    eventAplication: function(playerScope) {
     playerScope.health -= 1 }
   },
   {eventNumber: 6,
    eventResult: "+ 1 Health",
    eventText: "A long time ago dead enemy lies on the ground, he has no money but his food could be eaten if you take away the mold... ",
    eventAplication: function(playerScope) {
     playerScope.health += 1 }
   },
   {eventNumber: 7,
    eventResult: "+ 100 Gold",
    eventText: "You find an adventurer's dead body. He won´t need his gold anymore",
    eventAplication: function(playerScope) {
     playerScope.gold += 100 }
   },
   {eventNumber: 8,
    eventResult: "+ 400 Gold",
    eventText: "This a big stash and nobody is watching over it!!!",
    eventAplication: function(playerScope) {
     playerScope.gold += 400 }
   },
   {eventNumber: 9,
    eventResult: "- 300 Gold",
    eventText: "Nooooo!!!! You stumble and a piece of your loot goes down on a crack on the ground",
    eventAplication: function(playerScope) {
     playerScope.gold -= 300 }
   },
   {eventNumber: 10,
    eventResult: "- 2 Health       + 200 Gold",
    eventText: "Watch out! Some guards took you by surprise",
    eventAplication: function(playerScope) {
     playerScope.health -= 2
     playerScope.gold += 200 }
   },
   {eventNumber: 11,
    eventResult: "+ 3 Health       + 450 Gold",
    eventText: "You find what seems to be the personal room of somebody important here. Health potions and jewels for all!",
    eventAplication: function(playerScope) {
     playerScope.health += 3
     playerScope.gold += 450 }
   },
   {eventNumber: 12,
    eventResult: "Nothing happens",
    eventText: "The room is quiet and empty. You can continue!",
    eventAplication: function(playerScope) { 
    }
   },
   {eventNumber: 13,
    eventResult: "Nothing happens",
    eventText: "The room is quiet and empty. You can continue!",
    eventAplication: function(playerScope) { 
    }
   },
   {eventNumber: 14,
    eventResult: "Nothing happens",
    eventText: "The room is quiet and empty. You can continue!",
    eventAplication: function(playerScope) { 
    }
   },
   {eventNumber: 15,
    eventResult: "Nothing happens",
    eventText: "The room is quiet and empty. You can continue!",
    eventAplication: function(playerScope) { 
    }
   }
];

var chamberEvent = {
  eventNumber: 16,
  eventResult: "- 3 Health       + 1000 Gold",
  eventText: "You are going to get some gold here, but will have to fight against the DRAGON himself",
  eventAplication: function(playerScope) { 
   playerScope.health -= 2
   playerScope.gold += 1000 }
 };