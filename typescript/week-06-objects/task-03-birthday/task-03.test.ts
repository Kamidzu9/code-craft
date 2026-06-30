import { describe, it, expect } from "vitest";
import { birthday } from "./solutions";

describe("birthday", () => {
  it("should increment age by 1", () => {
    expect(birthday({ age: 25 })).toEqual({ age: 26 });
    expect(birthday({ age: 0 })).toEqual({ age: 1 });
  });
});
