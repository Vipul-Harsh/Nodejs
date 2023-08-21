const placeorder = (callback) => {
  setTimeout(() => {
    console.log("Payment started");
    callback();
  }, 2000);
};

const Airport = (callback) => {
  setTimeout(() => {
    console.log("Take cab to reach airpot");
    callback();
  }, 5000);
};
const Boarding = (callback) => {
  setTimeout(() => {
    console.log("Boarding pass checked");
    callback();
  }, 1000);
};
const Security = (callback) => {
  setTimeout(() => {
    console.log("Security check done ");
    callback();
  }, 2000);
};
const Selfcheck = (callback) => {
  setTimeout(() => {
    console.log("No item lost selfcheck done");
    callback();
  }, 3000);
};
const Bus = (callback) => {
  setTimeout(() => {
    console.log("Taken bus to reach airplane");
    callback();
  }, 2000);
};
const Airplane = (callback) => {
  setTimeout(() => {
    console.log("Correct airplane found seated");
    callback();
  }, 3000);
};
const  Destination= (callback) => {
  setTimeout(() => {
    console.log("Reached Destination after 3 hours");
    callback();
  }, 3000);
};

console.log("Booking Tickets.......");
placeorder(() => {
  console.log("In Process....");
  Airport(() => {
    console.log("Reached Airport");
    Boarding(() => {
      Security(() => {
        Selfcheck(() => {
          Bus(() => {
            Airplane(() => {
              Destination(() => {
                console.log("Reached Destination");
              });
            });
          });
        });
      });
    });
  });
});
