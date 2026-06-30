# Dictionary erstellen

`[String: Any]` ist ein Dictionary mit String-Keys und beliebigen Werten.

```swift
func createTodo(text: String) -> [String: Any] {
    return [
        "id": Int.random(in: 1...1000),
        "text": text,
        "done": false
    ]
}
```
