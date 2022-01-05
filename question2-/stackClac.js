
const stackCalc= (arr) => {
   const options = {
      "+": (a, b) => Number(a) + Number(b),
      "-": (a, b) => Number(a) - Number(b),
      "*": (a, b) => Number(a) * Number(b),
      "/": (a, b) => Number(a) / Number(b),
      
      
      };
   const stack = [];

   arr.split(" ").forEach(value => {
      stack.push(value in options
         ? options[value](...stack.splice(-2))
         : value
      );
   });
   return stack;
};
console.log(stackCalc("1 5 +"))
console.log(stackCalc("6 5 5 7 * - /"))