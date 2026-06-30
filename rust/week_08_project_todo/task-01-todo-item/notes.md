# Notizen - Aufgabe 1: TodoItem-Struct

Ein einfaches Struct für Aufgaben:

```rust
struct TodoItem {
    id: u32,
    text: String,
    done: bool,
}
```

Jedes Todo bekommt eine eindeutige `id`, einen `text` und einen Erledigt-Status (`done`).
