import { Animals } from '../animal';
import { Promotions } from '../promotion';

class Server {
  getAnimals = () => {
    return new Promise((resolve, reject) => {
      if (Animals.length > 0) {
        resolve({data: Animals});
      } else {
        reject("No animals created yet.");
      }
    });
  }

  getPromotions = () => {
    return new Promise((resolve, reject) => {
      if (Promotions.length > 0) {
        resolve({data: Promotions});
      } else {
        reject("No promotions created yet.");
      }
    });
  }
}

let server = new Server();
export default server;
