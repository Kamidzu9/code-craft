# Filtern mit Modulo

`%` (Modulo) gibt den Rest einer Division zurück.

```swift
func evenNumbers(arr: [Int]) -> [Int] {
    var result: [Int] = []
    for element in arr {
        if element % 2 == 0 {
            result.append(element)
        }
    }
    return result
}
```

Mit `filter`: `arr.filter { $0 % 2 == 0 }`
