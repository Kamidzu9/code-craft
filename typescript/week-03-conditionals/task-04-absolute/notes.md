# absolute() – Bedingung für Vorzeichen

Der absolute Wert ist der Abstand zur Null – immer positiv.

```typescript
function absolute(n: number): number {
  if (n < 0) {
    return -n;
  }
  return n;
}
```

Aus `-5` wird `5`, aus `3` bleibt `3`.
