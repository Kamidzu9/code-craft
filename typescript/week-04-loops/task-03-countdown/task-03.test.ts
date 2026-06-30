import { describe, it, expect } from "vitest";
import { countdown } from "./solutions";

describe("countdown", () => {
  it("should return numbers from n down to 1", () => {
    expect(countdown(3)).toEqual([3, 2, 1]);
    expect(countdown(1)).toEqual([1]);
    expect(countdown(0)).toEqual([]);
  });
});
