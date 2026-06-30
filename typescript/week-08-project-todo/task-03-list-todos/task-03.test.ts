import { describe, it, expect } from "vitest";
import { listTodos } from "./solutions";

describe("listTodos", () => {
  it("should return only the texts", () => {
    const todos = [{ text: "A" }, { text: "B" }];
    expect(listTodos(todos)).toEqual(["A", "B"]);
  });
  it("should handle empty list", () => {
    expect(listTodos([])).toEqual([]);
  });
});
