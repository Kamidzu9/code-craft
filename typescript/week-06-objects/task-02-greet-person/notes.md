# greetPerson() – Objekte als Parameter

Eine Funktion kann ein Objekt als Parameter erwarten. Zugriff auf Properties mit Punkt-Notation.

```typescript
function greetPerson(person: { name: string }): string {
  return `Hello, ${person.name}!`;
}
```
