# removeTodo() – Todo löschen

Erstelle ein neues Array ohne das Todo mit der gegebenen ID.

```typescript
function removeTodo(todos: { id: number }[], id: number): { id: number }[] {
  return todos.filter(t => t.id !== id);
}
```

`filter` behält nur die Elemente, bei denen die Bedingung wahr ist.
