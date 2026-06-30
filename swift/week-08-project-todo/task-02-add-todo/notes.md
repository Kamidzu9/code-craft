# Array von Dictionaries

```swift
func addTodo(todos: [[String: Any]], text: String) -> [[String: Any]] {
    var newTodos = todos
    let newTodo = createTodo(text: text)
    newTodos.append(newTodo)
    return newTodos
}
```
