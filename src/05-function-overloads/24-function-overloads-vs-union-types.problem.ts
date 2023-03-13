import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

function runGenerator(generator: () => string): string;
function runGenerator(generator: { run: () => string }): string;
function runGenerator(
  generator: (() => string) | { run: () => string }
): string {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

// or

const runGenerator2 = (generator: (() => string) | { run: () => string }) => {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
};

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator({
    run: () => "hello",
  });

  expect(result).toBe("hello");
  type test1 = Expect<Equal<typeof result, string>>;

  const result2 = runGenerator2({
    run: () => "hello",
  });

  expect(result2).toBe("hello");
  type test2 = Expect<Equal<typeof result2, string>>;
});

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator(() => "hello");

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;

  const result2 = runGenerator2(() => "hello");

  expect(result2).toBe("hello");

  type test2 = Expect<Equal<typeof result2, string>>;
});
