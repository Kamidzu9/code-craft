import { describe, it, expect } from "vitest";
import { getLengthSafe } from "./solutions";

describe("getLengthSafe", () => {
  it("should return the length of the string", () => {
    expect(getLengthSafe("Hallo")).toBe(5);
    expect(getLengthSafe("")).toBe(0);
  });
  it("should return 0 for null or undefined", () => {
    expect(getLengthSafe(null)).toBe(0);
    expect(getLengthSafe(undefined)).toBe(0);
  });
});
