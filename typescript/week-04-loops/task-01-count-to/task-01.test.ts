import { describe, it, expect } from "vitest";
import { countTo } from "./solutions";

describe("countTo", () => {
  it("should return numbers from 1 to n", () => {
    expect(countTo(3)).toEqual([1, 2, 3]);
    expect(countTo(1)).toEqual([1]);
    expect(countTo(0)).toEqual([]);
  });
});
