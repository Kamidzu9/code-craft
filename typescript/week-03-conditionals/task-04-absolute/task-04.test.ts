import { describe, it, expect } from "vitest";
import { absolute } from "./solutions";

describe("absolute", () => {
  it("should return the absolute value", () => {
    expect(absolute(5)).toBe(5);
    expect(absolute(-5)).toBe(5);
    expect(absolute(0)).toBe(0);
  });
});
