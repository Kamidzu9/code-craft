# countTo() – For-Schleife

Mit `for` kannst du Code mehrmals ausführen. `push` fügt Werte an ein Array an.

```typescript
function countTo(n: number): number[] {
  let result: number[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
```
