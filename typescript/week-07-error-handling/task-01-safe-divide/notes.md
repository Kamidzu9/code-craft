# safeDivide() – Fehlerfälle abfangen

Prüfe auf Division durch Null, bevor du rechnest. Union-Typen wie `number | string` erlauben mehrere Rückgabetypen.

```typescript
function safeDivide(a: number, b: number): number | string {
  if (b === 0) {
    return "Fehler: Division durch Null";
  }
  return a / b;
}
```
