const last = <T>(arr: Array<T>) => arr[arr.length - 1];

last([1, 2, 3]);
last(['a', 'b', 'c']);

function multiply(n: number, ...m: number[]) {
  return m.map(x => n * x);
}

// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
console.log(a);
