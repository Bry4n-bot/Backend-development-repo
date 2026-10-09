const readline = require("readline");
const rl = readline.createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout,
});

rl.question("Enter your name: ", (name) => {
 rl.question("Enter your age: ",  (age) => {
  rl.question("Enter your favorite programming language: ", (language) => {
    console.log("Name: " + name); 
    console.log("Age: " + age);
    console.log("Favorite progrtamming language: " + language);
    rl.close();
  });
 });
});