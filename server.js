var express = require("express");

var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.static("app"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });

  function reverseInPlace(str){
    console.log( str.split(' ').reverse().join(' '));
  // Q: What are you going to do? 
  // A: returnt the output of the following built in methods (method chaining) - .split(' ').reverse().join(' ').split('').reverse().join('')
  // Q: How are you going to do it? 
  // A: Using the .split(' ').reverse().join(' ').split('').reverse().join('')
  // Q: Why are you going to do it? 
  // A: to .split(' ').reverse().join(' ').split('').reverse().join('') the input string
  }
  
  reverseInPlace('I am the good boy');


  