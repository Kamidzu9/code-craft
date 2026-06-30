import { describe, it, expect } from "vitest";
import { login } from "./solutions";

describe("login", () => {
  it("should succeed with correct credentials", () => {
    expect(login("admin", "secret")).toBe(true);
  });
  it("should fail with wrong credentials", () => {
    expect(login("admin", "wrong")).toBe(false);
    expect(login("user", "secret")).toBe(false);
    expect(login("", "")).toBe(false);
  });
});
