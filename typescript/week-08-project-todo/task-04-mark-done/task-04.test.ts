import { describe, it, expect } from "vitest";
import { markDone } from "./solutions";

describe("markDone", () => {
  it("should mark the todo with the given id as done", () => {
    const todos = [{ id: 1, text: "A", done: false }, { id: 2, text: "B", done: false }];
    const result = markDone(todos, 1);
    expect(result[0].done).toBe(true);
    expect(result[1].done).toBe(false);
  });
});
