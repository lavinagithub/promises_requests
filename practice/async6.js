// Another example - creating the promise
const meetingSchedule = false;
const meeting = new Promise((resolve, reject) => {
  if (meetingSchedule === false) {
    const meetingDetails = {
      name: "Marketing Meeting",
      location: "on Zoom",
      time: "2:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
});

//consuming the promise
meeting
  .then((res) => {
    console.log("Meeting scheduled");
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
