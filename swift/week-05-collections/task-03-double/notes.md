# Map-Funktionalität

Mit einer Schleife oder `map`:

```swift
func double(arr: [Int]) -> [Int] {
    var result: [Int] = []
    for element in arr {
        result.append(element * 2)
    }
    return result
}
```

Mit `map`: `arr.map { $0 * 2 }`
