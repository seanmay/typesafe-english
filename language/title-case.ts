import type { Preposition, Article, Conjunction } from "./word-types";
import type { CapitalizeWord, LowercaseWord } from "./word-casing";

export type Titlecase<Input extends string> =
  Input extends `${infer First} ${infer Rest}`
  ? `${CapitalizeWord<First>} ${TitlecaseRemainingWords<Rest>}`
  : CapitalizeWord<Input>;

type TitlecaseRemainingWords<Input extends string> =
  Input extends `${infer First} ${infer Rest}`
  ? `${CapitalizeNonPreposition<First>} ${TitlecaseRemainingWords<Rest>}`
  : CapitalizeWord<Input>;

type CapitalizeNonPreposition<Word extends string> =
  LowercaseWord<Word> extends LowercaseInTitle
  ? LowercaseWord<Word>
  : CapitalizeWord<Word>;

type LowercaseInTitle = Preposition | Article | Conjunction;
