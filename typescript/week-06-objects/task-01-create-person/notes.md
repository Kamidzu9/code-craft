# createPerson() – Objekte erstellen

Objekte gruppieren zusammengehörige Daten. Die Kurzschreibweise `{ name, age }` ist identisch zu `{ name: name, age: age }`.

```typescript
function createPerson(name: string, age: number): { name: string; age: number } {
  return { name, age };
}
```
