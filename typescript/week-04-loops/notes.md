# Woche 4: Schleifen (Loops)

## Schlüsselkonzepte

Schleifen wiederholen Code mehrmals. Das ist perfekt, um Arrays zu füllen oder zu durchsuchen.

### 1. Die `for`-Schleife

Die `for`-Schleife besteht aus drei Teilen:

```typescript
for (start; bedingung; schritt) {
  // wiederholter Code
}
```

Einfaches Beispiel – von 1 bis n zählen:

```typescript
function countTo(n: number): number[] {
  let result: number[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(i); // i an das Array anhängen
  }
  return result;
}
// countTo(3) → [1, 2, 3]
```

- `let i = 1` – Startwert (einmal am Anfang)
- `i <= n` – Bedingung (wird vor jedem Durchlauf geprüft)
- `i++` – Schritt (wird nach jedem Durchlauf ausgeführt)

### 2. Rückwärts zählen

Du kannst auch rückwärts zählen:

```typescript
function countdown(n: number): number[] {
  let result: number[] = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
}
// countdown(3) → [3, 2, 1]
```

### 3. Summe berechnen mit Schleife

```typescript
function sumTo(n: number): number {
  let sum: number = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i; // oder: sum += i
  }
  return sum;
}
// sumTo(3) → 1 + 2 + 3 = 6
```

Die Kurzform `sum += i` bedeutet `sum = sum + i`.

### 4. Array durchsuchen

Mit einer Schleife kannst du prüfen, ob ein Wert in einem Array vorkommt:

```typescript
function contains(arr: number[], val: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true; // Gefunden! Sofort true zurückgeben
    }
  }
  return false; // Nicht gefunden
}
```

`arr.length` gibt die Anzahl der Elemente im Array zurück. Der Index `i` läuft von `0` bis `arr.length - 1`.

### 5. Einmaleins-Tabelle

```typescript
function multiplyTable(n: number): number[] {
  let result: number[] = [];
  for (let i = 1; i <= 10; i++) {
    result.push(i * n);
  }
  return result;
}
// multiplyTable(3) → [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
```

## Häufige Fehler (Pitfalls)

- **Endlosschleife**: Wenn die Bedingung nie `false` wird, läuft die Schleife ewig. Z.B. `for (let i = 1; i > 0; i++)`.
- **Falscher Startwert**: Arrays in TypeScript fangen bei Index 0 an, aber `countTo` soll bei 1 beginnen.
- **`<=` vs `<`**: `i <= n` geht bis n, `i < n` geht bis n-1.
- **`=` statt `===` in der Bedingung**: Ein `=` weist zu, `===` vergleicht.

## Zusammenfassung

- `for (let i = start; bedingung; schritt)` für wiederholte Aktionen
- `arr.push(wert)` fügt einen Wert am Ende eines Arrays hinzu
- `arr.length` gibt die Array-Größe zurück
- `arr[i]` greift auf das Element an Position i zu
- `return` beendet sofort die ganze Funktion (auch innerhalb der Schleife)
