# countdown() – Rückwärts zählen

Mit `i--` zählst du rückwärts. Starte bei n und gehe runter bis 1.

```typescript
function countdown(n: number): number[] {
  let result: number[] = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
}
```
