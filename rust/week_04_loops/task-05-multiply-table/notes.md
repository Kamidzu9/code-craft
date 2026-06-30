# Notizen - Aufgabe 5: multiply_table

Berechnungen in der Schleife:

```rust
fn multiply_table(n: i32) -> Vec<i32> {
    let mut result = Vec::new();
    for i in 1..=10 {
        result.push(i * n);
    }
    result
}
```

`i * n` multipliziert den Schleifenzähler mit n. Da `1..=10` fest ist, hat die Ausgabe immer 10 Elemente.
