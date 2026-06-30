# grade() – Mehrere Bedingungen mit else if

Bei mehreren Bedingungen prüfst du zuerst den höchsten Wert.

```typescript
function grade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
```
