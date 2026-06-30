# For-in-Schleifen

Mit `...` (geschlossener Range) iterierst du über einen Bereich.

```swift
func countTo(n: Int) -> [Int] {
    var result: [Int] = []
    for i in 1...n {
        result.append(i)
    }
    return result
}
```
