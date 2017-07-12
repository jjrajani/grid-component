import Animal from './animal';

const Animals = [
  new Animal(['Callie',  'Cat', new Date(1991, 3, 1), new Date(2000, 6, 10) ]),
  new Animal(['Felix',   'Cat', new Date(2011, 10, 1), null ]),
  new Animal(['Bailey',  'Dog', new Date(2017, 3, 11), null ]),
  new Animal(['Daisy',   'Dog', new Date(2010, 2, 20), null ]),
  new Animal(['Donika',  'Human', new Date(1985, 9, 25), null ]),
  new Animal(['Jenna',   'Human', new Date(1989, 1, 30), null ]),
]

export default Animals;
