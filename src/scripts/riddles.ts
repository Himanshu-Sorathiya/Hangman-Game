const riddles: { riddle: string; answer: string }[] = [
  { riddle: "What has keys but can't open locks?", answer: "Piano" },

  {
    riddle: "What has a head, a tail, is brown, and has no legs?",
    answer: "Penny",
  },

  {
    riddle:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "Echo",
  },

  {
    riddle: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps",
  },

  { riddle: "What has a heart that doesn’t beat?", answer: "Artichoke" },

  { riddle: "What gets wetter as it dries?", answer: "Towel" },

  {
    riddle: "I have branches, but no fruit, trunk or leaves. What am I?",
    answer: "Bank",
  },

  {
    riddle: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    answer: "Candle",
  },

  {
    riddle: "What can travel around the world while staying in a corner?",
    answer: "Stamp",
  },

  {
    riddle: "What is so fragile that saying its name breaks it?",
    answer: "Silence",
  },

  { riddle: "What has one eye but can’t see?", answer: "Needle" },

  {
    riddle: "The more you have of it, the less you see. What is it?",
    answer: "Darkness",
  },

  {
    riddle:
      "I’m light as a feather, yet the strongest man can’t hold me for much more than a minute. What am I?",
    answer: "Breath",
  },

  {
    riddle:
      "I have cities, but no houses; forests, but no trees; and rivers, but no water. What am I?",
    answer: "Map",
  },

  { riddle: "What has many teeth, but can’t bite?", answer: "Comb" },

  { riddle: "What gets bigger the more you take away?", answer: "Hole" },

  { riddle: "What kind of room has no doors or windows?", answer: "Mushroom" },

  { riddle: "What is full of holes but still holds water?", answer: "Sponge" },

  { riddle: "What has a neck but no head?", answer: "Bottle" },

  { riddle: "What can fill a room but takes up no space?", answer: "Light" },

  {
    riddle:
      "I am always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?",
    answer: "Fire",
  },

  { riddle: "What has hands but can’t clap?", answer: "Clock" },

  { riddle: "What has to be broken before you can use it?", answer: "Egg" },

  { riddle: "What has a bottom at the top?", answer: "Legs" },

  {
    riddle: "Forward I am heavy, but backward I am not. What am I?",
    answer: "Ton",
  },

  {
    riddle: "What has four fingers and a thumb but isn’t alive?",
    answer: "Glove",
  },

  { riddle: "What comes down but never goes up?", answer: "Rain" },

  {
    riddle: "What is always in front of you but can’t be seen?",
    answer: "Future",
  },

  {
    riddle:
      "I can fly without wings. I can cry without eyes. Whenever I go, darkness flies. What am I?",
    answer: "Cloud",
  },

  { riddle: "What has a single eye but cannot see?", answer: "Needle" },

  {
    riddle: "What is black when it’s clean and white when it’s dirty?",
    answer: "Chalkboard",
  },

  {
    riddle: "What begins with an “e” and only contains one letter?",
    answer: "Envelope",
  },

  {
    riddle: "I’m tall when I’m young, and short when I’m old. What am I?",
    answer: "Candle",
  },

  {
    riddle: "What goes through cities and fields, but never moves?",
    answer: "Road",
  },

  {
    riddle:
      "I’m not alive, but I can grow. I don’t have lungs, but I need air. What am I?",
    answer: "Fire",
  },

  { riddle: "What can you catch but not throw?", answer: "Cold" },

  {
    riddle: "What runs all around a backyard, yet never moves?",
    answer: "Fence",
  },

  { riddle: "What has keys but can’t open locks?", answer: "Piano" },

  { riddle: "What has legs, but doesn’t walk?", answer: "Table" },

  {
    riddle: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps",
  },

  {
    riddle: "What can you break, even if you never pick it up or touch it?",
    answer: "Promise",
  },

  {
    riddle:
      "I’m light as a feather, yet the strongest man can’t hold me for much more than a minute. What am I?",
    answer: "Breath",
  },

  {
    riddle: "What invention lets you look right through a wall?",
    answer: "Window",
  },

  {
    riddle: "What has a head, a tail, is brown, and has no legs?",
    answer: "Penny",
  },

  {
    riddle: "What is easy to get into, but hard to get out of?",
    answer: "Trouble",
  },

  { riddle: "What has 88 keys but can’t open a single door?", answer: "Piano" },

  { riddle: "What has to be broken before you can use it?", answer: "Egg" },

  { riddle: "What has words, but never speaks?", answer: "Book" },

  {
    riddle: "What runs but never walks, has a bed but never sleeps?",
    answer: "River",
  },

  { riddle: "What has a head but no body?", answer: "Coin" },

  { riddle: "What gets sharper the more you use it?", answer: "Brain" },

  { riddle: "What is more useful when it is broken?", answer: "Egg" },

  { riddle: "What can’t talk but will reply when spoken to?", answer: "Echo" },

  {
    riddle: "What is always in front of you but can’t be seen?",
    answer: "Future",
  },

  {
    riddle: "What can travel around the world while staying in a corner?",
    answer: "Stamp",
  },

  { riddle: "What has ears but can’t hear?", answer: "Corn" },

  { riddle: "What comes down but never goes up?", answer: "Rain" },

  { riddle: "What is full of holes but still holds water?", answer: "Sponge" },

  {
    riddle: "What begins with T, ends with T, and has T in it?",
    answer: "Teapot",
  },

  { riddle: "What has an eye but cannot see?", answer: "Needle" },

  {
    riddle: "What word is spelled incorrectly in every dictionary?",
    answer: "Incorrectly",
  },

  {
    riddle: "What is white when it’s dirty and black when it’s clean?",
    answer: "Chalkboard",
  },

  { riddle: "What has keys but can’t open locks?", answer: "Piano" },

  { riddle: "What has a bottom at the top?", answer: "Legs" },

  { riddle: "What has many teeth, but can’t bite?", answer: "Comb" },

  { riddle: "What is always coming but never arrives?", answer: "Tomorrow" },

  {
    riddle:
      "What has cities, but no houses; forests, but no trees; and rivers, but no water?",
    answer: "Map",
  },

  { riddle: "What gets wetter as it dries?", answer: "Towel" },

  {
    riddle: "What can you break, even if you never pick it up or touch it?",
    answer: "Promise",
  },

  {
    riddle: "What has four fingers and a thumb, but isn’t alive?",
    answer: "Glove",
  },

  { riddle: "What can run but never walks?", answer: "Water" },

  {
    riddle: "What is always in front of you but can’t be seen?",
    answer: "Future",
  },

  { riddle: "What can fill a room but takes up no space?", answer: "Light" },

  {
    riddle: "What word becomes shorter when you add two letters to it?",
    answer: "Short",
  },

  { riddle: "What has a ring but no finger?", answer: "Telephone" },

  { riddle: "What building has the most stories?", answer: "Library" },

  {
    riddle: "What is so fragile that saying its name breaks it?",
    answer: "Silence",
  },

  {
    riddle:
      "What is black when you buy it, red when you use it, and gray when you throw it away?",
    answer: "Charcoal",
  },

  {
    riddle: "What has a face and two hands but no arms or legs?",
    answer: "Clock",
  },

  { riddle: "What gets sharper the more you use it?", answer: "Brain" },

  { riddle: "What gets bigger the more you take away?", answer: "Hole" },

  { riddle: "What has a head but no body?", answer: "Coin" },

  {
    riddle: "What word is spelled the same way forwards and backwards?",
    answer: "Racecar",
  },

  { riddle: "What has a bottom at the top?", answer: "Legs" },

  { riddle: "What has teeth but doesn’t bite?", answer: "Comb" },

  { riddle: "What comes down but never goes up?", answer: "Rain" },

  {
    riddle: "What has a head, a tail, is brown, and has no legs?",
    answer: "Penny",
  },

  { riddle: "What has one eye but can’t see?", answer: "Needle" },

  {
    riddle: "What can travel around the world while staying in a corner?",
    answer: "Stamp",
  },
];
