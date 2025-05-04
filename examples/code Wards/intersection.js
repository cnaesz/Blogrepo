interface Animal {
  id: number;
  name: string;
}
const landAnimals = [
  { id: 0, name: "Bear" },
  { id: 1, name: "Tiger" },
  { id: 2, name: "Sea lion" },
  { id: 3, name: "Rabbit" },
];

const seaAnimals = [
  { id: 4, name: "Whale" },
  { id: 0, name: "Shark" },
  { id: 2, name: "Sea lion" },
  { id: 6, name: "Dolphin" },
  { id: 1, name: "Turtle" },
];

function getIntersection<T>(array1: T[], array2: T[], ...keys: Array<keyof T>) {
  return array1.filter((obj1) =>
    array2.find((obj2) => keys.every((k) => obj1[k] === obj2[k])),
  );
}

const intersection = getIntersection<Animal>(
  landAnimals,
  seaAnimals,
  "id",
  "name",
);

console.log(intersection); // [{id: 2, name: "Sea lion"}]