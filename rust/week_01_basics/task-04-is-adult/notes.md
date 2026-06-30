# Notizen - Aufgabe 4: is_adult

Vergleiche wie `>=` geben einen `bool`-Wert zurück (`true` oder `false`):

```rust
fn is_adult(age: i32) -> bool {
    age >= 18
}
```

Man könnte auch `if age >= 18 { true } else { false }` schreiben, aber der direkte Vergleich ist kürzer und idiomatischer.
