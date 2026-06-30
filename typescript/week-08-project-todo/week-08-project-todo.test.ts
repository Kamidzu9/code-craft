import { describe, it, expect, beforeEach } from "vitest";
import {
  Todo,
  createTodo,
  addTodo,
  listTodos,
  markDone,
  removeTodo,
  resetNextId,
} from "./solutions";

// Setze den ID-Zähler vor jedem Test zurück
beforeEach(() => {
  resetNextId();
});

describe("createTodo", () => {
  it("sollte ein Todo mit dem gegebenen Text erstellen", () => {
    const todo: Todo = createTodo("TypeScript lernen");
    expect(todo.text).toBe("TypeScript lernen");
    expect(todo.done).toBe(false);
  });

  it("sollte eine eindeutige ID vergeben", () => {
    const todo1 = createTodo("Erste Aufgabe");
    const todo2 = createTodo("Zweite Aufgabe");
    expect(todo1.id).toBe(1);
    expect(todo2.id).toBe(2);
    expect(todo1.id).not.toBe(todo2.id);
  });
});

describe("addTodo", () => {
  it("sollte ein Todo zur leeren Liste hinzufügen", () => {
    const todos: Todo[] = [];
    const result = addTodo(todos, "Neues Todo");
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe("Neues Todo");
  });

  it("sollte ein Todo am Ende hinzufügen", () => {
    const existing: Todo[] = [createTodo("Vorhanden")];
    const result = addTodo(existing, "Neues");
    expect(result).toHaveLength(2);
    expect(result[1].text).toBe("Neues");
  });

  it("sollte das Original-Array nicht verändern", () => {
    const original: Todo[] = [createTodo("Test")];
    addTodo(original, "Neues");
    expect(original).toHaveLength(1);
  });
});

describe("listTodos", () => {
  it("sollte bei leerer Liste ein leeres Array zurückgeben", () => {
    expect(listTodos([])).toEqual([]);
  });

  it("sollte alle Texte als Array zurückgeben", () => {
    const todos: Todo[] = [
      createTodo("Lernen"),
      createTodo("Üben"),
      createTodo("Wiederholen"),
    ];
    expect(listTodos(todos)).toEqual(["Lernen", "Üben", "Wiederholen"]);
  });
});

describe("markDone", () => {
  it("sollte das Todo mit der richtigen ID als erledigt markieren", () => {
    const todos: Todo[] = [
      createTodo("Erstes"),
      createTodo("Zweites"),
      createTodo("Drittes"),
    ];
    const result = markDone(todos, 2);
    expect(result[0].done).toBe(false);
    expect(result[1].done).toBe(true);
    expect(result[2].done).toBe(false);
  });

  it("sollte das Original-Array nicht verändern", () => {
    const original: Todo[] = [createTodo("Test")];
    markDone(original, 1);
    expect(original[0].done).toBe(false);
  });

  it("sollte bei unbekannter ID das Array unverändert lassen", () => {
    const todos: Todo[] = [createTodo("Test")];
    const result = markDone(todos, 99);
    expect(result).toHaveLength(1);
    expect(result[0].done).toBe(false);
  });
});

describe("removeTodo", () => {
  it("sollte das Todo mit der richtigen ID entfernen", () => {
    const todos: Todo[] = [
      createTodo("Erstes"),
      createTodo("Zweites"),
      createTodo("Drittes"),
    ];
    const result = removeTodo(todos, 2);
    expect(result).toHaveLength(2);
    expect(result.map((t) => t.text)).toEqual(["Erstes", "Drittes"]);
  });

  it("sollte bei unbekannter ID das Array unverändert lassen", () => {
    const todos: Todo[] = [createTodo("Test")];
    const result = removeTodo(todos, 99);
    expect(result).toHaveLength(1);
  });

  it("sollte das Original-Array nicht verändern", () => {
    const original: Todo[] = [createTodo("Test")];
    removeTodo(original, 1);
    expect(original).toHaveLength(1);
  });
});
