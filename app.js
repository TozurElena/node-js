const fs = require('fs');
const zlib = require('zlib');

// creer read stream
const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/new-text.txt')
// creer compress stream
const compressStream = zlib.createGzip();

// readStream.on('data', (chunk) => {
//   writeStream.write(chunk);
//   // chaque morceau lu est transféré dans le flux d'écriture vers un nouveau fichier
// })

const handleError = () => {
  console.log('Error');
  readStream.destroy(); //delete read stream
  writeStream.end('Finished with error...');//add line in end
}

readStream
  .on('error', handleError)
  // donne read, compresse et write in file
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleError);