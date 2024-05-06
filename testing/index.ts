export type AssertTrue<T extends true> = T;

export type AssertFalse<F extends false> = F;

export type Equal<
  Expected extends any,
  Input extends any
> = Input extends Expected ? (Expected extends Input ? true : false) : false;
