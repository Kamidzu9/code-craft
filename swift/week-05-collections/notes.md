# Woche 5: Collections (Arrays & Optionals)

## Schlüsselkonzepte

**Arrays** sind geordnete Sammlungen von Werten. Alle Elemente haben denselben Typ.

**Optionals** (`?`) sind Variablen, die einen Wert ODER `nil` (keinen Wert) haben können. Das ist Swifts Art, mit "kein Wert" umzugehen.

**Wichtige Array-Operationen:**
- `arr.isEmpty` – ist das Array leer?
- `arr.first` – optionales erstes Element
- `arr.append(wert)` – Wert am Ende hinzufügen
- `arr.count` – Anzahl der Elemente

## Syntax

### Optionals

```swift
var name: String? = "Anna"  // kann String ODER nil sein
name = nil                   // erlaubt

// Auslesen mit if-let (optional binding)
if let sichererName = name {
    print(sichererName) // nur ausgeführt wenn name nicht nil ist
}
```

### Arrays durchlaufen und verarbeiten

```swift
func double(arr: [Int]) -> [Int] {
    var result: [Int] = []
    for element in arr {
        result.append(element * 2)
    }
    return result
}
// Oder mit map:
func double2(arr: [Int]) -> [Int] {
    return arr.map { $0 * 2 }
}
```

### Bedingung in der Schleife

```swift
func evenNumbers(arr: [Int]) -> [Int] {
    var result: [Int] = []
    for num in arr {
        if num % 2 == 0 {  // % = modulo (Rest)
            result.append(num)
        }
    }
    return result
}
```

## Häufige Fehler

- **Auf nil zugreifen** – Ein Optional muss entpackt werden, bevor man den Wert nutzt.
- **Array-Grenzen** – Zugriff mit `arr[i]` wo `i >= arr.count` führt zu einem Absturz. Immer prüfen!
- **`%` verwechseln** – `% 2 == 0` bedeutet "gerade", `% 2 == 1` bedeutet "ungerade".

## Beispiel

```swift
func firstElement(arr: [Int]) -> Int? {
    if arr.isEmpty {
        return nil
    }
    return arr[0]
}

func findMax(arr: [Int]) -> Int? {
    if arr.isEmpty { return nil }
    var max = arr[0]
    for num in arr {
        if num > max { max = num }
    }
    return max
}

func evenNumbers(arr: [Int]) -> [Int] {
    var result: [Int] = []
    for num in arr {
        if num % 2 == 0 {
            result.append(num)
        }
    }
    return result
}
```
