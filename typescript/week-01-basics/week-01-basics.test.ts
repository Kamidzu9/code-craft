import { describe, it, expect } from "vitest";
import { greet, createName, add, isAdult, introduce } from "./solutions";

describe("greet", () => {
  it('sollte "Hello, World!" zurückgeben', () => {
    expect(greet()).toBe("Hello, World!");
  });
});

describe("createName", () => {
  it('sollte "TypeScript" zurückgeben', () => {
    expect(createName()).toBe("TypeScript");
  });
});

describe("add", () => {
  it("sollte 2 + 3 = 5 korrekt berechnen", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("sollte negative Zahlen korrekt addieren", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it("sollte 0 + 0 = 0 korrekt berechnen", () => {
    expect(add(0, 0)).toBe(0);
  });

  it("sollte 100 + 200 = 300 korrekt berechnen", () => {
    expect(add(100, 200)).toBe(300);
  });
});

describe("isAdult", () => {
  it("sollte bei age = 18 true zurückgeben", () => {
    expect(isAdult(18)).toBe(true);
  });

  it("sollte bei age = 21 true zurückgeben", () => {
    expect(isAdult(21)).toBe(true);
  });

  it("sollte bei age = 17 false zurückgeben", () => {
    expect(isAdult(17)).toBe(false);
  });

  it("sollte bei age = 0 false zurückgeben", () => {
    expect(isAdult(0)).toBe(false);
  });
});

describe("introduce", () => {
  it('sollte "Hi, I\'m Anna and I\'m 25 years old!" zurückgeben', () => {
    expect(introduce("Anna", 25)).toBe("Hi, I'm Anna and I'm 25 years old!");
  });

  it("sollte mit verschiedenen Werten funktionieren", () => {
    expect(introduce("Bob", 30)).toBe("Hi, I'm Bob and I'm 30 years old!");
  });
});
