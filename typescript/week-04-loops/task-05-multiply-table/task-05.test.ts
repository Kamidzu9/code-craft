import { describe, it, expect } from "vitest";
import { multiplyTable } from "./solutions";

describe("multiplyTable", () => {
  it("should return the multiplication table", () => {
    expect(multiplyTable(3)).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
    expect(multiplyTable(1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(multiplyTable(0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
