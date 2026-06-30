# validateEmail() – Einfache Validierung

`str.includes("@")` prüft auf ein @-Zeichen. `str.length` prüft die Mindestlänge.

```typescript
function validateEmail(email: string): boolean {
  if (email.length < 3) return false;
  if (!email.includes("@")) return false;
  return true;
}
```
