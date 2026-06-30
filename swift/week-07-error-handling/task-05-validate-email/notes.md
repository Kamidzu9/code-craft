# String-Prüfungen

```swift
func validateEmail(email: String) -> Bool {
    return email.count >= 3 && email.contains("@")
}
```
