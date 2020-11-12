const fs = require("fs");

try {
  fs.appendFileSync("titi.txt", "coucou hello\n");
  fs.appendFileSync("titi.txt", "coucou hello\n");
  fs.appendFileSync("titi.txt", "coucou hello\n");
  fs.appendFileSync("titi.txt", "coucou hello\n");
} catch (error) {
  console.log("error: ", error);
}
