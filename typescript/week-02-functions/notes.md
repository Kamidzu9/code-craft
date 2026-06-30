# Woche 2: Funktionen

## Schlüsselkonzepte

Funktionen sind wiederverwendbare Code-Blöcke. Sie nehmen Eingaben entgegen (Parameter) und geben Werte zurück.

### 1. Funktionen schreiben

```typescript
// Grundstruktur
function funktionsName(parameter1: Typ, parameter2: Typ): Rückgabetyp {
  // Code hier
  return ergebnis;
}
```

Beispiel:
```typescript
function sayHello(name: string): string {
  return "Hello, " + name + "!";
}
```

### 2. Bedingungen mit `if` / `else`

Mit `if` kannst du Code nur ausführen, wenn eine Bedingung wahr ist:

```typescript
function isPositive(num: number): boolean {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}
```

Du kannst `if` / `else if` / `else` für mehrere Bedingungen verwenden:

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

### 3. Vergleichsoperatoren

| Operator | Bedeutung            |
| -------- | -------------------- |
| `>`      | größer als           |
| `<`      | kleiner als          |
| `>=`     | größer oder gleich   |
| `<=`     | kleiner oder gleich  |
| `===`    | gleich (strikt)      |
| `!==`    | nicht gleich (strikt)|

```typescript
let x: number = 10;
x > 5;   // true
x === 5; // false
x !== 5; // true
```

### 4. Mehrere If-Bedingungen kombinieren

Wenn eine Bedingung zutrifft, wird der Rest übersprungen. Die Reihenfolge ist wichtig!

```typescript
function max(a: number, b: number): number {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
```

## Häufige Fehler (Pitfalls)

- **`=` statt `===`**: `=` ist Zuweisung, `===` ist Vergleich.
- **Falsche Reihenfolge bei if/else**: Die strengste Bedingung zuerst prüfen.
- **Rückgabetyp vergessen**: Wenn eine Funktion einen Wert zurückgibt, muss der Typ nach dem Doppelpunkt stehen.
- **Alle Fälle abdecken**: Stelle sicher, dass jeder mögliche Fall von deiner Funktion abgedeckt wird.

## Zusammenfassung

- Funktionen kapseln Logik und können Werte zurückgeben
- `if` / `else if` / `else` für Bedingungen
- Vergleichsoperatoren: `>`, `<`, `>=`, `<=`, `===`, `!==`
- Der Rückgabetyp steht nach den Parametern: `): Typ {`
