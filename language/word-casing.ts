
export type CapitalizeWord<Word extends string> =
  Word extends `${infer First}${infer Rest}`
  ? `${UppercaseLetter<First>}${LowercaseWord<Rest>}`
  : Word;

export type LowercaseWord<Word extends string> =
  Word extends `${infer First}${infer Rest}`
  ? `${LowercaseLetter<First>}${LowercaseWord<Rest>}`
  : Word;

export type LowercaseLetter<X extends string> =
  SubstituteCase<LowercaseMap, X>;

export type UppercaseLetter<X extends string> =
  SubstituteCase<UppercaseMap, X>;

type SubstituteCase<Map extends { [x: string]: string }, Letter extends string> =
  Letter extends keyof Map
  ? Map[Letter]
  : Letter;

type UppercaseMap = {
  a: "A"; b: "B"; c: "C"; d: "D";
  e: "E"; f: "F"; g: "G"; h: "H";
  i: "I"; j: "J"; k: "K"; l: "L";
  m: "M"; n: "N"; o: "O"; p: "P";
  q: "Q"; r: "R"; s: "S"; t: "T";
  u: "U"; v: "V"; w: "W"; x: "X";
  y: "Y"; z: "Z";
};

type LowercaseMap = {
  A: "a"; B: "b"; C: "c"; D: "d";
  E: "e"; F: "f"; G: "g"; H: "h";
  I: "i"; J: "j"; K: "k"; L: "l";
  M: "m"; N: "n"; O: "o"; P: "p";
  Q: "q"; R: "r"; S: "s"; T: "t";
  U: "u"; V: "v"; W: "w"; X: "x";
  Y: "y"; Z: "z";
};
