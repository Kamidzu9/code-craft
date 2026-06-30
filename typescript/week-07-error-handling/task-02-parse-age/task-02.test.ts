import { describe, it, expect } from "vitest";
import { parseAge } from "./solutions";

describe("parseAge", () => {
  it("should parse a valid number string", () => {
    expect(parseAge("25")).toBe(25);
    expect(parseAge("0")).toBe(0);
  });
  it("should return an error for invalid input", () => {
    expect(parseAge("abc")).toBe("Fehler: Keine gültige Zahl");
    expect(parseAge("")).toBe("Fehler: Keine gültige Zahl");
  });
});
