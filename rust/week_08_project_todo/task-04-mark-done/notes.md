# Notizen - Aufgabe 4: mark_done

Ein Element im Vektor ändern:

```rust
fn mark_done(todos: &mut [TodoItem], id: u32) {
    for item in todos.iter_mut() {
        if item.id == id {
            item.done = true;
        }
    }
}
```

`iter_mut()` gibt mutable Referenzen auf jedes Element. So kann `item.done` geändert werden. `&mut [TodoItem]` erlaubt das Verändern der Elemente.
