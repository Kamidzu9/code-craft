# Inout-Parameter

`inout` erlaubt einer Funktion, den Parameter zu verändern.

```swift
func birthday(person: inout Person) {
    person.age += 1
}
```

Aufruf: `birthday(person: &somePerson)`
