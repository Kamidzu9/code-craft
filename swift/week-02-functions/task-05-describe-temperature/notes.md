# if / else if / else

Mehrere Bedingungen können mit `else if` verkettet werden.

```swift
func describeTemperature(temp: Int) -> String {
    if temp > 30 {
        return "hot"
    } else if temp > 15 {
        return "warm"
    } else {
        return "cold"
    }
}
```
