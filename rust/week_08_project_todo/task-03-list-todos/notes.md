# Notizen - Aufgabe 3: list_todos

Texte aus einem Struct-Vektor extrahieren:

```rust
fn list_todos(todos: &[TodoItem]) -> Vec<&str> {
    let mut texte = Vec::new();
    for item in todos {
        texte.push(item.text.as_str());
    }
    texte
}
```

`item.text.as_str()` wandelt `String` in `&str` um. `&[TodoItem]` ist ein Slice – eine lesende Ansicht auf den Vektor.
