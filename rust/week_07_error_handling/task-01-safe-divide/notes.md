# Notizen - Aufgabe 1: safe_divide

`Result<T, E>` kann `Ok(T)` (Erfolg) oder `Err(E)` (Fehler) sein:

```rust
fn safe_divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("Division durch Null"))
    } else {
        Ok(a / b)
    }
}
```

So vermeidest du Laufzeitfehler: Der Aufrufer muss mit `Result` umgehen (z.B. mit `match` oder `unwrap`).
