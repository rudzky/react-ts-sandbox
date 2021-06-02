// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unused-vars */
// Callback funciton

function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type MutationFunction = (v: number) => number;

function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
  return numbers.map(mutate);
}

type AdderFunction = (v: number) => number;

function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

console.log(createAdder(1)(4));
