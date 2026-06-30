import { describe, it, expect } from "vitest";
import {
  safeDivide,
  parseAge,
  getFirstChar,
  getLengthSafe,
  validateEmail,
} from "./solutions";

describe("safeDivide", () => {
  it("sollte 10 / 2 = 5 berechnen", () => {
    expect(safeDivide(10, 2)).toBe(5);
  });
  it("sollte 7 / 3 korrekt berechnen", () => {
    expect(safeDivide(7, 3)).toBeCloseTo(2.333, 2);
  });
  it('sollte bei b = 0 "Fehler: Division durch Null" zurückgeben', () => {
    expect(safeDivide(5, 0)).toBe("Fehler: Division durch Null");
  });
  it("sollte 0 / 5 = 0 berechnen", () => {
    expect(safeDivide(0, 5)).toBe(0);
  });
  it('sollte 0 / 0 auch als Fehler erkennen', () => {
    expect(safeDivide(0, 0)).toBe("Fehler: Division durch Null");
  });
});

describe("parseAge", () => {
  it('sollte "25" in 25 umwandeln', () => {
    expect(parseAge("25")).toBe(25);
  });
  it('sollte "0" in 0 umwandeln', () => {
    expect(parseAge("0")).toBe(0);
  });
  it('sollte "abc" als Fehler erkennen', () => {
    expect(parseAge("abc")).toBe("Fehler: Keine gültige Zahl");
  });
  it('sollte leeren String als Fehler erkennen', () => {
    expect(parseAge("")).toBe("Fehler: Keine gültige Zahl");
  });
  it('sollte "3.14" korrekt parsen', () => {
    expect(parseAge("3.14")).toBe(3.14);
  });
});

describe("getFirstChar", () => {
  it('sollte bei "Hallo" den Buchstaben "H" zurückgeben', () => {
    expect(getFirstChar("Hallo")).toBe("H");
  });
  it('sollte bei "A" genau "A" zurückgeben', () => {
    expect(getFirstChar("A")).toBe("A");
  });
  it("sollte bei leerem String null zurückgeben", () => {
    expect(getFirstChar("")).toBeNull();
  });
});

describe("getLengthSafe", () => {
  it('sollte bei "TypeScript" die Länge 10 zurückgeben', () => {
    expect(getLengthSafe("TypeScript")).toBe(10);
  });
  it("sollte bei null den Wert 0 zurückgeben", () => {
    expect(getLengthSafe(null)).toBe(0);
  });
  it("sollte bei undefined den Wert 0 zurückgeben", () => {
    expect(getLengthSafe(undefined)).toBe(0);
  });
  it("sollte bei leerem String die Länge 0 zurückgeben", () => {
    expect(getLengthSafe("")).toBe(0);
  });
});

describe("validateEmail", () => {
  it('sollte "test@example.com" als gültig erkennen', () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });
  it('sollte "a@b" als gültig erkennen (Länge 3, "@" enthalten)', () => {
    expect(validateEmail("a@b")).toBe(true);
  });
  it('sollte "abc" ohne "@" als ungültig erkennen', () => {
    expect(validateEmail("abc")).toBe(false);
  });
  it('sollte "ab" (zu kurz) als ungültig erkennen', () => {
    expect(validateEmail("ab")).toBe(false);
  });
  it('sollte leeren String als ungültig erkennen', () => {
    expect(validateEmail("")).toBe(false);
  });
  it('sollte "@" allein (Länge 1) als ungültig erkennen', () => {
    expect(validateEmail("@")).toBe(false);
  });
});
