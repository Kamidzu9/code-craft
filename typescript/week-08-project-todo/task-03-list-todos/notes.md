# listTodos() – Nur Texte extrahieren

Iteriere über das Array und sammle nur die `text`-Properties.

```typescript
function listTodos(todos: { text: string }[]): string[] {
  const texts: string[] = [];
  for (let i = 0; i < todos.length; i++) {
    texts.push(todos[i].text);
  }
  return texts;
}
```
