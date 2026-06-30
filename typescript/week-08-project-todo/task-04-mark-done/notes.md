# markDone() – Todo als erledigt markieren

Durchlaufe alle Todos, suche die richtige ID und setze `done` auf `true`.

```typescript
function markDone(todos: { id: number; done: boolean }[], id: number): { id: number; done: boolean }[] {
  return todos.map(t => t.id === id ? { ...t, done: true } : t);
}
```

Mit `map` und Spread erstellst du ein neues Array, ohne das Original zu ändern.
