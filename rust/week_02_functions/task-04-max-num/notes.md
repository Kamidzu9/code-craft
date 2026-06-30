# Notizen - Aufgabe 4: max_num

`if` ist ein Ausdruck in Rust und kann einen Wert zurückgeben:

```rust
fn max_num(a: i32, b: i32) -> i32 {
    if a > b {
        a
    } else {
        b
    }
}
```

Beide `if`-Arme müssen denselben Typ haben. `return` geht auch, ist aber seltener nötig.
