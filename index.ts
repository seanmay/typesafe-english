import type { Titlecase } from "./language/title-case";
import type { Trim } from "./language/string-trim";
import type { Equal, AssertTrue, AssertFalse } from "./testing";

/*
  NB: The type and error of each of these consts will highlight the correct value of the string.
*/
const SlayerTitle: SingleWordOutput = "";
const PinkFloydTitle: LargeTitleOutput = "";
const StephenHawkingTitle: LeadingArticleOutput = "";
const EricBogleTitle: LeadingConjunctionOutput = "";
const RedHotChiliPeppersTitle: LeadingPrepositionOutput = "";


// Expect to title-case single words
type SingleWordInput = "doom";
type SingleWordExpectation = "Doom";
type SingleWordOutput = Titlecase<Trim<SingleWordInput>>;

type SingleWordTests = [
  AssertFalse<Equal<SingleWordInput, SingleWordOutput>>, // expected to be false
  AssertTrue<Equal<SingleWordExpectation, SingleWordOutput>>,
];


// Expect conjunctions / prepositions / articles to remain lower-case in title
type LowerCaseInput = "DOOM AND GLOOM";
type LowerCaseExpectation = "Doom and Gloom";
type LowerCaseOutput = Titlecase<Trim<LowerCaseInput>>;

type LowerCaseTests = [
  AssertFalse<Equal<LowerCaseInput, LowerCaseOutput>>, // expected to be false
  AssertTrue<Equal<LowerCaseExpectation, LowerCaseOutput>>,
];


// Expect to title-case large titles
type LargeTitleInput = "  SeVERAL  SPECies of  sMALL FuRRy  aNIMAls   GathEREd TogETHer iN a caVe aND  GrOOving with a PICt  ";
type LargeTitleExpectation = "Several Species of Small Furry Animals Gathered Together in a Cave and Grooving with a Pict";
type LargeTitleOutput = Titlecase<Trim<LargeTitleInput>>;

type LargeTitleTests = [
  AssertFalse<Equal<LargeTitleInput, LargeTitleOutput>>, // expected to be false
  AssertTrue<Equal<LargeTitleExpectation, LargeTitleOutput>>,
];


// Expect to title-case composed titles
type ComposedSubject = `   wORdS `;
type ComposedPreposition = `  ABOUt    `;
type ComposedObject = `  BIrDs        `;

type ComposedInput = `${ComposedSubject} ${ComposedPreposition} ${ComposedObject}`;
type ComposedExpectation = "Words about Birds";
type ComposedOutput = Titlecase<Trim<ComposedInput>>;

type CompositionTests = [
  AssertFalse<Equal<ComposedInput, ComposedOutput>>, // expected to be false
  AssertTrue<Equal<ComposedExpectation, ComposedOutput>>,
];


// Expect to uppercase articles / conjunctions / prepositions as the first word of a title
type LeadingConjunctionInput = "and the band played waltzing matilda";
type LeadingConjunctionExpectation = "And the Band Played Waltzing Matilda";
type LeadingConjunctionOutput = Titlecase<Trim<LeadingConjunctionInput>>;

type LeadingArticleInput = "a brief history of time";
type LeadingArticleExpectation = "A Brief History of Time";
type LeadingArticleOutput = Titlecase<Trim<LeadingArticleInput>>;

type LeadingPrepositionInput = "under the bridge";
type LeadingPrepositionExpectation = "Under the Bridge";
type LeadingPrepositionOutput = Titlecase<Trim<LeadingPrepositionInput>>;

type LeadingTests = [
  // Leading "And"
  AssertFalse<Equal<LeadingConjunctionInput, LeadingConjunctionOutput>>,
  AssertTrue<Equal<LeadingConjunctionExpectation, LeadingConjunctionOutput>>,
  // Leading "A"
  AssertFalse<Equal<LeadingArticleInput, LeadingArticleOutput>>,
  AssertTrue<Equal<LeadingArticleExpectation, LeadingArticleOutput>>,
  // Leading "Under"
  AssertFalse<Equal<LeadingPrepositionInput, LeadingPrepositionOutput>>,
  AssertTrue<Equal<LeadingPrepositionExpectation, LeadingPrepositionOutput>>,
];
