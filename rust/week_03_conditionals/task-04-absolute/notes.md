# Notizen - Aufgabe 4: absolute

Mit `if` als Ausdruck:

```rust
fn absolute(n: i32) -> i32 {
    if n >= 0 {
        n
    } else {
        -n
    }
}
```

`-n` negiert die Zahl (z.B. `-(-5) = 5`). Der `if`-Ausdruck gibt den passenden Wert zurück.
