# addElement() – Spread Operator

Mit `...` (Spread) erstellst du eine Kopie eines Arrays und fügst Elemente hinzu.

```typescript
function addElement(arr: number[], val: number): number[] {
  return [...arr, val];
}
```

Das Original-Array wird nicht verändert.
