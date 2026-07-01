import { describe, it, expect } from "vitest";
import { createTodo } from "./solutions";

describe("createTodo", () => {
  it("should create a todo with id starting at 1", () => {
    expect(createTodo("Learn TypeScript").id).toBe(1);
  });
  it("should create a todo with given text and done false", () => {
    const t1 = createTodo("Learn TypeScript");
    expect(t1.text).toBe("Learn TypeScript");
    expect(t1.done).toBe(false);
  });
  it("should increment id for each todo", () => {
    const t1 = createTodo("First");
    const t2 = createTodo("Second");
    expect(t2.id).toBe(t1.id + 1);
  });
});
