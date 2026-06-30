# Struct mit Array-Eigenschaft

```swift
struct Team {
    let name: String
    var members: [String]
    var count: Int

    init(name: String, members: [String]) {
        self.name = name
        self.members = members
        self.count = members.count
    }
}
```
