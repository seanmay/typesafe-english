# Type-Safe Titles: TypeScript Recursive Template Literal Examples

An old demo / codepen, memorialized in repo form.

## Why?

To demonstrate how to construct recursive and recurrent type structures, the use of type inference and type predicates, and the use of template literals in types.

## No, but, really, why?

Is this repo useful as a standalone library? Not at all, unless you want to use the TS LSP as the basis for some new Grammerly competitor (please don't).

The utility of this repo is in its ability to demonstrate type-predicates, recursion, and problem-solving in producing deterministic and narrowed types, from what developers might generally classify as `string`.

Why is that actually useful? An infinite number of reasons. Sometimes you need some guarantees around key names, or the properties you look up, and manually writing all permutations of types out would be impractical or hundreds of lines of busy-work to be compiled out.

Sometimes, you need to ensure a value that might be of an unbounded type (`string`, `number`, etc) exists within a deterministic set, and you would like the compiler to force you to check, but not force you to write it out by hand, every time you do.

Perhaps you're new to the recursion in the types, or type predicates, or type inference within type predicates. These were the stumbling blocks that inspired this example, to begin with.

A trivial demonstration of familiarity with these concepts would be to extend this example with a `LibraryTitle<Title>` type, which makes searching and sorting easier, by taking leading articles (`"A"` / `"The"`), moving them to the end, and placing them after a comma:

`"The Little Mermaid"` -> `"Little Mermaid, The"`

Again; useful? Not directly. Powerful tools to comprehend and use appropriately, in cases where each tool is warranted? Absolutely.
