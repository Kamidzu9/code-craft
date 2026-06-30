# Absteigende Schleifen

Mit `stride(from:to:by:)` oder `reversed()`:

```swift
func countdown(n: Int) -> [Int] {
    var result: [Int] = []
    for i in stride(from: n, through: 1, by: -1) {
        result.append(i)
    }
    return result
}
```

Alternative: `(1...n).reversed()`
