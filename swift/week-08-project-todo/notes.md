# Woche 8: Mini Projekt – Todo-Liste

## Schlüsselkonzepte

Ein **Dictionary** (`[Key: Value]`) speichert Schlüssel-Wert-Paare. Wie ein Wörterbuch: zu jedem Begriff (Schlüssel) gibt es eine Erklärung (Wert).

In diesem Projekt kombinieren wir fast alles, was wir gelernt haben:

- **Arrays** von Dictionaries
- **String** und **Int** als Werte
- **Bool** für Status (done)
- **`Int.random(in:)`** für zufällige IDs
- **Schleifen** zum Durchsuchen der Todos
- **Bedingungen** zum Prüfen der ID

### Dictionary Zugriff und Änderung

```swift
var dict = ["name": "Anna", "alter": "25"]
dict["name"] = "Mia"     // Wert ändern
dict["stadt"] = "Berlin" // Neuen Eintrag hinzufügen
```

### Dictionary mit verschiedenen Typen

```swift
var todo: [String: Any] = [
    "id": 1,
    "text": "Milch kaufen",
    "done": false
]
// "Any" erlaubt verschiedene Typen in einem Dictionary
```

## Syntax

### Todo hinzufügen

```swift
func addTodo(todos: [[String: Any]], text: String) -> [[String: Any]] {
    var neueListe = todos
    let neuesTodo = createTodo(text: text)
    neueListe.append(neuesTodo)
    return neueListe
}
```

### Todo suchen und ändern

```swift
func markDone(todos: [[String: Any]], id: Int) -> [[String: Any]] {
    var neueListe: [[String: Any]] = []
    for todo in todos {
        var todo = todo
        if let todoId = todo["id"] as? Int, todoId == id {
            todo["done"] = true
        }
        neueListe.append(todo)
    }
    return neueListe
}
```

### Todo entfernen

```swift
func removeTodo(todos: [[String: Any]], id: Int) -> [[String: Any]] {
    var neueListe: [[String: Any]] = []
    for todo in todos {
        if let todoId = todo["id"] as? Int, todoId != id {
            neueListe.append(todo)
        }
    }
    return neueListe
}
```

## Häufige Fehler

- **Type Casting (`as? Typ`)** – Beim Lesen aus `[String: Any]` muss man den Typ mit `as? Int` oder `as? String` umwandeln.
- **IDs vergleichen** – Die ID muss aus dem Dictionary als `Int` gecastet werden, bevor man sie vergleichen kann.
- **Neues Array statt Mutation** – Dictionaries und Arrays sind Werttypen, also eine neue Kopie erstellen.
- **Zufalls-ID** – `Int.random(in: 1...1000000)` kann Doppelgänger erzeugen (für dieses Projekt in Ordnung).

## Vollständiges Beispiel

```swift
func createTodo(text: String) -> [String: Any] {
    return [
        "id": Int.random(in: 1...1000000),
        "text": text,
        "done": false
    ]
}

func listTodos(todos: [[String: Any]]) -> [String] {
    var texts: [String] = []
    for todo in todos {
        if let text = todo["text"] as? String {
            texts.append(text)
        }
    }
    return texts
}

// Beispiel-Nutzung:
var todos: [[String: Any]] = []
todos = addTodo(todos: todos, text: "Milch kaufen")
todos = addTodo(todos: todos, text: "Lernen")
print(listTodos(todos: todos)) // ["Milch kaufen", "Lernen"]
```
