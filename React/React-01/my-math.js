// ---Function Usage---

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// };

// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// ---Export Usage---

// export const sum = (a, b) => a + b;
// export const diff = (a, b) => a - b;

//const write = message => console.log(message);
export default message => console.log(message);

export const sum = (a, b) => a + b;
export const diff = (a, b) => a - b;

export const text = "Hello World!";
export const number = 99;
export const object = {
  category: "abc",
  order: 10,
};
export const array = ["Apple", "Orange", "Mango", "Kiwi"];

// export { sum, diff, write };

// export default write;

// Valid for single use only

// export default sum;
// export default diff;
