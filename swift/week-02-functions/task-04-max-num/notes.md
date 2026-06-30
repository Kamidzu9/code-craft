# Bedingte Rückgabe mit if

```swift
func maxNum(a: Int, b: Int) -> Int {
    if a > b {
        return a
    } else {
        return b
    }
}
```

Kurzform mit dem Ternary-Operator: `a > b ? a : b`.
