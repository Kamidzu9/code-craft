import { describe, it, expect } from "vitest";
import { max } from "./solutions";

describe("max", () => {
  it("should return the larger number", () => {
    expect(max(3, 7)).toBe(7);
    expect(max(10, 2)).toBe(10);
    expect(max(5, 5)).toBe(5);
  });
});
