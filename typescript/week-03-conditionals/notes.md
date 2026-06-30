# Woche 3: Bedingungen (Conditionals)

## Schlüsselkonzepte

Bedingungen erlauben es deinem Programm, Entscheidungen zu treffen.

### 1. `if` / `else if` / `else` – Mehrere Bedingungen

Du kannst beliebig viele Bedingungen mit `else if` verketten:

```typescript
function grade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
```

Wichtig: Sobald eine Bedingung zutrifft, wird der Rest übersprungen.

### 2. Logische Operatoren: `&&` (UND) und `||` (ODER)

Mit `&&` prüfst du, ob **beide** Bedingungen wahr sind:

```typescript
function login(username: string, password: string): boolean {
  if (username === "admin" && password === "secret") {
    return true;
  } else {
    return false;
  }
}
```

Mit `||` prüfst du, ob **mindestens eine** Bedingung wahr ist.

```typescript
let istFrei: boolean = istWochenende || istFeiertag;
```

### 3. Bedingung kann direkt einen Boolean zurückgeben

Wenn du `true` oder `false` zurückgeben willst, kannst du den Vergleich direkt zurückgeben:

```typescript
function canVote(age: number): boolean {
  return age >= 18;
}
// Kurzform – age >= 18 ist bereits true oder false!
```

### 4. `switch` – für viele feste Werte

`switch` ist nützlich, wenn du viele einzelne Werte vergleichen willst:

```typescript
function animalSound(animal: string): string {
  switch (animal) {
    case "dog":
      return "woof";
    case "cat":
      return "meow";
    default:
      return "unknown";
  }
}
```

`break` verhindert, dass der Code in den nächsten `case` "durchfällt". `default` wird ausgeführt, wenn kein Fall zutrifft.

### 5. Absolute Werte mit `if`

Der absolute Wert einer Zahl ist der Abstand zur Null – immer positiv:

```typescript
function absolute(n: number): number {
  if (n < 0) {
    return -n; // -(-5) = 5
  } else {
    return n;
  }
}
```

## Häufige Fehler (Pitfalls)

- **`&&` und `||` verwechseln**: `&&` braucht beide Bedingungen, `||` nur eine.
- **`switch` ohne `break`**: Ohne `break` läuft der Code in den nächsten `case` weiter.
- **Zu viele `if` ineinander**: Verschachtelte `if`s sind schwer lesbar. Nutze `else if`.
- **Reihenfolge bei `grade`**: Prüfe zuerst den höchsten Wert (90+), sonst wird 95 nicht "A".

## Zusammenfassung

- `if` / `else if` / `else` für Bedingungen mit Bereichen
- `&&` (UND), `||` (ODER) für mehrere Bedingungen
- `switch` / `case` für viele feste Werte
- Ein Vergleich gibt direkt `true` oder `false` zurück
