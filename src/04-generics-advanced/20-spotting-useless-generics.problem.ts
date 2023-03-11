import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <
  ParamsType extends {
    a: unknown;
    b: unknown;
  }
>(
  params: ParamsType
): [ParamsType["a"], ParamsType["b"]] => {
  return [params.a, params.b];
};

it("Should return a tuple of the properties a and b", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual(["a", 1]);

  type test1 = Expect<Equal<typeof result, [string, number]>>;
});
