# Structs definieren

Ein Struct ist ein Werttyp mit Eigenschaften und Methoden.

```swift
struct Person {
    let name: String
    var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}
```

Swift generiert automatisch einen Memberwise-Initializer, wenn kein eigener `init` definiert wird.
