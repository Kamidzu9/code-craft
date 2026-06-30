# Switch-Anweisung

`switch` vergleicht einen Wert mit mehreren Cases.

```swift
func animalSound(animal: String) -> String {
    switch animal {
    case "dog": return "woof"
    case "cat": return "meow"
    default:    return "unknown"
    }
}
```
