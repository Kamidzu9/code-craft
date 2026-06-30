import { describe, it, expect } from "vitest";
import { animalSound } from "./solutions";

describe("animalSound", () => {
  it("should return the correct sound", () => {
    expect(animalSound("dog")).toBe("woof");
    expect(animalSound("cat")).toBe("meow");
    expect(animalSound("bird")).toBe("unknown");
    expect(animalSound("")).toBe("unknown");
  });
});
