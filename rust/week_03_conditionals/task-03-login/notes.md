# Notizen - Aufgabe 3: login

Mit `&&` (UND) kannst du zwei Bedingungen verknüpfen:

```rust
fn login(username: &str, password: &str) -> bool {
    username == "admin" && password == "secret"
}
```

`==` vergleicht zwei Werte. `&&` gibt `true` nur zurück, wenn beide Seiten `true` sind.
