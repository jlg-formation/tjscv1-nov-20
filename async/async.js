const fs = require("fs");

fs.appendFile("titi.txt", "coucou hello async\n", (err) => {
  if (err) {
    console.log("err: ", err);
    return;
  }
  fs.appendFile("titi.txt", "coucou hello async\n", () => {
    if (err) {
      console.log("err: ", err);
      return;
    }
    fs.appendFile("titi.txt", "coucou hello async\n", () => {
      if (err) {
        console.log("err: ", err);
        return;
      }
      fs.appendFile("titi.txt", "coucou hello async\n", () => {
        if (err) {
          console.log("err: ", err);
          return;
        }
      });
    });
  });
});
