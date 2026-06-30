# contains() – Array durchsuchen

Mit einer Schleife und `if` prüfst du jedes Element. `return true` beendet sofort.

```typescript
function contains(arr: number[], val: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}
```

`arr.length` gibt die Anzahl der Elemente. Der Index läuft von 0 bis `arr.length - 1`.
