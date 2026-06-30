# createTodo() – Todo-Objekt erzeugen

Jedes Todo hat eine eindeutige `id`, einen `text` und den Status `done`.

```typescript
let nextId = 1;

export function createTodo(text: string): { id: number; text: string; done: boolean } {
  const todo = { id: nextId, text, done: false };
  nextId++;
  return todo;
}
```
