import { describe, it, expect } from "vitest";
import { createPerson } from "./solutions";

describe("createPerson", () => {
  it("should create a person object with exact shape { name, age }", () => {
    expect(createPerson("Anna", 25)).toEqual({ name: "Anna", age: 25 });
    expect(createPerson("Bob", 30)).toEqual({ name: "Bob", age: 30 });
  });
});
