import { describe, it, expect } from "vitest";
import { greetPerson } from "./solutions";

describe("greetPerson", () => {
  it("should greet the person", () => {
    expect(greetPerson({ name: "Anna" })).toBe("Hello, Anna!");
    expect(greetPerson({ name: "Bob" })).toBe("Hello, Bob!");
  });
});
