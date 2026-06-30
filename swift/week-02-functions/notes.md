# Woche 2: Funktionen

## Schlüsselkonzepte

**Funktionen** sind wiederverwendbare Code-Blöcke. Sie nehmen Eingaben (Parameter) entgegen und geben eine Ausgabe (Rückgabewert) zurück.

Jede Funktion hat:
- Einen **Namen**
- **Parameter** mit Namen und Typ
- Einen **Rückgabetyp** (oder `Void`, wenn nichts zurückgegeben wird)
- Einen **Body** in geschweiften Klammern `{}`

**Parameter** sind die Eingabewerte. In Swift hat jeder Parameter einen **externen Namen** (beim Aufruf) und einen **internen Namen** (im Body). Wenn beide gleich sind, schreibt man den Namen nur einmal.

## Syntax

```swift
func funktionsName(paramName: Typ) -> RückgabeTyp {
    // Code
    return wert
}

// Aufruf
funktionsName(paramName: wert)
```

## Bedingungen mit if-else

```swift
func describeTemperature(temp: Int) -> String {
    if temp > 30 {
        return "hot"
    } else if temp > 15 {
        return "warm"
    } else {
        return "cold"
    }
}
```

## if-Ausdruck (Swift 5.9+)

```swift
func isPositive(num: Int) -> Bool {
    if num > 0 {
        return true
    } else {
        return false
    }
}
// Kürzer:
func isPositive2(num: Int) -> Bool {
    return num > 0
}
```

## Häufige Fehler

- **Vergessen, `return` zu schreiben** – Swift erwartet einen Rückgabewert, wenn ein `-> Typ` deklariert ist.
- **Falscher Parametername beim Aufruf** – Beim Aufruf muss der externe Parametername angegeben werden: `sayHello(name: "Anna")`, nicht `sayHello("Anna")`.
- **Typen vermischen** – `Double` und `Int` können nicht direkt addiert werden. Man muss `Double(value)` oder `Int(value)` zur Umwandlung nutzen.

## Beispiel

```swift
func sayHello(name: String) -> String {
    return "Hello, \(name)!"
}

func rectangleArea(width: Double, height: Double) -> Double {
    return width * height
}

func maxNum(a: Int, b: Int) -> Int {
    if a > b {
        return a
    } else {
        return b
    }
}

print(sayHello(name: "Anna"))        // Hello, Anna!
print(rectangleArea(width: 5, height: 3)) // 15.0
print(maxNum(a: 10, b: 7))           // 10
```
