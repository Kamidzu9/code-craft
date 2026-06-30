# multiplyTable() – Einmaleins mit Schleife

Multipliziere n mit 1 bis 10 und sammle die Ergebnisse in einem Array.

```typescript
function multiplyTable(n: number): number[] {
  let result: number[] = [];
  for (let i = 1; i <= 10; i++) {
    result.push(i * n);
  }
  return result;
}
```
