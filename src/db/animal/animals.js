import Animal from './animal';

const Animals = [
  new Animal(['Callie',     'Cat',      new Date(1991, 3, 1),  new Date(2000, 6, 10) ]),
  new Animal(['Felix',      'Cat',      new Date(2011, 1, 1),  null ]),
  new Animal(['Garfield',   'Cat',      new Date(1978, 5, 19), null ]),
  new Animal(['Bailey',     'Dog',      new Date(2017, 3, 11), null ]),
  new Animal(['Daisy',      'Dog',      new Date(2010, 2, 20), null ]),
  new Animal(['Eeyore',     'Donkey',   new Date(1926, 9, 14), null ]),
  new Animal(['Dubo',       'Elephant', new Date(1941, 9, 23), null ]),
  new Animal(['Donika',     'Human',    new Date(1985, 9, 25), null ]),
  new Animal(['Jenna',      'Human',    new Date(1989, 0, 30), null ]),
  new Animal(['Shrek',      'Ogre',     new Date(2001, 3, 22), null ]),
]

export default Animals;
