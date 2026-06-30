# Fehlerbehandlung mit if

```swift
func safeDivide(a: Double, b: Double) -> String {
    if b == 0 {
        return "Fehler"
    }
    return String(a / b)
}
```
