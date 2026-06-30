# Notizen - Aufgabe 4: is_senior

Struct-Feld in einem Vergleich:

```rust
fn is_senior(person: &Person) -> bool {
    person.age >= 65
}
```

`person.age` ist vom Typ `u8` (8 Bit, nur positiv). Der Vergleich `>= 65` gibt einen `bool` zurück.
