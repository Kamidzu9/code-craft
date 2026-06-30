import { describe, it, expect } from "vitest";
import {
  firstElement,
  addElement,
  double,
  findMax,
  evenNumbers,
} from "./solutions";

describe("firstElement", () => {
  it("sollte das erste Element von [10, 20, 30] zurückgeben", () => {
    expect(firstElement([10, 20, 30])).toBe(10);
  });
  it("sollte bei leerem Array null zurückgeben", () => {
    expect(firstElement([])).toBeNull();
  });
  it("sollte bei [5] genau 5 zurückgeben", () => {
    expect(firstElement([5])).toBe(5);
  });
});

describe("addElement", () => {
  it('sollte 4 an [1, 2, 3] anhängen', () => {
    expect(addElement([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });
  it("sollte ein neues Array zurückgeben (nicht das Original verändern)", () => {
    const original: number[] = [1, 2];
    const result = addElement(original, 3);
    expect(result).toEqual([1, 2, 3]);
    expect(original).toEqual([1, 2]); // Original unverändert
  });
  it("sollte mit leerem Array funktionieren", () => {
    expect(addElement([], 1)).toEqual([1]);
  });
});

describe("double", () => {
  it("sollte [1, 2, 3] zu [2, 4, 6] verdoppeln", () => {
    expect(double([1, 2, 3])).toEqual([2, 4, 6]);
  });
  it("sollte bei leerem Array leeres Array zurückgeben", () => {
    expect(double([])).toEqual([]);
  });
  it("sollte [0, -1, 5] korrekt verdoppeln", () => {
    expect(double([0, -1, 5])).toEqual([0, -2, 10]);
  });
});

describe("findMax", () => {
  it("sollte das Maximum von [1, 5, 3] finden", () => {
    expect(findMax([1, 5, 3])).toBe(5);
  });
  it("sollte bei negativen Zahlen funktionieren", () => {
    expect(findMax([-5, -2, -10])).toBe(-2);
  });
  it("sollte bei leerem Array null zurückgeben", () => {
    expect(findMax([])).toBeNull();
  });
  it("sollte bei einem Element genau dieses zurückgeben", () => {
    expect(findMax([42])).toBe(42);
  });
  it("sollte das größte Element am Ende finden", () => {
    expect(findMax([1, 2, 10, 3])).toBe(10);
  });
});

describe("evenNumbers", () => {
  it("sollte aus [1, 2, 3, 4] nur [2, 4] behalten", () => {
    expect(evenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
  });
  it("sollte bei ungeraden Zahlen [] zurückgeben", () => {
    expect(evenNumbers([1, 3, 5])).toEqual([]);
  });
  it("sollte bei leeren Array [] zurückgeben", () => {
    expect(evenNumbers([])).toEqual([]);
  });
  it("sollte 0 als gerade erkennen", () => {
    expect(evenNumbers([0, 1, 2])).toEqual([0, 2]);
  });
  it("sollte negative gerade Zahlen erkennen", () => {
    expect(evenNumbers([-2, -3, 4])).toEqual([-2, 4]);
  });
});
