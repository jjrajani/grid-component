import Animals from '../animal/animals'

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
}

let server = new Server();
export default server;
