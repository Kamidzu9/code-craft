# Notizen - Aufgabe 3: is_positive

Vergleiche geben immer einen `bool` zurück:

```rust
fn is_positive(num: i32) -> bool {
    num > 0
}
```

Ein `if`-Ausdruck ist hier nicht nötig – der Vergleich `num > 0` ist bereits ein `bool`.
