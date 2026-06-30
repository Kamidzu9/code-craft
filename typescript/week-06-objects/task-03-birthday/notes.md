# birthday() – Objekte verändern (immutable)

Erstelle ein neues Objekt mit veränderten Werten, ändere nie das Original.

```typescript
function birthday(person: { age: number }): { age: number } {
  return { age: person.age + 1 };
}
```

Oder mit Spread, wenn es mehrere Properties gibt: `{ ...person, age: person.age + 1 }`.
