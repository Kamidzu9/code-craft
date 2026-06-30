import { describe, it, expect } from "vitest";
import { createName } from "./solutions";

describe("createName", () => {
  it("should return 'TypeScript'", () => {
    expect(createName()).toBe("TypeScript");
  });
});
