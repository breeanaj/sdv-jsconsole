// NOTE Use this method to print a string, numbers or variables defined.
console.log("Hello World!");

// NOTE Use this method to display a message to the browser console.
console.info("This is an information message");

// NOTE Use this method to print a warning message on the browser.
console.warn("This is a WARNING");

// NOTE Use this method to display an ERROR message to the console.
console.error("Your application has an ERROR");

// NOTE Use this method to send a message to the console based on a condition
console.assert(document.getElementById("name"), "No element found with ID 'name'");

/* NOTE Use the console.time() method to start a timer, console.timeLog() to print the
current time in your code and console.timeEnd() to stop the timer */
console.time("Label");
console.timeLog("Label");
console.timeEnd("Label");

/* NOTE Use the console.count() method to count the number of times the specific where
 "Label" is defined in the code below, and the console.countReset() will reset the counter */
console.count("Label");
console.countReset("Label");

/* NOTE Use this method to create a new inline group in the web console, each subsequent console
message to be indented by an additional group until console.groupEnd() is called */
// NOTE Use this method to print an object in the form of a table on the browser console 
console.table({'id':1001, 'name':'admin'});

// NOTE Use this method to clear all the messages from the browser console
console.clear();

