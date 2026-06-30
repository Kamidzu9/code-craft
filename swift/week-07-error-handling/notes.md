# Woche 7: Fehlerbehandlung (Error Handling)

## Schlüsselkonzepte

Nicht alles läuft immer glatt. Swift bietet mehrere Möglichkeiten, mit Fehlern umzugehen.

- **Optionals (`?`)** – Ein Wert kann `nil` sein (kein Wert vorhanden).
- **`if-let`** (optional binding) – Optional sicher entpacken.
- **`guard-let`** – Optional entpacken, sonst frühes Verlassen der Funktion.
- **Nil-Coalescing (`??`)** – Standardwert falls `nil`: `wert ?? 0`
- **`Int()` Umwandlung** – Kann fehlschlagen und gibt ein Optional zurück.

## Syntax

### Optional entpacken mit if-let

```swift
func getFirstChar(s: String) -> Character? {
    if s.isEmpty {
        return nil
    }
    return s[s.startIndex]
}
```

### Nil-Coalescing

```swift
func getLengthSafe(s: String?) -> Int {
    return s?.count ?? 0
    // Wenn s nil → 0, sonst s.count
}
```

### Typumwandlung

```swift
let zahl = Int("123")  // Optional(123)
let ungültig = Int("abc")  // nil
```

### String prüfen

```swift
func validateEmail(email: String) -> Bool {
    return email.count >= 3 && email.contains("@")
}
```

## Häufige Fehler

- **Forciertes Entpacken (`!`)** – `arr!` verursacht einen Absturz bei `nil`. Nicht bei Benutzereingaben verwenden!
- **`if-let` vergessen** – Auf ein Optional direkt zuzugreifen, ist ein Compiler-Fehler.
- **Nicht auf leere Strings prüfen** – `.first` gibt `nil` bei leeren Strings, aber `.count == 0` sollte separat behandelt werden.

## Beispiel

```swift
func safeDivide(a: Double, b: Double) -> String {
    if b == 0 {
        return "Fehler"
    }
    return String(a / b)
}

func parseAge(input: String) -> String {
    if let age = Int(input) {
        return String(age)
    }
    return "Fehler"
}

func getLengthSafe(s: String?) -> Int {
    return s?.count ?? 0
}

func validateEmail(email: String) -> Bool {
    guard email.count >= 3 else { return false }
    return email.contains("@")
}
```
