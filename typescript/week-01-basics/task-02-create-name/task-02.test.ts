import { describe, it, expect } from "vitest";
import { createName } from "./solutions";

describe("createName", () => {
  it("should return 'TypeScript'", () => {
    expect(createName()).toBe("TypeScript");
  });

  it("should use a variable named 'name'", () => {
    const fnStr = createName.toString();
    expect(fnStr).toMatch(/\b(var|let|const)\s+name\s*=/);
  });
});
