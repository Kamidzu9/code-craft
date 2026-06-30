# Optionals

Ein Optional (`Int?`) kann einen Wert oder `nil` enthalten.

```swift
func firstElement(arr: [Int]) -> Int? {
    if arr.isEmpty {
        return nil
    }
    return arr[0]
}
```

Kurzform: `arr.first`
