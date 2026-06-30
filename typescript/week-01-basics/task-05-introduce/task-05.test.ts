import { describe, it, expect } from "vitest";
import { introduce } from "./solutions";

describe("introduce", () => {
  it("should return the introduction string", () => {
    expect(introduce("Anna", 25)).toBe("Hi, I'm Anna and I'm 25 years old!");
    expect(introduce("Bob", 30)).toBe("Hi, I'm Bob and I'm 30 years old!");
  });
});
