# getFirstChar() – Null bei leerem String

`String[0]` gibt das erste Zeichen. Ein leerer String hat kein erstes Zeichen.

```typescript
function getFirstChar(s: string): string | null {
  if (s.length === 0) {
    return null;
  }
  return s[0];
}
```
