import { faker } from "@faker-js/faker";

const length = 20;
const list = Array.from({ length }).map(() => ({
  id: faker.datatype.uuid(),
  catTitle: faker.animal.cat(), // return random cat breed
  catImage: faker.image.cats(200, 200, true),
  catPrice: faker.commerce.price(100, 200, 2),
}));

export default list;
