// ---setTimeout Usage---

// setTimeout(function () {
//   console.log("setTimeout");
// }, 3000);

// setTimeout(() => {
//   console.log("setTimeout 2");
// }, 3000);

// setTimeout(() => console.log("setTimeout 3"), 3000);

// ---setInterval Usage---

// setInterval(function () {
//   console.log("setInterval");
// }, 1000);

// ---Callback Functions---

function runCallbackFunc(callback) {
  callback();
}

// runCallbackFunc(function () {
//   console.log("Hello World!");
// });

// runCallbackFunc(() => {
//   console.log("Hello World!");
// });

runCallbackFunc(() => console.log("Hello World!"));
