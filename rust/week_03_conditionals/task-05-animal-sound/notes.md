# Notizen - Aufgabe 5: animal_sound

`match` ist der mächtigste Kontrollfluss in Rust:

```rust
fn animal_sound(animal: &str) -> String {
    match animal {
        "dog" => String::from("woof"),
        "cat" => String::from("meow"),
        _ => String::from("unknown"),
    }
}
```

`_` ist der "alles andere"-Fall (default). `match` muss immer vollständig sein (alle Möglichkeiten abdecken).
