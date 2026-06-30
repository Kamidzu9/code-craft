import { describe, it, expect } from "vitest";
import { addTodo } from "./solutions";

describe("addTodo", () => {
  it("should add a todo to the list", () => {
    const todos = addTodo([], "Test");
    expect(todos).toHaveLength(1);
    expect(todos[0].text).toBe("Test");
  });
  it("should not mutate the original array", () => {
    const original: object[] = [];
    const result = addTodo(original, "Hi");
    expect(original).toHaveLength(0);
    expect(result).toHaveLength(1);
  });
});
