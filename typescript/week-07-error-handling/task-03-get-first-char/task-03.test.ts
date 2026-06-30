import { describe, it, expect } from "vitest";
import { getFirstChar } from "./solutions";

describe("getFirstChar", () => {
  it("should return the first character", () => {
    expect(getFirstChar("Hallo")).toBe("H");
    expect(getFirstChar("a")).toBe("a");
  });
  it("should return null for empty string", () => {
    expect(getFirstChar("")).toBeNull();
  });
});
