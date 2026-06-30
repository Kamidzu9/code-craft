import { describe, it, expect } from "vitest";
import { canVote, grade, login, absolute, animalSound } from "./solutions";

describe("canVote", () => {
  it("sollte bei 18 true zurückgeben", () => {
    expect(canVote(18)).toBe(true);
  });
  it("sollte bei 30 true zurückgeben", () => {
    expect(canVote(30)).toBe(true);
  });
  it("sollte bei 17 false zurückgeben", () => {
    expect(canVote(17)).toBe(false);
  });
  it("sollte bei 0 false zurückgeben", () => {
    expect(canVote(0)).toBe(false);
  });
});

describe("grade", () => {
  it('sollte bei 95 "A" zurückgeben', () => {
    expect(grade(95)).toBe("A");
  });
  it('sollte bei 85 "B" zurückgeben', () => {
    expect(grade(85)).toBe("B");
  });
  it('sollte bei 75 "C" zurückgeben', () => {
    expect(grade(75)).toBe("C");
  });
  it('sollte bei 65 "D" zurückgeben', () => {
    expect(grade(65)).toBe("D");
  });
  it('sollte bei 50 "F" zurückgeben', () => {
    expect(grade(50)).toBe("F");
  });
  it('sollte bei 90 genau "A" sein', () => {
    expect(grade(90)).toBe("A");
  });
  it('sollte bei 80 genau "B" sein', () => {
    expect(grade(80)).toBe("B");
  });
  it('sollte bei 70 genau "C" sein', () => {
    expect(grade(70)).toBe("C");
  });
  it('sollte bei 60 genau "D" sein', () => {
    expect(grade(60)).toBe("D");
  });
});

describe("login", () => {
  it('sollte mit admin/secret true zurückgeben', () => {
    expect(login("admin", "secret")).toBe(true);
  });
  it('sollte mit falschem Passwort false zurückgeben', () => {
    expect(login("admin", "wrong")).toBe(false);
  });
  it('sollte mit falschem Benutzernamen false zurückgeben', () => {
    expect(login("user", "secret")).toBe(false);
  });
  it('sollte mit beidem falsch false zurückgeben', () => {
    expect(login("user", "pass")).toBe(false);
  });
});

describe("absolute", () => {
  it("sollte bei 5 den Wert 5 zurückgeben", () => {
    expect(absolute(5)).toBe(5);
  });
  it("sollte bei -5 den Wert 5 zurückgeben", () => {
    expect(absolute(-5)).toBe(5);
  });
  it("sollte bei 0 den Wert 0 zurückgeben", () => {
    expect(absolute(0)).toBe(0);
  });
  it("sollte bei -100 den Wert 100 zurückgeben", () => {
    expect(absolute(-100)).toBe(100);
  });
});

describe("animalSound", () => {
  it('sollte bei "dog" "woof" zurückgeben', () => {
    expect(animalSound("dog")).toBe("woof");
  });
  it('sollte bei "cat" "meow" zurückgeben', () => {
    expect(animalSound("cat")).toBe("meow");
  });
  it('sollte bei "cow" "unknown" zurückgeben', () => {
    expect(animalSound("cow")).toBe("unknown");
  });
  it('sollte bei leerem String "unknown" zurückgeben', () => {
    expect(animalSound("")).toBe("unknown");
  });
});
