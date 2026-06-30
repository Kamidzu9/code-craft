# Woche 6: Structs (Eigene Datentypen)

## Schlüsselkonzepte

Ein **Struct** ist ein eigener Datentyp, der mehrere Werte zusammenfasst. Wie ein "Steckbrief" für ein Objekt.

**Properties** sind die Werte, die ein Struct speichert (z. B. Name, Alter).

**Methoden** sind Funktionen, die zu einem Struct gehören.

**`inout` Parameter** – Damit kann eine Funktion den Wert eines Parameters verändern (normalerweise sind Parameter Konstanten).

Structs in Swift haben automatisch einen **Memberwise-Initialisierer** (`Person(name: "Anna", age: 25)`) – wenn man keinen eigenen init schreibt.

## Syntax

### Struct definieren

```swift
struct Person {
    let name: String
    var age: Int
}
```

### Struct verwenden

```swift
let person = Person(name: "Anna", age: 25)
print(person.name) // Anna
```

### inout Parameter

```swift
func birthday(person: inout Person) {
    person.age += 1
}

var anna = Person(name: "Anna", age: 25)
birthday(person: &anna)  // & = Übergabe als Referenz
print(anna.age) // 26
```

### Struct mit eigenem init

```swift
struct Team {
    let name: String
    let members: [String]
    let count: Int

    init(name: String, members: [String]) {
        self.name = name
        self.members = members
        self.count = members.count
    }
}
```

## Häufige Fehler

- **`self` vergessen** – Im eigenen `init` muss `self.propertyName = ...` gesetzt werden.
- **`inout` vergessen** – Ohne `inout` kann eine Funktion den Parameter nicht ändern.
- **Struct vs Class** – Structs werden als Wert (Kopie) übergeben, Klassen als Referenz (Zeiger).
- **`let`-Instanz** – Wenn ein Struct mit `let` erstellt wird, können `var`-Properties nicht geändert werden.

## Beispiel

```swift
struct Person {
    let name: String
    var age: Int
}

func greetPerson(person: Person) -> String {
    return "Hello, \(person.name)!"
}

func isSenior(person: Person) -> Bool {
    return person.age >= 65
}

var mia = Person(name: "Mia", age: 30)
print(greetPerson(person: mia)) // Hello, Mia!
birthday(person: &mia)
print(mia.age) // 31
```
