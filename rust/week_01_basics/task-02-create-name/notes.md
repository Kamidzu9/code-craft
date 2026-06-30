# Notizen - Aufgabe 2: create_name

Variablen werden mit `let` erstellt:

```rust
fn create_name() -> String {
    let name = String::from("Rust");
    name
}
```

Variablen sind standardmäßig unveränderlich (immutable). `name` am Ende der Funktion ist der Rückgabewert (kein Semikolon).
