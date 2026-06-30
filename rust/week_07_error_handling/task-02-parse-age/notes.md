# Notizen - Aufgabe 2: parse_age

Einen String mit `parse()` in eine Zahl umwandeln:

```rust
fn parse_age(input: &str) -> Result<i32, String> {
    match input.parse::<i32>() {
        Ok(n) => Ok(n),
        Err(_) => Err(String::from("Keine gültige Zahl")),
    }
}
```

`parse::<i32>()` versucht, den String in `i32` zu konvertieren. Der `Err(_)` ignoriert den ursprünglichen Fehler und gibt einen eigenen Text zurück.
