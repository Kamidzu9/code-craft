import { describe, it, expect } from "vitest";
import { canVote } from "./solutions";

describe("canVote", () => {
  it("should return true if age >= 18", () => {
    expect(canVote(18)).toBe(true);
    expect(canVote(30)).toBe(true);
  });
  it("should return false if age < 18", () => {
    expect(canVote(17)).toBe(false);
    expect(canVote(0)).toBe(false);
  });
});
