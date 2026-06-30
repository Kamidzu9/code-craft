# Woche 4: Schleifen (Loops)

## Schlüsselkonzepte

**Schleifen** wiederholen Code mehrmals. Das ist nützlich, um Arrays zu durchlaufen oder Zahlenreihen zu erzeugen.

- `for`-Schleife – für eine bekannte Anzahl von Wiederholungen
- `while`-Schleife – wiederholt, solange eine Bedingung `true` ist
- `stride(from:to:by:)` – für bestimmte Schrittweiten
- `...` (geschlossener Bereich) – inkludiert den Endwert
- `..<` (halboffener Bereich) – exkludiert den Endwert

## Syntax

### for-in mit Bereich

```swift
for i in 1...5 {
    print(i) // 1, 2, 3, 4, 5
}

for i in 1..<5 {
    print(i) // 1, 2, 3, 4
}
```

### for-in mit Array

```swift
let zahlen = [10, 20, 30]
for zahl in zahlen {
    print(zahl) // 10, 20, 30
}
```

### Absteigend mit stride

```swift
for i in stride(from: 5, through: 1, by: -1) {
    print(i) // 5, 4, 3, 2, 1
}
```

### Array aufbauen

```swift
var ergebnis: [Int] = []
for i in 1...n {
    ergebnis.append(i)
}
```

## Häufige Fehler

- **Off-by-one** – Mit `...` vs `..<` genau aufpassen, welcher Wert inkludiert ist.
- **Vergessen, ein leeres Array zu erstellen** – Vor der Schleife `var ergebnis: [Typ] = []` deklarieren.
- **Endlos-Schleife** – Bei `while` sicherstellen, dass die Bedingung irgendwann `false` wird.

## Beispiel

```swift
func countTo(n: Int) -> [Int] {
    var result: [Int] = []
    for i in 1...n {
        result.append(i)
    }
    return result
}

func sumTo(n: Int) -> Int {
    var sum = 0
    for i in 1...n {
        sum += i
    }
    return sum
}

func multiplyTable(n: Int) -> [Int] {
    var result: [Int] = []
    for i in 1...10 {
        result.append(i * n)
    }
    return result
}
```
