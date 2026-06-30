import { describe, it, expect } from "vitest";
import { isAdult } from "./solutions";

describe("isAdult", () => {
  it("should return true if age >= 18", () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(25)).toBe(true);
  });
  it("should return false if age < 18", () => {
    expect(isAdult(17)).toBe(false);
    expect(isAdult(0)).toBe(false);
  });
});
