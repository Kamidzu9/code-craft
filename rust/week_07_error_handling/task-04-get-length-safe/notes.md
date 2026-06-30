# Notizen - Aufgabe 4: get_length_safe

`Option` als Parameter mit `match` verarbeiten:

```rust
fn get_length_safe(s: Option<&str>) -> usize {
    match s {
        Some(text) => text.len(),
        None => 0,
    }
}
```

Kürzer mit `unwrap_or`: `s.unwrap_or("").len()`. `match` ist jedoch ausdrucksstärker und sicherer.
