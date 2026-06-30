# isAdult() – Boolean zurückgeben

Eine Funktion kann auch `boolean` (true/false) zurückgeben. Vergleiche mit `>=` ergeben direkt einen Boolean.

```typescript
function isAdult(age: number): boolean {
  return age >= 18;
}
```

Der Vergleich `age >= 18` ist bereits `true` oder `false` – kein if nötig.
