import { describe, it, expect } from "vitest";
import { safeDivide } from "./solutions";

describe("safeDivide", () => {
  it("should divide two numbers", () => {
    expect(safeDivide(10, 2)).toBe(5);
    expect(safeDivide(7, 2)).toBe(3.5);
  });
  it("should return an error when dividing by zero", () => {
    expect(safeDivide(10, 0)).toBe("Fehler: Division durch Null");
  });
});
