# sumTo() – Summe mit Schleife

Addiere alle Zahlen von 1 bis n in einer Schleife.

```typescript
function sumTo(n: number): number {
  let sum: number = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

`sum += i` ist die Kurzform von `sum = sum + i`.
