export default () => {
  // fibonacci
  /* const fibonacci = [0, 1];
  const n = 10;
  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  console.log(fibonacci); */

  function* fibo(params) {
    let a = 0;
    let b = 1;
    yield a;
    yield b;

    while (true) {
      let next = a + b;
      a = b;
      b = next;
      yield next;
    }
  }

  let _generator = fibo();

  for (let i = 0; i < 10; i++) {
    console.log(_generator.next().value);
  }
};