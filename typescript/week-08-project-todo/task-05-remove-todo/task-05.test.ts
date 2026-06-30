import { describe, it, expect } from "vitest";
import { removeTodo } from "./solutions";

describe("removeTodo", () => {
  it("should remove the todo with the given id", () => {
    const todos = [{ id: 1, text: "A" }, { id: 2, text: "B" }, { id: 3, text: "C" }];
    const result = removeTodo(todos, 2);
    expect(result).toHaveLength(2);
    expect(result.find(t => t.id === 2)).toBeUndefined();
  });
  it("should not mutate the original array", () => {
    const original = [{ id: 1 }];
    const result = removeTodo(original, 1);
    expect(original).toHaveLength(1);
    expect(result).toHaveLength(0);
  });
});
