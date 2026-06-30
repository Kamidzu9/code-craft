# Notizen - Aufgabe 1: count_to

Mit einer `for`-Schleife über einen Bereich:

```rust
fn count_to(n: i32) -> Vec<i32> {
    let mut result = Vec::new();
    for i in 1..=n {
        result.push(i);
    }
    result
}
```

`1..=n` ist ein inklusiver Bereich (1 bis n). `Vec::new()` erstellt einen leeren Vektor.
