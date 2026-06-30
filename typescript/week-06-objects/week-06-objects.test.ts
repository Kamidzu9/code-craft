import { describe, it, expect } from "vitest";
import {
  createPerson,
  greetPerson,
  birthday,
  isSenior,
  createTeam,
} from "./solutions";

describe("createPerson", () => {
  it("sollte ein Objekt mit name und age zurückgeben", () => {
    const result = createPerson("Anna", 25);
    expect(result).toEqual({ name: "Anna", age: 25 });
  });
  it("sollte mit verschiedenen Werten funktionieren", () => {
    const result = createPerson("Bob", 30);
    expect(result).toEqual({ name: "Bob", age: 30 });
  });
  it("sollte name als string und age als number haben", () => {
    const result = createPerson("Test", 1);
    expect(typeof result.name).toBe("string");
    expect(typeof result.age).toBe("number");
  });
});

describe("greetPerson", () => {
  it('sollte "Hello, Anna!" zurückgeben', () => {
    expect(greetPerson({ name: "Anna" })).toBe("Hello, Anna!");
  });
  it('sollte "Hello, Welt!" zurückgeben', () => {
    expect(greetPerson({ name: "Welt" })).toBe("Hello, Welt!");
  });
});

describe("birthday", () => {
  it("sollte das Alter um 1 erhöhen", () => {
    const result = birthday({ age: 25 });
    expect(result).toEqual({ age: 26 });
  });
  it("sollte bei age = 0 auf 1 erhöhen", () => {
    const result = birthday({ age: 0 });
    expect(result).toEqual({ age: 1 });
  });
  it("sollte ein neues Objekt zurückgeben", () => {
    const original = { age: 10 };
    const result = birthday(original);
    expect(result).not.toBe(original); // Neues Objekt!
  });
});

describe("isSenior", () => {
  it("sollte bei 65 true zurückgeben", () => {
    expect(isSenior({ age: 65 })).toBe(true);
  });
  it("sollte bei 70 true zurückgeben", () => {
    expect(isSenior({ age: 70 })).toBe(true);
  });
  it("sollte bei 64 false zurückgeben", () => {
    expect(isSenior({ age: 64 })).toBe(false);
  });
  it("sollte bei 30 false zurückgeben", () => {
    expect(isSenior({ age: 30 })).toBe(false);
  });
});

describe("createTeam", () => {
  it("sollte ein Team-Objekt korrekt erstellen", () => {
    const result = createTeam("Team A", ["Anna", "Bob"]);
    expect(result).toEqual({
      name: "Team A",
      members: ["Anna", "Bob"],
      count: 2,
    });
  });
  it("sollte die richtige Anzahl zählen", () => {
    const result = createTeam("Solo", ["X"]);
    expect(result.count).toBe(1);
  });
  it("sollte bei leerem Team count = 0 haben", () => {
    const result = createTeam("Empty", []);
    expect(result.count).toBe(0);
  });
});
