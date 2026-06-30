# Notizen - Aufgabe 3: double

Vektor durchlaufen und transformieren:

```rust
fn double(arr: &[i32]) -> Vec<i32> {
    let mut result = Vec::new();
    for &x in arr {
        result.push(x * 2);
    }
    result
}
```

`for &x in arr` iteriert über die Werte (dereferenziert). Jeder Wert wird verdoppelt und in den Ergebnis-Vektor geschoben.
