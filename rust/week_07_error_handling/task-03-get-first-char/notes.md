# Notizen - Aufgabe 3: get_first_char

`Option<T>` für Werte, die es geben kann oder nicht:

```rust
fn get_first_char(s: &str) -> Option<char> {
    s.chars().next()
}
```

`s.chars()` gibt einen Iterator über die Zeichen des Strings zurück. `.next()` gibt `Some(erstes_zeichen)` oder `None` bei leerem String.
