# isSenior() – Boolean aus Objekt-Property

Greife auf die Property `age` zu und vergleiche sie.

```typescript
function isSenior(person: { age: number }): boolean {
  return person.age >= 65;
}
```
