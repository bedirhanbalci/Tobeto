// var slugify = require("slugify");            // commonjs version
import slugify from "slugify"; // modulejs version
// import myMath from "./my-math.js";           // custom version (Valid for single use only)
import myMath, { sum, diff, text, number, object, array } from "./my-math.js"; // custom version (Valid for multiple uses)

const str = "hello world!";
// // const result = slugify(str);
const result = slugify(str, "=");
console.log(result);

myMath(`SUM : ${sum(4, 5)}`);
myMath(`DIFF : ${diff(7, 3)}`);

console.log(text);
console.log(number);
console.log(object);
console.log(object.category);
console.log(object.order);
console.log(array);
