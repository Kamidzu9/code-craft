# Optional nil coalescing

`??` (nil coalescing) liefert einen Default-Wert bei `nil`.

```swift
func getLengthSafe(s: String?) -> Int {
    return s?.count ?? 0
}
```

`s?.count` ist optional chaining – gibt `nil` wenn `s == nil`.
