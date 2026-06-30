# Werte aus Dictionaries extrahieren

```swift
func listTodos(todos: [[String: Any]]) -> [String] {
    var texts: [String] = []
    for todo in todos {
        if let text = todo["text"] as? String {
            texts.append(text)
        }
    }
    return texts
}
```

`as? String` versucht den Wert sicher als String zu casten.
