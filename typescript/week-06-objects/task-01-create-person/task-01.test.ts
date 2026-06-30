import { describe, it, expect } from "vitest";
import { createPerson } from "./solutions";

describe("createPerson", () => {
  it("should create a person object", () => {
    const p = createPerson("Anna", 25);
    expect(p.name).toBe("Anna");
    expect(p.age).toBe(25);
  });
});
