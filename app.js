const { error } = require('console');
const fs = require('fs');

fs.readFile('./text.txt', 'utf8', (error, data) => {
  fs.mkdir('./files', () => {
    fs.writeFile('./files/test2.txt', `${data} New text`, () => {
      error ?console.log(error) : null;
    });
  });
});
// delete file
setTimeout(() => {
  if (fs.existsSync('./files/test2.txt')) {
    fs.unlink('./files/test2.txt', () => {});
  }
}, 4000);
// delete dossier
setTimeout(() => {
  if (fs.existsSync('./files')) {
    fs.rmdir('./files', () => {});
  }
}, 6000);