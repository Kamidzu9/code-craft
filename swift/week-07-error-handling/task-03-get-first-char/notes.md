# Optionals mit guard

```swift
func getFirstChar(s: String) -> Character? {
    guard !s.isEmpty else { return nil }
    return s[s.startIndex]
}
```

Kurzform: `s.first`
