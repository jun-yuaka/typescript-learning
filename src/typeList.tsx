/*eslint-disable @typescript-eslint/no-unused-vars*/
let bool: boolean = true;

let num: number = 0;

let str: string = "abc";

let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [1, 2, 3];

let tuple: [number, string] = [0, "a"];

/**なんでも自由な型 */
let any1: any = false;

//void 何も返却するものがない型
const funcA = (): void => {
  const test = "TEST";
};

let null1: null = null;

let undefind1: undefined = undefined;

let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "aaa" };
