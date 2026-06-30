# Notizen - Aufgabe 5: remove_todo

Ein Element aus dem Vektor entfernen:

```rust
fn remove_todo(todos: &mut Vec<TodoItem>, id: u32) {
    let mut pos = None;
    for (i, item) in todos.iter().enumerate() {
        if item.id == id {
            pos = Some(i);
        }
    }
    if let Some(i) = pos {
        todos.remove(i);
    }
}
```

Eleganter mit `retain()`: `todos.retain(|item| item.id != id)`. `.enumerate()` liefert Index und Element. `todos.remove(i)` löscht das Element an Position i.
