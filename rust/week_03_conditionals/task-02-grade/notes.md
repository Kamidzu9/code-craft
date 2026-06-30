# Notizen - Aufgabe 2: grade

`if-else if-else` kann mehrere Bedingungen prüfen:

```rust
fn grade(score: i32) -> String {
    if score >= 90 {
        String::from("A")
    } else if score >= 80 {
        String::from("B")
    } else if score >= 70 {
        String::from("C")
    } else if score >= 60 {
        String::from("D")
    } else {
        String::from("F")
    }
}
```

Da `if` ein Ausdruck ist, geben alle Arme einen `String` zurück.
