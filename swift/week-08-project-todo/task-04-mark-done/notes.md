# Dictionary-Werte ändern

```swift
func markDone(todos: [[String: Any]], id: Int) -> [[String: Any]] {
    var newTodos: [[String: Any]] = []
    for var todo in todos {
        if todo["id"] as? Int == id {
            todo["done"] = true
        }
        newTodos.append(todo)
    }
    return newTodos
}
```
