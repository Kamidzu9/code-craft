import { describe, it, expect } from "vitest";
import { sayHello } from "./solutions";

describe("sayHello", () => {
  it("should greet the given name", () => {
    expect(sayHello("Anna")).toBe("Hello, Anna!");
    expect(sayHello("Bob")).toBe("Hello, Bob!");
  });
});
