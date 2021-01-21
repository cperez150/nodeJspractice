const _ = require("underscore");

const arr = ["a", "b", "c", 1, 3, 4];

const result = arr.filter((item) => {
  item === "a";
});

console.log(result);
