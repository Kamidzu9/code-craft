# Notizen - Aufgabe 1: can_vote

Ein direkter Vergleich gibt bereits `bool` zurück:

```rust
fn can_vote(age: i32) -> bool {
    age >= 18
}
```

Das ist kürzer als `if age >= 18 { true } else { false }`.
