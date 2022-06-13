// setTimeout(() => {
//   console.log('Hello');
// }, 1000);

// console.log(`Hello, ${process.argv[2]}`);

const url = new URL('https://wrbDev.com/path/name#test');
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);
