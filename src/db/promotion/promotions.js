import Promotion from './promotion';

const Promotions = [
  new Promotion(['8 Day Sale', 38, new Date(2017, 6, 11), 'Store Wide', 'FREE!!']),
  new Promotion(['4th of July Blowout', 7, new Date(2018, 4, 28), 'Garden', '40% Off']),
  new Promotion(['Memorial Day Sale', 3, new Date(2018, 4, 28), 'Appliances', '0% Financing for 2 years on purchaes over $500']),
  new Promotion(['Once Yearly Sale', 5, new Date(2018, 5, 1), 'Store Wide', '60% Off']),
  new Promotion(['BOGO', 2, new Date(2018, 2, 12), 'Store Wide', 'Buy One Get One 50% Off']),
]

export default Promotions;
