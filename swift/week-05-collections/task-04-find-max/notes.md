# Maximum finden

```swift
func findMax(arr: [Int]) -> Int? {
    guard !arr.isEmpty else { return nil }
    var maxVal = arr[0]
    for element in arr {
        if element > maxVal {
            maxVal = element
        }
    }
    return maxVal
}
```
