# Notizen - Aufgabe 2: add_todo

Ein Todo zum Vektor hinzufügen:

```rust
fn add_todo(todos: &mut Vec<TodoItem>, text: &str) {
    let id = todos.len() as u32 + 1;
    todos.push(TodoItem {
        id,
        text: String::from(text),
        done: false,
    });
}
```

`&mut Vec<TodoItem>` erlaubt das Verändern des Vektors. `todos.len()` gibt die aktuelle Anzahl zurück. `as u32` konvertiert `usize` in `u32`.
