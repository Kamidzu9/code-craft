# Notizen - Aufgabe 5: introduce

Mit `format!` kannst du Werte in einen String einfügen:

```rust
fn introduce(name: &str, age: i32) -> String {
    format!("Hi, I'm {name} and I'm {age} years old!")
}
```

`&str` ist eine Text-Referenz (String-Slice) – der übliche Typ für Funktionsparameter, die Text entgegennehmen. `format!` funktioniert wie `println!`, gibt aber einen `String` zurück statt zu drucken.
