# Notizen - Aufgabe 1: Person-Struct

Ein Struct bündelt mehrere Werte:

```rust
struct Person {
    name: String,
    age: u8,
}

impl Person {
    fn new(name: &str, age: u8) -> Person {
        Person {
            name: String::from(name),
            age,
        }
    }
}
```

`impl` definiert Methoden für das Struct. `new` ist eine Konvention für Konstruktoren. `age` allein (ohne `age: age`) ist die Kurzschreibweise, wenn Feld und Variable gleich heißen.
