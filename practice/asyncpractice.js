// setTimeout(() => {
//   console.log("Coffee");
// }, 1000);

// console.log("Toast");
// console.log("Avocado");

// create a promise
let userAuth = false;
const loginPromise = new Promise((resolve, reject) => {
  if (userAuth === true) {
    let userDetails = {
      firstname: "John Doe",
      membership_type: "Premium",
    };
    resolve(userDetails);
  } else {
    reject("Unsuccessful Login");
  }
});

// consume the promise
loginPromise
  .then((res) => {
    // do something
    console.log("Welcome to your page");
    return res.membership_type;
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
    console.log(err);
  });
