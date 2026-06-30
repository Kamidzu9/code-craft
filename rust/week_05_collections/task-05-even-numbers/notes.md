# Notizen - Aufgabe 5: even_numbers

Filtern mit `%` (Modulo):

```rust
fn even_numbers(arr: &[i32]) -> Vec<i32> {
    let mut result = Vec::new();
    for &x in arr {
        if x % 2 == 0 {
            result.push(x);
        }
    }
    result
}
```

`x % 2 == 0` ist `true`, wenn x gerade ist (ohne Rest durch 2 teilbar). Negative Zahlen funktionieren auch.
