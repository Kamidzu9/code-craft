# introduce() – Template Literals

Mit Template Literals (Backticks `` ` `` und `${}`) kannst du Variablen direkt in Strings einbetten.

```typescript
function introduce(name: string, age: number): string {
  return `Hi, I'm ${name} and I'm ${age} years old!`;
}
```

Das ist lesbarer als die Verkettung mit `+`.
