// ---Promises---

function first() {
  return "first";
}

function second() {
  return "second";
}

function third() {
  return "third";
}

async function f() {
  let p1 = new Promise(function (resolve, reject) {
    const result = first();
    resolve(result);
  });

  let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = second();
      resolve(result);
    }, 2000);
  });

  let p3 = new Promise(function (resolve, reject) {
    const result = third();
    resolve(result);
  });

  // First use

  // console.log(await p1);
  // console.log(await p2);
  // console.log(await p3);

  // Second use

  // p1.then(val => {
  //   console.log(val);
  //   p2.then(val2 => {
  //     console.log(val2);
  //     p3.then(val3 => console.log(val3));
  //   });
  // });

  // Third use

  // p1.then(val => {
  //   console.log(val);
  //   return p2;
  // })
  //   .then(val2 => {
  //     console.log(val2);
  //     return p3;
  //   })
  //   .then(val3 => console.log(val3));

  // Fourth use

  Promise.all([p1, p2, p3]).then(result => {
    result.map(item => console.log(item));
  });
}
f();
12;
