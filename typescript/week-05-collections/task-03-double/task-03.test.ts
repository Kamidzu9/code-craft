import { describe, it, expect } from "vitest";
import { double } from "./solutions";

describe("double", () => {
  it("should double each element", () => {
    expect(double([1, 2, 3])).toEqual([2, 4, 6]);
    expect(double([0, -1, 5])).toEqual([0, -2, 10]);
    expect(double([])).toEqual([]);
  });
});
