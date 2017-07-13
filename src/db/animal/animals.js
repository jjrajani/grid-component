import Animal from './animal';

const Animals = [
  new Animal(['Callie',     'Cat',      new Date(1991, 3, 1),  new Date(2000, 6, 10) ]),
  new Animal(['Felix',      'Cat',      new Date(2011, 1, 1),  "Still Living" ]),
  new Animal(['Garfield',   'Cat',      new Date(1978, 5, 19), "Still Living" ]),
  new Animal(['Bailey',     'Dog',      new Date(2017, 3, 11), "Still Living" ]),
  new Animal(['Daisy',      'Dog',      new Date(2010, 2, 20), "Still Living" ]),
  new Animal(['Eeyore',     'Donkey',   new Date(1926, 9, 14), "Still Living" ]),
  new Animal(['Dubo',       'Elephant', new Date(1941, 9, 23), "Still Living" ]),
  new Animal(['Donika',     'Human',    new Date(1985, 9, 25), "Still Living" ]),
  new Animal(['Jenna',      'Human',    new Date(1989, 0, 30), "Still Living" ]),
  new Animal(['Shrek',      'Ogre',     new Date(2001, 3, 22), "Still Living" ]),
];

export default Animals;
