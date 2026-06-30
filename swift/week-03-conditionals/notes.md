# Woche 3: Bedingungen (Conditionals)

## Schlüsselkonzepte

Programme treffen Entscheidungen. Dafür gibt es **Bedingungen**.

- `if` / `else if` / `else` – für mehrere Fälle
- `switch` – für viele feste Werte
- **Vergleichsoperatoren**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Logische Operatoren**: `&&` (und), `||` (oder), `!` (nicht)

## Syntax

### if-else

```swift
if bedingung {
    // Code wenn bedingung true
} else if andereBedingung {
    // Code wenn andereBedingung true
} else {
    // Code sonst
}
```

### switch

```swift
switch wert {
case "muster1":
    // Code
case "muster2":
    // Code
default:
    // Code für alle anderen Fälle
}
```

**Wichtig:** In Swift gibt es nach jedem `case` ein implizites `break`. Das Gegenteil von C – kein `break` nötig!

## Vergleichsoperatoren

```swift
a == b   // gleich
a != b   // ungleich
a > b    // größer
a < b    // kleiner
a >= b   // größer oder gleich
a <= b   // kleiner oder gleich
a && b   // a UND b (beide true)
a || b   // a ODER b (mindestens eins true)
!a       // NICHT a (kehrt true/false um)
```

## Häufige Fehler

- **`=` statt `==`** – `=` ist Zuweisung, `==` ist Vergleich. `if x = 5` ist ein Fehler.
- **Fehlender `default` in `switch`** – Swift erwartet, dass alle möglichen Fälle abgedeckt sind.
- **Falsche Reihenfolge bei `else if`** – Die strengste Bedingung zuerst prüfen.

## Beispiel

```swift
func canVote(age: Int) -> Bool {
    return age >= 18
}

func grade(score: Int) -> String {
    if score >= 90 { return "A" }
    else if score >= 80 { return "B" }
    else if score >= 70 { return "C" }
    else if score >= 60 { return "D" }
    else { return "F" }
}

func login(username: String, password: String) -> Bool {
    return username == "admin" && password == "secret"
}

func animalSound(animal: String) -> String {
    switch animal {
    case "dog": return "woof"
    case "cat": return "meow"
    default: return "unknown"
    }
}
```
