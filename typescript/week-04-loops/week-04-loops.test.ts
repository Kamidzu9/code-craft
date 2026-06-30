import { describe, it, expect } from "vitest";
import { countTo, sumTo, countdown, contains, multiplyTable } from "./solutions";

describe("countTo", () => {
  it("sollte bei n = 3 [1, 2, 3] zurückgeben", () => {
    expect(countTo(3)).toEqual([1, 2, 3]);
  });
  it("sollte bei n = 1 [1] zurückgeben", () => {
    expect(countTo(1)).toEqual([1]);
  });
  it("sollte bei n = 0 ein leeres Array zurückgeben", () => {
    expect(countTo(0)).toEqual([]);
  });
  it("sollte bei n = 5 [1,2,3,4,5] zurückgeben", () => {
    expect(countTo(5)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("sumTo", () => {
  it("sollte bei n = 3 den Wert 6 zurückgeben", () => {
    expect(sumTo(3)).toBe(6);
  });
  it("sollte bei n = 1 den Wert 1 zurückgeben", () => {
    expect(sumTo(1)).toBe(1);
  });
  it("sollte bei n = 0 den Wert 0 zurückgeben", () => {
    expect(sumTo(0)).toBe(0);
  });
  it("sollte bei n = 100 den Wert 5050 zurückgeben", () => {
    expect(sumTo(100)).toBe(5050);
  });
});

describe("countdown", () => {
  it("sollte bei n = 3 [3, 2, 1] zurückgeben", () => {
    expect(countdown(3)).toEqual([3, 2, 1]);
  });
  it("sollte bei n = 1 [1] zurückgeben", () => {
    expect(countdown(1)).toEqual([1]);
  });
  it("sollte bei n = 0 ein leeres Array zurückgeben", () => {
    expect(countdown(0)).toEqual([]);
  });
  it("sollte bei n = 5 [5,4,3,2,1] zurückgeben", () => {
    expect(countdown(5)).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("contains", () => {
  it("sollte true zurückgeben wenn val vorhanden ist", () => {
    expect(contains([1, 2, 3], 2)).toBe(true);
  });
  it("sollte false zurückgeben wenn val fehlt", () => {
    expect(contains([1, 2, 3], 5)).toBe(false);
  });
  it("sollte bei leerem Array false zurückgeben", () => {
    expect(contains([], 1)).toBe(false);
  });
  it("sollte das erste Element finden", () => {
    expect(contains([7, 8, 9], 7)).toBe(true);
  });
  it("sollte das letzte Element finden", () => {
    expect(contains([7, 8, 9], 9)).toBe(true);
  });
});

describe("multiplyTable", () => {
  it("sollte bei n = 3 [3,6,9,12,15,18,21,24,27,30] zurückgeben", () => {
    expect(multiplyTable(3)).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
  });
  it("sollte bei n = 1 [1,2,3,4,5,6,7,8,9,10] zurückgeben", () => {
    expect(multiplyTable(1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("sollte genau 10 Elemente haben", () => {
    expect(multiplyTable(5)).toHaveLength(10);
  });
});
