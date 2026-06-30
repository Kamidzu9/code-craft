# Typkonvertierung mit Optionals

```swift
func parseAge(input: String) -> String {
    guard let age = Int(input) else {
        return "Fehler"
    }
    return String(age)
}
```

`Int(String?)` gibt ein Optional zurück – `nil` bei ungültiger Eingabe.
