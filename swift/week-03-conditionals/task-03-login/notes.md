# Logische Operatoren

`&&` (und) verknüpft zwei Bedingungen.

```swift
func login(username: String, password: String) -> Bool {
    return username == "admin" && password == "secret"
}
```
