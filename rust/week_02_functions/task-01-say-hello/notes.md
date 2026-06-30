# Notizen - Aufgabe 1: say_hello

Mit `format!` kannst du Werte in Strings einfügen:

```rust
fn say_hello(name: &str) -> String {
    format!("Hello, {name}!")
}
```

`&str` ist der Typ für String-Referenzen. Er ist der Standard für Text-Parameter, da er keine Kopie erzeugt.
