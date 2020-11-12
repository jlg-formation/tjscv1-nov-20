const fs = require("fs");

const appendFile = (filename, content) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(filename, content, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

appendFile("titi.txt", "coucou hello promise\n")
  .then(() => {
    appendFile("titi.txt", "coucou hello promise\n");
  })
  .then(() => {
    appendFile("titi.txt", "coucou hello promise\n");
  })
  .then(() => {
    appendFile("titi.txt", "coucou hello promise\n");
  })
  .catch((err) => {
    console.log("err: ", err);
  });
