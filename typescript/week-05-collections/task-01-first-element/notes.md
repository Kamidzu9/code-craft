# firstElement() – Null-Check für leere Arrays

Prüfe immer `arr.length === 0`, bevor du auf Array-Elemente zugreifst.

```typescript
function firstElement(arr: number[]): number | null {
  if (arr.length === 0) {
    return null;
  }
  return arr[0];
}
```

`number | null` ist ein Union-Typ – entweder Zahl oder null.
