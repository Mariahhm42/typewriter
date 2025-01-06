const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; // Each letter delayed by 50ms more than the previous one
}

setTimeout(() => {
  process.stdout.write('\n'); // Add newline after sentence
}, delay);
