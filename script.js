// //Example for sync and async js

// console.log("I");
// console.log("Eat");
// console.log("Icecream");
// console.log("with a");
// console.log("spoon");

// setTimeout(() => {
//   console.log("spoon");
// }, 6000);

// //Example for callback

// const one = function () {
//   console.log("One");
// };

// const two = function () {
//   console.log("two");
// };

// function combine(call_fn) {
//   console.log("me_one");
//   call_fn();
// }

// two();
// one();

// combine(two);

let stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "apple"],
  liquid: ["water", "soda", "ice"],
  holder: ["cone", "cup", "stick", "ball"],
  toppings: ["chocolate", "peanuts"],
};

// //CALLBACK HELL

// let order = (fruitNo, productionFn) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruitNo]} was selected`);
//     productionFn();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log(`Production has started`);
//   }, 0000);

//   setTimeout(() => {
//     console.log(`The fruit has been chopped`);

//     setTimeout(() => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[2]} was added`);

//       setTimeout(() => {
//         console.log(`The machine has been started`);

//         setTimeout(() => {
//           console.log(`Ice-cream is filled inside the ${stocks.holder[0]}`);
//           setTimeout(() => {
//             console.log(`${stocks.toppings[0]} is topped to the icecream.`);

//             setTimeout(() => {
//               console.log("Icecream served");
//             }, 2000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 1000);
//   }, 2000);
// };

// order(2, production);

// let shopOpen = false;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (shopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log(`Our shop is closed`));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
//   .then(() => {
//     return order(0000, () => console.log(`Production has started`));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`The fruit has been chopped.`));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and  ${stocks.liquid[2]} are added`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log(`Started the machine`));
//   })
//   .then(() => {
//     return order(2000, () =>
//       console.log(`Icecream added to the ${stocks.holder[0]}`)
//     );
//   })
//   .then(() => {
//     return order(3000, () =>
//       console.log(`${stocks.toppings[0]} topping has been added.`)
//     );
//   })
//   .then(() => {
//     return order(2000, () => console.log(`Ice cream was served`));
//   })

//   .catch(() => console.log(`Customer Left`))

//   .finally(() => {
//     console.log(`Day ended, Our shop is closed for the day`);
//   });

let shopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (shopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed."));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]}`);

    await time(0000);
    console.log("Start the production");
    await time(2000);
    console.log(`Cut the fruit`);

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[2]} was added`);

    await time(1000);
    console.log(`Started the machine`);

    await time(2000);
    console.log(`Icecream added to the ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} topping has been added.`);

    await time(2000);
    console.log(`Ice cream was served`);
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed");
  }
}

kitchen();
