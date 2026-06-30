# Notizen - Aufgabe 5: validate_email

Einfache Validierung mit `contains()` und Längenprüfung:

```rust
fn validate_email(email: &str) -> bool {
    email.len() >= 3 && email.contains('@')
}
```

`.contains('@')` prüft, ob das `@`-Zeichen im String vorkommt. `&&` stellt sicher, dass beide Bedingungen erfüllt sein müssen.
