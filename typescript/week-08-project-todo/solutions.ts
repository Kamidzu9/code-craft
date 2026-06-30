// === Woche 8: Mini Projekt - Todo Liste ===

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// Zähler für eindeutige IDs
let nextId: number = 1;

/**
 * Erstellt ein neues Todo-Objekt mit automatischer ID.
 * Setze done standardmäßig auf false.
 */
export function createTodo(text: string): Todo {
  // TODO: Erstelle ein Todo mit id, text und done: false
}

/**
 * Fügt ein neues Todo am Ende des Arrays hinzu.
 */
export function addTodo(todos: Todo[], text: string): Todo[] {
  // TODO: Erstelle ein neues Todo und hänge es an das Array an
}

/**
 * Gibt ein Array mit allen text-Feldern zurück.
 */
export function listTodos(todos: Todo[]): string[] {
  // TODO: Sammle alle text-Felder in einem Array
}

/**
 * Setzt done auf true für das Todo mit der gegebenen id.
 */
export function markDone(todos: Todo[], id: number): Todo[] {
  // TODO: Finde das Todo mit der richtigen id und setze done auf true
}

/**
 * Entfernt das Todo mit der gegebenen id aus dem Array.
 */
export function removeTodo(todos: Todo[], id: number): Todo[] {
  // TODO: Gib ein neues Array ohne das Todo mit der gegebenen id zurück
}

// Export für Tests, damit nextId zurückgesetzt werden kann
export function resetNextId(): void {
  nextId = 1;
}
