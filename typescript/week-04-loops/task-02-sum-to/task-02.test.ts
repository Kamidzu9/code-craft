import { describe, it, expect } from "vitest";
import { sumTo } from "./solutions";

describe("sumTo", () => {
  it("should sum from 1 to n", () => {
    expect(sumTo(3)).toBe(6);
    expect(sumTo(1)).toBe(1);
    expect(sumTo(0)).toBe(0);
    expect(sumTo(10)).toBe(55);
  });
});
