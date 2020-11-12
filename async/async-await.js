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

async function main() {
  try {
    await appendFile("titi.txt", "coucou hello\n");
    await appendFile("titi.txt", "coucou hello\n");
    await appendFile("titi.txt", "coucou hello\n");
    await appendFile("titi.txt", "coucou hello\n");
  } catch (error) {
    console.log("error: ", error);
  }
}

main();
