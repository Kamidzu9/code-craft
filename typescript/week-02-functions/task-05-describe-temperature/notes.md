# describeTemperature() – if/else if/else

Für mehrere Bedingungen kannst du `if` / `else if` / `else` verwenden.

```typescript
function describeTemperature(temp: number): string {
  if (temp > 30) {
    return "hot";
  } else if (temp > 15) {
    return "warm";
  } else {
    return "cold";
  }
}
```

Die Reihenfolge ist wichtig – prüfe zuerst die strengste Bedingung.
