# getLengthSafe() – null und undefined behandeln

Mit Optional Chaining `?.` und Nullish Coalescing `??` kannst du `null`/`undefined` elegant abfangen.

```typescript
function getLengthSafe(s: string | null | undefined): number {
  return s?.length ?? 0;
}
```

`?.` greift nur zu wenn s nicht null/undefined ist. `??` liefert 0 bei null/undefined.
