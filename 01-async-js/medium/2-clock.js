// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(() => {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, 0);
  const mm = String(now.getMinutes()).padStart(2, 0);
  const ss = String(now.getSeconds()).padStart(2, 0);

  const AMPM = hh > 12 ? "PM" : "AM";
  const hours = hh % 12;
  console.log(`${hh} : ${mm} : ${ss}       ${hours} : ${mm} : ${ss} ${AMPM} `);
}, 1000);
