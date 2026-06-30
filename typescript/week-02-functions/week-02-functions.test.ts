import { describe, it, expect } from "vitest";
import {
  sayHello,
  rectangleArea,
  isPositive,
  max,
  describeTemperature,
} from "./solutions";

describe("sayHello", () => {
  it('sollte "Hello, Welt!" zurückgeben', () => {
    expect(sayHello("Welt")).toBe("Hello, Welt!");
  });

  it('sollte "Hello, TypeScript!" zurückgeben', () => {
    expect(sayHello("TypeScript")).toBe("Hello, TypeScript!");
  });
});

describe("rectangleArea", () => {
  it("sollte 3 * 4 = 12 berechnen", () => {
    expect(rectangleArea(3, 4)).toBe(12);
  });

  it("sollte 5 * 5 = 25 berechnen", () => {
    expect(rectangleArea(5, 5)).toBe(25);
  });

  it("sollte mit 0 umgehen", () => {
    expect(rectangleArea(0, 10)).toBe(0);
  });
});

describe("isPositive", () => {
  it("sollte bei 5 true zurückgeben", () => {
    expect(isPositive(5)).toBe(true);
  });

  it("sollte bei 0 false zurückgeben", () => {
    expect(isPositive(0)).toBe(false);
  });

  it("sollte bei -3 false zurückgeben", () => {
    expect(isPositive(-3)).toBe(false);
  });
});

describe("max", () => {
  it("sollte das Maximum von 3 und 7 finden", () => {
    expect(max(3, 7)).toBe(7);
  });

  it("sollte das Maximum von 10 und 2 finden", () => {
    expect(max(10, 2)).toBe(10);
  });

  it("sollte bei gleichen Werten den Wert zurückgeben", () => {
    expect(max(5, 5)).toBe(5);
  });
});

describe("describeTemperature", () => {
  it('sollte bei temp = 35 "hot" zurückgeben', () => {
    expect(describeTemperature(35)).toBe("hot");
  });

  it('sollte bei temp = 30 "warm" zurückgeben', () => {
    expect(describeTemperature(30)).toBe("warm");
  });

  it('sollte bei temp = 20 "warm" zurückgeben', () => {
    expect(describeTemperature(20)).toBe("warm");
  });

  it('sollte bei temp = 10 "cold" zurückgeben', () => {
    expect(describeTemperature(10)).toBe("cold");
  });
});
