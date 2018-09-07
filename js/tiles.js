var startingTiles = [
  {
    id: 1,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 2,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 3,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 4,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 5,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 6,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 7,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 8,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 9,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 10,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 11,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 12,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 13,
    north: "blocked",
    east: "door",
    south: "door",
    west: "blocked"
  },
  {
    id: 14,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "door"
  },
  {
    id: 15,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 16,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 17,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 18,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 19,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 20,
    north: "cave",
    east: "door",
    south: "cave",
    west: "cave"
  },
  {
    id: 21,
    north: "blocked",
    east: "blocked",
    south: "door",
    west: "door"
  },
  {
    id: 22,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 23,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 24,
    north: "door",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 25,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 26,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 27,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 28,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 29,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 30,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 31,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 32,
    north: "door",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 33,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 34,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 35,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 36,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 37,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 38,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 39,
    north: "cave",
    east: "cave",
    south: "door",
    west: "cave"
  },
  {
    id: 40,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 41,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 42,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 43,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 44,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 45,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 46,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 47,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 48,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 49,
    north: "cave",
    east: "door",
    south: "cave",
    west: "cave"
  },
  {
    id: 50,
    north: "door",
    east: "door",
    south: "door",
    west: "door"
  },
  {
    id: 51,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "door"
  },
  {
    id: 52,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 53,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 54,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 55,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 56,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 57,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 58,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 59,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 60,
    north: "cave",
    east: "door",
    south: "cave",
    west: "cave"
  },
  {
    id: 61,
    north: "door",
    east: "door",
    south: "door",
    west: "door"
  },
  {
    id: 62,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "door"
  },
  {
    id: 63,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 64,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 65,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 66,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 67,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 68,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 69,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 70,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 71,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 72,
    north: "door",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 73,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 74,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 75,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 76,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 77,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 78,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 79,
    north: "cave",
    east: "cave",
    south: "door",
    west: "cave"
  },
  {
    id: 80,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 81,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 82,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 83,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 84,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 85,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 86,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 87,
    north: "cave",
    east: "cave",
    south: "door",
    west: "cave"
  },
  {
    id: 88,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 89,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 90,
    north: "door",
    east: "door",
    south: "cave",
    west: "cave"
  },
  {
    id: 91,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "door"
  },
  {
    id: 92,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 93,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 94,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 95,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 96,
    north: "cave",
    east: "cave",
    south: "cave",
    west: "cave"
  },
  {
    id: 97,
    north: "cave",
    east: "door",
    south: "cave",
    west: "cave"
  },
  {
    id: 98,
    north: "door",
    east: "blocked",
    south: "blocked",
    west: "door"
  },
  {
    id: 99,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 100,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 101,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 102,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 103,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 104,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 105,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 106,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 107,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 108,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 109,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  },
  {
    id: 110,
    north: "blocked",
    east: "blocked",
    south: "blocked",
    west: "blocked"
  }
];

