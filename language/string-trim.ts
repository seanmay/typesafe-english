export type Trim<Input extends string> =
  TrimStart<TrimEnd<TrimMiddle<Input>>>;

type TrimStart<Input extends string> =
  Input extends (` ${infer Content}`)
  ? TrimStart<Content>
  : Input;

type TrimEnd<Input extends string> =
  Input extends `${infer Content} `
  ? TrimEnd<Content>
  : Input;

type TrimMiddle<Input extends string> =
  Input extends (`${infer Start}  ${infer End}`)
  ? TrimMiddle<`${Start} ${End}`>
  : Input;
