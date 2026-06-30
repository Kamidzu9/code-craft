import { describe, it, expect } from "vitest";
import { validateEmail } from "./solutions";

describe("validateEmail", () => {
  it("should validate correct emails", () => {
    expect(validateEmail("a@b")).toBe(true);
    expect(validateEmail("test@example.com")).toBe(true);
  });
  it("should reject invalid emails", () => {
    expect(validateEmail("ab")).toBe(false);
    expect(validateEmail("noatsign")).toBe(false);
    expect(validateEmail("")).toBe(false);
  });
});
