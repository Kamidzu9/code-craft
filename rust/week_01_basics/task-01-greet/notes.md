# Notizen - Aufgabe 1: greet

Eine Funktion in Rust wird mit `fn` definiert. Der Rückgabetyp steht nach `->`:

```rust
fn greet() -> String {
    String::from("Hello, World!")
}
```

`String::from()` erstellt einen `String` aus einem Text-Literal. Alternativ geht auch `"Hello, World!".to_string()`.

Ohne Semikolon am Ende ist der Ausdruck der Rückgabewert.
