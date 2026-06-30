# Notizen - Aufgabe 5: describe_temperature

`if-else if-else` für mehrere Bedingungen:

```rust
fn describe_temperature(temp: i32) -> String {
    if temp > 30 {
        String::from("hot")
    } else if temp > 15 {
        String::from("warm")
    } else {
        String::from("cold")
    }
}
```

`String::from("...")` erstellt einen `String` aus einem Text-Literal.
