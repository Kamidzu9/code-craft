# addTodo() – Todo zur Liste hinzufügen

Erstelle ein neues Todo mit `createTodo` und füge es mit Spread zum Array hinzu.

```typescript
function addTodo(todos: object[], text: string): object[] {
  const newTodo = createTodo(text);
  return [...todos, newTodo];
}
```
