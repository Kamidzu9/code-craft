import { describe, it, expect } from "vitest";
import { isSenior } from "./solutions";

describe("isSenior", () => {
  it("should return true if age >= 65", () => {
    expect(isSenior({ age: 65 })).toBe(true);
    expect(isSenior({ age: 80 })).toBe(true);
  });
  it("should return false if age < 65", () => {
    expect(isSenior({ age: 64 })).toBe(false);
    expect(isSenior({ age: 0 })).toBe(false);
  });
});
