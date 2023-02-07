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

//CALLBACK HELL

let stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "apple"],
  liquid: ["water", "soda", "ice"],
  holder: ["cone", "cup", "stick", "ball"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruitNo, productionFn) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruitNo]} was selected`);
    productionFn();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log(`Production has started`);
  }, 0000);

  setTimeout(() => {
    console.log(`The fruit has been chopped`);

    setTimeout(() => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[2]} was added`);

      setTimeout(() => {
        console.log(`The machine has been started`);

        setTimeout(() => {
          console.log(`Ice-cream is filled inside the ${stocks.holder[0]}`);
          setTimeout(() => {
            console.log(`${stocks.toppings[0]} is topped to the icecream.`);

            setTimeout(() => {
              console.log("Icecream served");
            }, 2000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 1000);
  }, 2000);
};

order(2, production);
