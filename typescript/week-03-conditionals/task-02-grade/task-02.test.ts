import { describe, it, expect } from "vitest";
import { grade } from "./solutions";

describe("grade", () => {
  it("should return the correct grade", () => {
    expect(grade(95)).toBe("A");
    expect(grade(85)).toBe("B");
    expect(grade(75)).toBe("C");
    expect(grade(65)).toBe("D");
    expect(grade(50)).toBe("F");
  });
});
