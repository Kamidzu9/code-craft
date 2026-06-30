import { describe, it, expect } from "vitest";
import { rectangleArea } from "./solutions";

describe("rectangleArea", () => {
  it("should calculate the area", () => {
    expect(rectangleArea(3, 4)).toBe(12);
    expect(rectangleArea(5, 5)).toBe(25);
    expect(rectangleArea(0, 10)).toBe(0);
  });
});
