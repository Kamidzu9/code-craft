# Summieren mit Schleifen

```swift
func sumTo(n: Int) -> Int {
    var sum = 0
    for i in 1...n {
        sum += i
    }
    return sum
}
```

`sum += i` ist kurz für `sum = sum + i`.
