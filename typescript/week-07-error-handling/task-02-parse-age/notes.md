# parseAge() – Strings in Zahlen umwandeln

`Number(input)` wandelt einen String in eine Zahl um. `isNaN()` prüft, ob das Ergebnis keine gültige Zahl ist.

```typescript
function parseAge(input: string): number | string {
  const age = Number(input);
  if (isNaN(age)) {
    return "Fehler: Keine gültige Zahl";
  }
  return age;
}
```
