import { describe, it, expect } from "vitest";
import { describeTemperature } from "./solutions";

describe("describeTemperature", () => {
  it("should return 'hot' for temp > 30", () => {
    expect(describeTemperature(35)).toBe("hot");
    expect(describeTemperature(31)).toBe("hot");
  });
  it("should return 'warm' for temp > 15 and <= 30", () => {
    expect(describeTemperature(20)).toBe("warm");
    expect(describeTemperature(16)).toBe("warm");
  });
  it("should return 'cold' for temp <= 15", () => {
    expect(describeTemperature(10)).toBe("cold");
    expect(describeTemperature(0)).toBe("cold");
  });
});
