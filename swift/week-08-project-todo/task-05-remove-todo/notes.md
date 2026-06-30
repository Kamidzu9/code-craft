# Elemente aus Array entfernen

```swift
func removeTodo(todos: [[String: Any]], id: Int) -> [[String: Any]] {
    var newTodos: [[String: Any]] = []
    for todo in todos {
        if todo["id"] as? Int != id {
            newTodos.append(todo)
        }
    }
    return newTodos
}
```
