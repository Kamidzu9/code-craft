# Notizen - Aufgabe 3: countdown

Mit `.rev()` wird ein Bereich umgekehrt:

```rust
fn countdown(n: i32) -> Vec<i32> {
    let mut result = Vec::new();
    for i in (1..=n).rev() {
        result.push(i);
    }
    result
}
```

`(1..=n).rev()` erzeugt n, n-1, ..., 1. Klammern sind wichtig wegen der Methodenaufruf-Priorität.
