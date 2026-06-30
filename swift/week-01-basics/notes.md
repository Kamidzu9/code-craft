# Woche 1: Hello World & Variablen

## Schlüsselkonzepte

Ein **Programm** ist eine Folge von Anweisungen. Wir schreiben Funktionen, die bestimmte Aufgaben erledigen.

**Variablen** sind Behälter für Daten. Man legt einen Namen fest und weist einen Wert zu.

- `var` – veränderlich (kann später geändert werden)
- `let` – unveränderlich (Konstante, kann nicht geändert werden)

**Datentypen** sagen Swift, welche Art von Daten eine Variable speichert:

- `String` – Text (z. B. "Hallo")
- `Int` – ganze Zahlen (z. B. 42)
- `Double` – Kommazahlen (z. B. 3.14)
- `Bool` – Wahrheitswerte (`true` oder `false`)

## Syntax

### Funktionen

```swift
func funktionsName(parameterName: Typ) -> RückgabeTyp {
    // Anweisungen
    return wert
}
```

### Variablen

```swift
var name = "Swift"       // String
let alter = 30           // Int (Konstante)
var istWahr = true       // Bool
```

### String-Interpolation

```swift
let name = "Anna"
let alter = 25
let text = "Hi, I'm \(name) and I'm \(alter) years old!"
// Ergebnis: "Hi, I'm Anna and I'm 25 years old!"
```

## Häufige Fehler

- **Semikolon vergessen** – In Swift sind Semikolons optional, aber Zeilenumbrüche zählen als Trennung.
- **Groß-/Kleinschreibung** – Swift unterscheidet Groß- und Kleinschreibung: `Name` ist nicht `name`.
- **Typ-Fehler** – `Int` und `String` können nicht direkt gemischt werden: `"Alter: " + alter` geht nicht, stattdessen `"Alter: \(alter)"`.
- **return vergessen** – Wenn eine Funktion einen Rückgabetyp hat, muss `return` verwendet werden.

## Beispiel

```swift
func greet() -> String {
    return "Hello, World!"
}

func add(a: Int, b: Int) -> Int {
    return a + b
}

func isAdult(age: Int) -> Bool {
    return age >= 18
}

let ergebnis = greet()
print(ergebnis) // Hello, World!

let summe = add(a: 5, b: 3)
print(summe) // 8
```
