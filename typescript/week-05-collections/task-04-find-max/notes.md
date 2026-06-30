# findMax() – Maximum mit Schleife

Starte mit dem ersten Element und aktualisiere bei jedem größeren Wert.

```typescript
function findMax(arr: number[]): number | null {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```
