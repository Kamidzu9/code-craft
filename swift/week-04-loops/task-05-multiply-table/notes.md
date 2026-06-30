# Einmaleins mit Schleife

```swift
func multiplyTable(n: Int) -> [Int] {
    var result: [Int] = []
    for i in 1...10 {
        result.append(i * n)
    }
    return result
}
```
