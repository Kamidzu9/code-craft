import { describe, it, expect } from "vitest";
import { firstElement } from "./solutions";

describe("firstElement", () => {
  it("should return the first element", () => {
    expect(firstElement([10, 20, 30])).toBe(10);
    expect(firstElement([5])).toBe(5);
  });
  it("should return null for empty array", () => {
    expect(firstElement([])).toBeNull();
  });
});
