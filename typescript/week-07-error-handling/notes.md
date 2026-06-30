# Woche 7: Fehlerbehandlung

## Schlüsselkonzepte

In der echten Welt sind Daten nicht immer perfekt. Du musst Fehler erkennen und behandeln.

### 1. Division durch Null prüfen

Eine Division durch 0 ist mathematisch nicht definiert. Prüfe vorher:

```typescript
function safeDivide(a: number, b: number): number | string {
  if (b === 0) {
    return "Fehler: Division durch Null";
  }
  return a / b;
}
```

Der Rückgabetyp `number | string` bedeutet: entweder eine Zahl ODER ein String.

### 2. Strings in Zahlen umwandeln

`Number(wert)` wandelt einen String in eine Zahl um. Wenn das nicht klappt, kommt `NaN` (Not a Number) raus:

```typescript
function parseAge(input: string): number | string {
  const age: number = Number(input);
  if (isNaN(age)) {
    return "Fehler: Keine gültige Zahl";
  }
  return age;
}
```

`isNaN()` prüft, ob ein Wert `NaN` ist – also keine gültige Zahl.

### 3. Null-Check

Wenn etwas `null` sein kann, musst du das prüfen:

```typescript
function getFirstChar(s: string): string | null {
  if (s.length === 0) {
    return null;
  }
  return s[0];
}
```

`s[0]` gibt das erste Zeichen eines Strings zurück. Ein leerer String hat kein erstes Zeichen.

### 4. `null` und `undefined` behandeln

Manchmal kann ein Wert `null` ODER `undefined` sein. Prüfe beides:

```typescript
function getLengthSafe(s: string | null | undefined): number {
  if (s === null || s === undefined) {
    return 0;
  }
  return s.length;
}
```

Oder kürzer mit Optional Chaining `?.`:

```typescript
function getLengthSafe(s: string | null | undefined): number {
  return s?.length ?? 0;
}
```

`?.` greift nur zu wenn s nicht null/undefined ist. `??` gibt den rechten Wert, wenn links null/undefined ist.

### 5. E-Mail validieren

Eine einfache Validierung prüft auf Mindestlänge und Sonderzeichen:

```typescript
function validateEmail(email: string): boolean {
  if (email.length < 3) {
    return false;
  }
  if (!email.includes("@")) {
    return false;
  }
  return true;
}
```

`str.includes("@")` prüft, ob der String ein `@` enthält.

## Häufige Fehler (Pitfalls)

- **`NaN` checken mit `=== NaN`**: Das funktioniert nicht! Verwende `isNaN()`.
- **`null` und `undefined` verwechseln**: `null` ist ein bewusst leerer Wert, `undefined` bedeutet "nicht vorhanden".
- **Nicht alle Fälle abdecken**: Deine Funktion muss mit `null`, `undefined`, leeren Strings, negativen Zahlen usw. umgehen können.
- **Typfehler**: `number | string` ist ein Union-Typ – entweder Zahl ODER String.

## Zusammenfassung

- `b === 0` prüft auf Division durch Null
- `Number(input)` wandelt String in Zahl um, `isNaN()` prüft auf Fehler
- `null` und `undefined` müssen explizit geprüft werden
- `?.` (Optional Chaining) und `??` (Nullish Coalescing) sind moderne Kurzschreibweisen
- `str.includes("@")` prüft, ob ein String ein Zeichen enthält
- Union-Typen wie `number | string` erlauben mehrere Typen
