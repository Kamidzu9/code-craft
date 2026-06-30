import { describe, it, expect } from "vitest";
import { greet } from "./solutions";

describe("greet", () => {
  it("should return 'Hello, World!'", () => {
    expect(greet()).toBe("Hello, World!");
  });
});
