setTimeout(()=>{
  console.log("My name is John Doe");
},2000);

setTimeout(() => {
  console.log("Coffee");
}, 1000);
console.log("Coffee");
console.log('Toast');
console.log('Avocado');

// Promises
let userAuth = true;
const loginPromise = new Promise((resolve, reject) => {
  if (userAuth) {
    let userDetails = {
      firstname: "John",
      membership_type: "Free",
    };
    resolve(userDetails);
  } else {
    reject(new Error("Unsuccessful Login"));
  }
});
//console.log(loginPromise);

//consuming the promise
loginPromise
  .then((res) => {
    console.log("Welcome to the page");
    return res.membership_type;
    // functions to perform
    // do so many other things
  })
  .then((mt) => {
    if (mt === "Premium") {
      console.log("You are invited to the seminar");
      // do so many other things
    } else {
      console.log("Would you like to upgrade to get access to our seminar?");
    }
  })
  .catch((err) => {
    console.log(err.message);
  });