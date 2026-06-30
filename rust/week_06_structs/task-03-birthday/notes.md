# Notizen - Aufgabe 3: birthday

Mutable Referenz, um ein Struct zu verändern:

```rust
fn birthday(person: &mut Person) {
    person.age += 1;
}
```

`&mut Person` ist eine mutable (ändernde) Referenz. `person.age += 1` erhöht das Feld um 1. Ohne `mut` wäre das nicht erlaubt.
